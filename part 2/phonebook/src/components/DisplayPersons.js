import React from 'react'
import Person from'./Person'

const DisplayPersons = ({persons, deleteHandler}) => {
  return(
    <ul>
      {persons.map(person => 
      <Person key={person.id} person={person} deleteHandler={deleteHandler}
      />)}
    </ul>
  )
}

export default DisplayPersons
