import React from 'react'
import DisplayPersons from './DisplayPersons'

const FilterSearch = ({persons, search}) =>{
  const regexp = new RegExp(search, 'i')
  console.log()
  return(
    <div>
      <DisplayPersons persons={persons.filter(person => (person.name.match(regexp)) || person.number.match(regexp))}/>
    </div>
  )
}

export default FilterSearch