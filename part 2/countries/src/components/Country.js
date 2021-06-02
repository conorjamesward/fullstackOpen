const Country = ({country, handleShow}) => {
  //if the 'show' button is clicked, the selected countries name is passed up through an anonymous function call up to the app component, where the filter is set to that name, making the displayCountries component respond as if you had typed in the full name, and render the single 'unpacked' view
  return (
    <li>{country.name}
      <button onClick={()=>handleShow(country.name)}>Show</button>
    </li>
  )
}
export default Country