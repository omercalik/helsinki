import React from "react"

const Filter = ({ callback }) => {
  return (
    <div>
      filter shown with: <input onChange={callback} />
    </div>
  )
}

export default Filter
