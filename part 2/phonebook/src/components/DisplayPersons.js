import React from 'react'
import Person from'./Person'

const DisplayPersons = ({persons}) => {
  return(
    <ul>
      {persons.map(person => <Person id={person.name} person={person}/>)}
    </ul>
  )
}

export default DisplayPersons
