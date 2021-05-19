import React, { useState } from 'react'
import FilterSearch from './components/FilterSearch'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const handleNewPerson = (event) =>{
    event.preventDefault()
    if (persons.some(entry => entry.name === newName)){
      alert(`${newName} is already added to the phonebook`)
    } 
    else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const [ newName, setNewName ] = useState('')
  const handleNewName = (event) =>{
    setNewName(event.target.value)
  }

  const [newNumber, setNewNumber] = useState('')
  const handleNewNumber = (event) =>{
    setNewNumber(event.target.value)
  }

  const [newSearch, setNewSearch] = useState('')
  const handleNewSearch = (event) =>{
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input
          value={newSearch}
          onChange={handleNewSearch}
        />
      </div>
      <h2>Add a new entry</h2>
      <form onSubmit={handleNewPerson}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNewName}
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={handleNewNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <FilterSearch persons={persons} search={newSearch}/>
    </div>
  )
}

export default App