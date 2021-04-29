const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const Header = ({course}) =>{
    return(
      <h1>{course.name}</h1>
    );
  }
  const Parts = ({content}) =>{
    let partsList = []
    for(let i = 0; i < content.parts.length; i++) {
      console.log(content.parts[i].name, content.parts[i].exercises)
      partsList.push(<p>{content.parts[i].name}, {content.parts[i].exercises}</p>)
    }
    return (
      partsList
    )
  }
  const Total = ({total}) =>{
    let sum = 0
    for(let i = 0; i < total.parts.length; i++){
      sum += total.parts[i].exercises
    }
    return(
      <p>Number of exercises {sum}</p>
    )
  }
  return (
    <div>
      <Header course={course}/>
      <Parts content={course}/>
      <Total total={course}/>
    </div>
  );
}

export default App;
