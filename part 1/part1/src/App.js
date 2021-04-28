const Hello = ({name}) =>{
  return(
    <div>
      <p>Hello {name} </p>
    </div>
  )
}
const App = () =>{
  return (
    <>
      <Hello name="bob"/>
    </>
  )
}

export default App;
