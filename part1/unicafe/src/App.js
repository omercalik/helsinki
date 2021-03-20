import React, { useState } from "react"

const Statistic = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  return good + neutral + bad === 0 ? (
    <p>No feedback given</p>
  ) : (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <Statistic text="good" value={good} />
            </td>
          </tr>
          <tr>
            <td>
              <Statistic text="neutral" value={neutral} />
            </td>
          </tr>
          <tr>
            <td>
              <Statistic text="bad" value={bad} />
            </td>
          </tr>
          <tr>
            <td>
              <Statistic text="all" value={good + bad + neutral} />
            </td>
          </tr>
          <tr>
            <td>
              <Statistic
                text="average"
                value={(good * 1 - bad * 1) / (good + bad + neutral)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Statistic
                text="positive"
                value={(good * 100) / (good + bad + neutral) + "%"}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <div style={{ display: "flex" }}>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <br />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App
