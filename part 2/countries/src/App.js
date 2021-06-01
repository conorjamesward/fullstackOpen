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

  return (
    <div>
      <form>
        <input
        value = {filter}
        onChange = {handleFilter}
        />
      </form>
      <DisplayCountries loading={loading} list={list} filter={filter} handleShow={handleShow}/>
    </div>
  )
}

export default App
