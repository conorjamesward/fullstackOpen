import {useState, useEffect} from 'react'
import axios from 'axios'
import DisplayCountries from './components/DisplayCountries'

const App = () => {
  const [list, setList] = useState([])

  const [loading, setLoading] = useState(false)
  /*
  The country information is gathered and actively filtered as the 
  user types, the user input and the full list is passed into the
  displaycountries component (along with everything else, because
  it is the main component that handles all displayed information).
  With the information passed to it, displaycountries filters 
  information and adjusts the display
  */
  useEffect(()=>{
    setLoading(true)
    axios.get('https://restcountries.eu/rest/v2/all/')
    .then(response => setList(response.data))
    setLoading(false)
  },[])

  const [filter, setFilter] = useState('')
  const handleFilter = (event) =>{
    setFilter(event.target.value)
  }
  const handleShow = (name) =>{
    setFilter(name)
  }

  /*
  location is set from the unpacked country component (the extended 
  view of only one country). Weather is then updated here and passed
  back to it
  */
  const [location, setLocation] = useState({})
  const [weather, setWeather] = useState({})
  const api_key = process.env.REACT_APP_WEATHER
  useEffect(()=>{
    axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${location}`)
      .then(response => setWeather(response.data))
  },[location, api_key])

  const handleLocation = (capital) =>{
    setLocation(capital)
  }

  //everything is passed into displayCountries, which handles all dynamic display information
  return (
    <div>
      <form>
        <input
        value = {filter}
        onChange = {handleFilter}
        />
      </form>
      <DisplayCountries 
      loading={loading} 
      list={list} 
      filter={filter} 
      handleShow={handleShow}
      handleLocation={handleLocation}
      weather={weather}
      />
    </div>
  )
}

export default App
