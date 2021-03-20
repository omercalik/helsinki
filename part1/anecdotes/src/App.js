import React, { useState } from "react"

const App = () => {
  const arr = Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 0)
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(arr)
  const [mostVoted, setmostVoted] = useState(0)

  const handleClick = () => {
    let index = Math.floor(Math.random() * 5)
    setSelected(index)
  }
  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)

    let max = 0

    for (let i = 0; i <= points.length; i++) {
      if (points[i] > max) {
        max = points[i]
        setmostVoted(i)
      }
    }
  }

  return (
    <div>
      {anecdotes[selected]}
      <p>Has {points[selected]} votes</p>
      <br />
      <div style={{ display: "flex" }}>
        <button onClick={handleClick}>next anecdote</button>
        <button onClick={handleVote}>Vote</button>
      </div>

      <br />

      <h1>Anecdote with most votes</h1>
      {anecdotes[mostVoted]}
      <p>Has {points[mostVoted]} votes</p>
    </div>
  )
}

export default App
