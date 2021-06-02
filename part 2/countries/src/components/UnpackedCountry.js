import React, {useEffect} from 'react'
const UnpackedCountry = ({filteredCountry, handleLocation, weather}) =>{
  useEffect(()=>{
    handleLocation(filteredCountry.capital)
  },[filteredCountry.capital, handleLocation])
  if(weather.current !== undefined){
    console.log(weather.current)
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
        <h4>Weather in {filteredCountry.capital}</h4>
        <p>temperature {weather.current.temperature} celcius</p>
        <img src={weather.current.weather_icons} alt=""></img>
        <p>wind {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}
export default UnpackedCountry