import Course from "./Course"

function App() {
  const course = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ]

  let total1 = 0
  let total2 = 0

  course[0].parts.forEach((part) => (total1 += part.exercises))
  course[1].parts.forEach((part) => (total2 += part.exercises))

  return (
    <div>
      <Course course={course[0]} total={total1} />
      <Course course={course[1]} total={total2} />
    </div>
  )
}

export default App
