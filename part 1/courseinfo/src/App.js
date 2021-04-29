const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundementals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = ({course}) =>{
    return(
      <h1>{course}</h1>
    );
  }
  const Part = ({part, exercise}) =>{
    return (
      <p>{part}{exercise}</p>
    )
  }
  const Total = ({exercises}) =>{
    let sum = 0
    for(let i = 0; i < exercises.length; i++){
      sum += exercises[i]
    }
    return(
      <p>Number of exercises {sum}</p>
    )
  }
  return (
    <div>
      <Header course={course}/>
      <Part part={part1} exercise={exercises1}/>
      <Part part={part2} exercise={exercises2}/>
      <Part part={part3} exercise={exercises3}/>
      <Total exercises={[exercises1,exercises2,exercises3]}/>
    </div>
  );
}

export default App;
