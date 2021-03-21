import React, { useState, useEffect } from "react"
import axios from "axios"
import CountryInfo from "./CountryInfo"
import CountryList from "./CountryList"

const App = () => {
  const [searchTerm, setsearchTerm] = useState("")
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [displayedCountry, setDisplayedCountry] = useState()

  const displayCallback = (ctr) => {
    setDisplayedCountry(ctr)
    console.log(displayedCountry)
  }

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <div>
      find countries:{" "}
      <input
        onChange={(e) => {
          setsearchTerm(e.target.value)
          let tmpArr = countries.filter((country) => {
            let tmp = country.name.toLowerCase()
            return tmp.includes(searchTerm)
          })
          setFilteredCountries(tmpArr)
        }}
      />
      {filteredCountries.length === 1 ? (
        <CountryInfo country={filteredCountries[0]} />
      ) : (
        <CountryList countries={filteredCountries} cb={displayCallback} />
      )}
      {displayedCountry && <CountryInfo country={displayedCountry} />}
    </div>
  )
}

export default App
