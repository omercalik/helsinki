import axios from "axios"
import React, { useEffect, useState } from "react"
import dotenv from "dotenv"
dotenv.config()
const CountryInfo = ({ country }) => {
  const endpoint = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.name}`
  const [weatherData, setWeatherData] = useState("")
  useEffect(() => {
    console.log(endpoint)
    const fetchData = async () => {
      const res = await axios.get(endpoint)
      console.log(res)
      setWeatherData(res.data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <div>
        {console.log(country)}
        <h1>{country.name}</h1>
        <h5>Capital : {country.capital}</h5>
        <h3>
          Languages
          <ul>
            {country.languages.map((language) => (
              <li>{language.name}</li>
            ))}
          </ul>
        </h3>
        <img style={{ width: "100px" }} src={country.flag} alt="" />
        <h4>Weather in {weatherData.location.name}</h4>
        <h5>Temperature : {weatherData.current.temperature} Celcius</h5>
      </div>
    </div>
  )
}

export default CountryInfo
