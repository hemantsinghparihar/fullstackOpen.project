import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  
  // let random=Math.floor(Math.random()*anecdotes.length)
  // console.log(anecdotes[random])
   
  // const [selected, setSelected] = useState(anecdotes[2])
   
  // const handleNext=()=>{
  //   let random=Math.floor(Math.random()*anecdotes.length)
  //   console.log(random)
  //   const selected=anecdotes[random];
  //   console.log("selected before",selected)
  //   setSelected(selected)
  //   console.log("after",selected)
  //   //setSelected(anecdotes[random])
  // }
  const [selected, setSelected] = useState(0)
  const [votes,setVotes]=useState({})
   
  const handleNext=()=>{
    let random=Math.floor(Math.random()*anecdotes.length)
    console.log(random)
    const selected= random;
    console.log("selected before",selected)
    setSelected(selected)
    console.log("after",selected)
    //setSelected(anecdotes[random])
  }
  const handleVotes=()=>{
    const updatedVotes={...votes}
    updatedVotes[selected]=(updatedVotes[selected] || 0) + 1;//if there is no votes yet given to a certain anecdotes then we can not directly just add a number to it cause there is only reference to the index but no such number
    console.log("before:  ",updatedVotes)
    setVotes(updatedVotes)
    console.log("updated votes after: ",updatedVotes)
    
  }
  const mostVoted= Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b, null);
  return (
    <div>

      
      {anecdotes[selected]}
      {votes[selected]}
      <button onClick={handleVotes}>vote</button>
      <button onClick={handleNext}>next</button>
      <h1>Anecdotes with most votes</h1>
      <p>{anecdotes[mostVoted]}</p>
      <p>{`loved ${votes[selected]} times`}</p>
      
      <p></p>
    </div>
  )
}

export default App