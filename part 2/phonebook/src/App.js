import React, { useState, useEffect} from 'react'
import FilterSearch from './components/FilterSearch'
import Notification from './components/Notification'
import phonebookService from './services/phonebook'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ errorMessage, setErrorMessage ] = useState(null)
  const [ badMessage, setBadMessage ] = useState()
  //functon makes all calls to display an error message a one-liner below for readability
  function displayMessage (message, bad){
    setErrorMessage(message)
    setBadMessage(bad)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
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

  useEffect(()=>{
    phonebookService
      .getAll()
      .then(initalBook =>{
        setPersons(initalBook)
      })
  }, [])

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
        phonebookService
          .update(changePerson[0].id, {name: newName, number:newNumber}, displayMessage)
          .then(response => {
            //fixed deep vs shallow reference issue... ineligantly
            const updatedPersons = JSON.parse(JSON.stringify(persons))
            updatedPersons[response.id - 1] = response
            setPersons(updatedPersons)
            displayMessage(`${newName}'s number has now been updated to ${newNumber}`, false)
          })
          //catch error if person is deleted and updated in another window around the same time
          .catch(() => {
            displayMessage(`information on ${newName} has already been removed from the server`, true)
          })
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
            displayMessage(`${response.name} has been added to the phonebook`, false)
          })
      }
    }
    setNewName('')
    setNewNumber('')
  }

  const handleDeletePerson = (event) => {
    if (window.confirm(`Do you want to delete ${event.target.name} from your phonebook?`)){
      phonebookService
        .deleter(event.target.id)
        .then(afterDeletion => {
          setPersons(afterDeletion)
          displayMessage(`${event.target.name} has been removed from the phonebook`, false)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
      message={errorMessage}
      bad={badMessage}/>
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