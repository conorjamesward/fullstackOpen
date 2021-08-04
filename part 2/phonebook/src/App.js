import React, { useState, useEffect} from 'react'
import FilterSearch from './components/FilterSearch'
import phonebookService from './services/phonebook'

const App = () => {
  const [ persons, setPersons ] = useState([])

useEffect(()=>{
  phonebookService
  .getAll()
  .then(initalBook =>{
    setPersons(initalBook)
    })
}, [persons])

  const handleNewPerson = (event) =>{
    event.preventDefault()
    if (persons.some(entry => entry.name === newName && entry.number === newNumber)) {
      alert(`${newName} is already in the phonebook with that name and number`)
    }
    else {
      const changePerson = persons.filter(entry => entry.name === newName)
      //make sure this contact doesn't exist, and this is just a number update
      if (changePerson.length !== 0 && // also get user consent before updating
        window.confirm(`Do you want to change the number for ${newName} from ${changePerson[0].number} to ${newNumber}?`))
      {
        phonebookService.update(changePerson[0].id, {name: newName, number:newNumber})
      } 
      else {
        const personObject = {
          name: newName,
          number: newNumber
        }
        phonebookService
          .create(personObject)
          .then(response => {
            setPersons(persons.concat(response))
          })
      }
    }
    setNewName('')
    setNewNumber('')
  }

  const handleDeletePerson = (event) => {
    if (window.confirm(`Do you want to delete ${event.target.name} from your phonebook?`)){
      phonebookService.deleter(event.target.id)
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
      <FilterSearch persons={persons} search={newSearch} deleteHandler={handleDeletePerson}/>
    </div>
  )
}

export default App