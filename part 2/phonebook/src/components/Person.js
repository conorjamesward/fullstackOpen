import React from 'react'
const Person = ({person, deleteHandler}) => {
  return(
    <li>
      {person.name} {person.number} 
      <button 
      id={`${person.id}`} 
      className="deleteButton" 
      name={person.name}
      onClick={deleteHandler}>
      delete</button>
    </li>
  )
}
export default Person