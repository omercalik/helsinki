import React from "react"
import Service from "./Service"

const Persons = ({ persons, filter, cb }) => {
  const handleDelete = (id) => {
    Service.deleteContact(id)
    const finalContacts = persons.filter((person) => {
      return person.id !== id
    })
    cb(finalContacts)
  }

  return (
    <div>
      {persons && filter === ""
        ? persons.map((person) => (
            <p key={person.name}>
              {person.name} {person.number}{" "}
              <span>
                <button
                  onClick={() => {
                    handleDelete(person.id)
                  }}
                >
                  Delete
                </button>
              </span>
            </p>
          ))
        : persons &&
          persons
            .filter((person) => {
              let tmp = person.name.toLowerCase()
              return tmp.includes(filter.toLowerCase())
            })
            .map((person) => (
              <div>
                <p key={person.name}>
                  {person.name} {person.number}
                  <span>
                    <button>Delete</button>
                  </span>
                </p>
              </div>
            ))}
    </div>
  )
}

export default Persons
