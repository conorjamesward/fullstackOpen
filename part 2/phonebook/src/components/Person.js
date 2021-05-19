import React from 'react'
const Person = ({id, person}) => {
  console.log('keys:', id)
  return(
    <li key={id}>
      {person.name} {person.number}
    </li>
  )
}
export default Person