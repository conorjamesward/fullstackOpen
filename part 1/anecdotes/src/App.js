import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const MostVotes = ({votes, anecdotes}) =>{
  if (Math.max(...votes) === 0){
    return <div></div>
  }
  return(
    <div>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
    </div>
  )
}

const App = () => {

  const handleNew = () =>{
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }
  
  const handleVotes = () =>{
    const updatedVotes = [...votes]
    updatedVotes[selected] += 1
    setVotes(updatedVotes) 
  }

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={handleNew} text="next anecdote"/>
      <Button handleClick={handleVotes} text="vote"/>
      <MostVotes votes={votes} anecdotes={anecdotes}/>
    </div>
  )
}

export default App