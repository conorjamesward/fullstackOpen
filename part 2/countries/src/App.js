import React, {useState, useEffect} from 'react'
import axios from 'axios'
import DisplayCountries from'./components/DisplayCountries'

const App = () =>{

  const [list, setList] = useState([])

  const [filter, setFilter] = useState('')
  const handleFilter = (event) =>{
    setFilter(event.target.value)
  }

  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    setIsLoading(true)
    axios.get('https://restcountries.eu/rest/v2/all/')
    .then(response =>{
      setList(response.data)
    })
    setIsLoading(false)
  },[])

  return(
    <div>
      <form>
        <input
        value={filter}
        onChange={handleFilter}
        />
      </form>
      <DisplayCountries countries={list} filter={filter} loading={isLoading}/>
    </div>
  )
}

export default App;
