import React from 'react'
import DisplayPersons from './DisplayPersons'

const FilterSearch = ({persons, search, deleteHandler}) =>{
  const regexp = new RegExp(search, 'i')
  return(
    <div>
      <DisplayPersons 
      deleteHandler={deleteHandler}
      persons={persons.filter(person => (person.name.match(regexp)) || person.number.match(regexp))}/>
    </div>
  )
}
export default FilterSearch