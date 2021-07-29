import React from 'react'
const Person = ({person, deleteHandler}) => {
  return(
    <li>
      {person.name} {person.number} <button id={`${person.name}`} className="deleteButton" onClick={deleteHandler}>delete</button>
    </li>
  )
}
export default Person