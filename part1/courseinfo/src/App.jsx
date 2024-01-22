import React from 'react'
import Header from './Header'
import Contents from './Contents'
import Total from './Total'

function App() {
  // exercise1.2
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  // exercise 1.3
  // const course = 'Half Stack application development'
  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }

  //exercise 1.4
  // const course = 'Half Stack application development'
  // const parts = [
  //   {
  //     name: 'Fundamentals of React',
  //     exercises: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14
  //   }
  // ]

  //exercise1.5
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
  return (
    <div>
      {/* exercise 1.5 */}
       <Header course={course.name}/>
        <Contents parts={course.parts}/>
        <Total parts={course.parts}/>

        {/* exercise 1.4 */}
        {/* <Header course={course}/>
        <Contents parts={parts}/>
        <Total parts={parts}/> */}

         {/* exercise 1.3 */}
        {/* <Header course={course}/>
        <Contents part1={part1}  part2={part2} part3={part3}/>
        <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />  */}

          {/* exercise1.2 */}
         {/* <Contents part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2}  part3={part3} exercises3={exercises3} />
      
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} /> */}
    </div>
  )
}

export default App
