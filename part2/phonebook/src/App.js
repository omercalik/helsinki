import React, { useState, useEffect } from "react"
import Filter from "./Filter"
import PersonForm from "./PersonForm"
import Persons from "./Persons"
import Service from "./Service"

const App = () => {
  const [persons, setPersons] = useState()

  const [filter, setFilter] = useState("")

  useEffect(() => {
    Service.getAll().then((initialPersons) => setPersons(initialPersons))
  }, [])

  const callBack = (val) => {
    setPersons(val)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        callback={(e) => {
          setFilter(e.target.value)
        }}
      />

      <h3>Add a new </h3>
      <PersonForm persons={persons} cb={callBack} />

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} cb={callBack} />
    </div>
  )
}

export default App
