import React, {useEffect} from 'react'
const UnpackedCountry = ({filteredCountry, handleLocation, weather}) =>{
  //update location when this component is rendered, + if the data is updated
  useEffect(()=>{
    handleLocation(filteredCountry.capital)
  },[filteredCountry.capital, handleLocation])
  //make sure data has been retrieved from weather api
  if(weather.current !== undefined){
    //all the display information accessed from the 2 apis
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
    //default return if the weather api hasn't responded
  } else {
    return <div>Loading...</div>
  }
}
export default UnpackedCountry