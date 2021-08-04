import axios from 'axios'
const baseUrl = 'http://localhost:3001/phonebook'

const getAll = () =>{
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject =>{
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) =>{
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deleter = (id) => {
  const done = axios.delete(`${baseUrl}/${id}`)
  return (done.then(() => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }))
}

export default {getAll, create, update, deleter} 