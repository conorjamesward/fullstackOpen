const Country = ({country, handleShow}) => {
  return (
    <li>{country.name}
      <button onClick={()=>handleShow(country.name)}>Show</button>
    </li>
  )
}
export default Country