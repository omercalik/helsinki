import React from "react"

const CountryList = ({ countries, cb }) => {
  const handleClick = (ctr) => {
    cb(ctr)
  }
  return countries.length > 10 ? (
    <p>Too many results,please specify.</p>
  ) : (
    countries.map((country) => (
      <p key={country.id}>
        {country.name}
        <span>
          <button onClick={() => handleClick(country)}>show</button>
        </span>
      </p>
    ))
  )
}

export default CountryList
