import React from 'react'

const Country = ({country}) =>{
  return(<li key={country.name}>{country.name}</li>)
}
export default Country