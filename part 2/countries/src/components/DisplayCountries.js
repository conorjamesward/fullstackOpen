import Country from './Country'
import UnpackedCountry from './UnpackedCountry'
const DisplayCountries = ({loading, list, filter, handleShow}) => {
  if(loading)return<div>Loading...</div> 
  else {
    const regexp = new RegExp(filter, 'i')
    const filteredCountries = list.filter(country => country.name.match(regexp))
    if (filteredCountries.length <= 10 && filteredCountries.length > 1){
      return(
        <ul>
          {filteredCountries.map(country => <Country key={country.name} country={country} handleShow={handleShow}/>)}
        </ul>
      )
    } else if(filteredCountries.length === 1){
      return(
        <UnpackedCountry filteredCountry={filteredCountries[0]}/>
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
