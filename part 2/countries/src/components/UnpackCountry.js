import React from 'react'

const UnpackCountry = ({filteredCountry}) =>{
  return(
    <div>
      <h2>{filteredCountry.name}</h2>
      <p>Captial {filteredCountry.capital}</p>
      <p>Population {filteredCountry.population}</p>
      <h4>Languages</h4>
      <ul>
        {filteredCountry.languages.map(language => <li key={language.name}>{language.name}</li>)}
      </ul>
      <img src={filteredCountry.flag} alt=""></img>
      
    </div>
  )
}

export default UnpackCountry