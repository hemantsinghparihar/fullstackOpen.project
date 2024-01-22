import { useState } from 'react'

const Statistics = (props) => {
  if(props.good===0 && props.bad===0 && props.neutral===0){
    return(
      <>
      <h1>statics</h1>
      <p> No feedback given </p>
      </>
    )

  }
  
  return(
    <>
    <h1>statics</h1>
    <table>
      <tbody>
      
          <StatisticLine text='good' value={props.good} />
          <StatisticLine text='neutral' value={props.neutral} />
          <StatisticLine text='bad' value={props.bad} />
          <StatisticLine text='all' value={props.total} />
          <StatisticLine text='average' value={props.average} />
          <StatisticLine text='positive' value={props.positive }/>
      </tbody>
    </table>
        
      {/* <h1>statics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.total}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}</p> */}
    </>
  )
} 

const StatisticLine=(props)=>{
  return(
    <>
    
      <tr>
        <td>{props.text}</td>
        <td> {props.value}</td>
      </tr>
       
    </>
  )
}

const Button=(props)=>{
  return(
    <>
     <button onClick={props.onClick}>{props.text}</button>
    </>
  )
}
// exercise 1.6-1.7
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClicks=()=>{
    const updatedGood=good+1;
    setGood(updatedGood)
    setTotal(updatedGood+neutral+bad)
    setAverage((updatedGood-bad)/(updatedGood+neutral+bad))
    setPositive((updatedGood /(updatedGood+neutral+bad)) * 100)
  }
  const handleNeutral=()=>{
    const updatedNeutral=neutral+1;
    setNeutral(updatedNeutral)
    setTotal(good+updatedNeutral+bad)
    setAverage((good-bad)/(good+updatedNeutral+bad))
    setPositive((good /(updatedNeutral+good+bad)) * 100)
  }
  const handleBadClicks=()=>{
    const updatedBadClicks=bad+1;
    setBad(updatedBadClicks)
    setTotal(good+neutral+updatedBadClicks)
    setAverage((good-bad)/(good+neutral+updatedBadClicks))
    setPositive((good /(updatedBadClicks+neutral+good)) * 100)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClicks} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBadClicks} text='bad' />
      {/* <button onClick={handleGoodClicks}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBadClicks}>bad</button> */}
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}/>
      {/* <h1>statics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive}</p> */}
    </div>
  )
}

export default App
