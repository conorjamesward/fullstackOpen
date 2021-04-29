const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React ',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data ',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component ',
    exercises: 14
  }

  const Header = ({course}) =>{
    return(
      <h1>{course}</h1>
    );
  }
  const Part = ({part}) =>{
    return (
      <p>{part.name}{part.exercises}</p>
    )
  }
  const Total = ({exercises}) =>{
    console.log(exercises)
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
      <Part part={part1}/>
      <Part part={part2}/>
      <Part part={part3}/>
      <Total exercises={[part1.exercises, part2.exercises, part3.exercises]}/>
    </div>
  );
}

export default App;
