import React from 'react'
import Country from './Country'
import UnpackCountry from './UnpackCountry'

const DisplayCountires = ({countries, filter, loading}) =>{
  //prevents issues with empty data passing to the filter
  if(loading) return(<div>Loading...</div>)
  else {
    //filter list
    const regexp = new RegExp(filter, 'i')
    const filteredCountries = countries.filter(country => country.name.match(regexp))
    //check length and display different results
    if (filteredCountries.length <= 10 && filteredCountries.length > 1){
      return(
        <ul>
          {filteredCountries.map(country => <Country key={country.alpha2Code} country={country}/>)}
        </ul>
      ) 
    } else if (filteredCountries.length === 1){
      return (
        <UnpackCountry filteredCountry={filteredCountries[0]}/>
      )
    }
    //default case
    return <p>Too many options, please make a specific search</p>
  }
}
export default DisplayCountires