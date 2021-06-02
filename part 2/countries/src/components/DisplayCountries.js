import Country from './Country'
import UnpackedCountry from './UnpackedCountry'
const DisplayCountries = ({loading, list, filter, handleShow, handleLocation, weather}) => {
  //make sure data has been recived
  if(loading)return<div>Loading...</div> 
  else {
    //set regular expression based on current user input -i flag for ingoring capitalization
    const regexp = new RegExp(filter, 'i')
    const filteredCountries = list.filter(country => country.name.match(regexp))
    //short list of countries, with 'show' buttons
    if (filteredCountries.length <= 10 && filteredCountries.length > 1){
      return(
        <ul>
          {filteredCountries.map(country => <Country key={country.name} country={country} handleShow={handleShow}/>)}
        </ul>
      )
    //single country, with full display + weather
    } else if(filteredCountries.length === 1){
      return(
        <UnpackedCountry filteredCountry={filteredCountries[0]}
        handleLocation={handleLocation}
        weather={weather}
        />
      )
    }
    //default return with too many
    return(
      <div>
        too many options, try searching
      </div>
    )
  }
}

export default DisplayCountries
