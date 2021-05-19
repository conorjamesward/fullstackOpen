import React from 'react'
const Person = ({key, person}) => {
  return(
    <li key={key}>
      {person.name} {person.number}
    </li>
  )
}
export default Person