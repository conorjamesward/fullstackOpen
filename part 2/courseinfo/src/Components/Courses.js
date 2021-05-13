import React from 'react'

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const total = course.parts.reduce((sum, part) => {
    return(sum += part.exercises)
  }, 0)
  return(
    <p><b>Number of exercises {total}</b></p>
  ) 
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}

const Parts = ({parts}) => {
  return(
    parts.map(part => <Part key={part.id} part={part}/>)
  )
}

const Content = ({ course }) => {
  return (
    <div>
      <Parts parts={course.parts}/>
    </div>
  )
}

const Course = ({course}) =>{
  return(
    <>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </>
  )
}

const Courses = ({courses}) =>{
  return(
    courses.map(course => <Course key={course.id} course={course}/>)
  )
}

export default Courses