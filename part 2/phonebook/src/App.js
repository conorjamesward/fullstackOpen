import React, { useState } from 'react'

const Person= ({id, name}) => <li key={id}>{name}</li>

const App = () => {
  const [ persons, setPersons ] = useState([
    {
      id: 'Arto Hellas',
      name: 'Arto Hellas' 
    }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addEntry = (event) =>{
    event.preventDefault()
    console.log('it works!', event.target)
    const personObject = {
      id: newName,
      name: newName,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNewName = (event) =>{
    console.log('this also works!', event.target.value)
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addEntry}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNewName}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person=> 
          <Person key={person.id} name={person.name}></Person>
          )}
      </ul>
    </div>
  )
}

export default App