import {useState, useEffect} from 'react'
import axios from 'axios'
import DisplayCountries from './components/DisplayCountries'

const App = () => {
  const [list, setList] = useState([])

  const [loading, setLoading] = useState(false)

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

  //!weather stuff
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

  return (
    <div>
      <form>
        <input
        value = {filter}
        onChange = {handleFilter}
        />
      </form>
      <DisplayCountries 
      loading={loading} list={list} filter={filter} handleShow={handleShow}
      handleLocation={handleLocation}
      weather={weather}
      />
    </div>
  )
}

export default App
