import React from 'react'
//exercise 1.3
// function Contents({part1,part2,part3}) {
//     const { name: name1, exercises: exercises1 } = part1;
//     const { name: name2, exercises: exercises2 } = part2;
//     const { name: name3, exercises: exercises3 } = part3;
function Contents(props) {
   console.log(props)
  return (
    <div>
         
        <p>
        {props.parts[0].name} {props.parts[0].exercises}
      </p>
      <p>
        {props.parts[1].name} {props.parts[1].exercises}
      </p>
      <p>
        {props.parts[2].name} {props.parts[2].exercises}
      </p>

         {/* <p>
        {name1} {exercises1}
      </p>
      <p>
        {name2} {exercises2}
      </p>
      <p>
        {name3} {exercises3}
      </p>
       */}
       {/* <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p> */}
    </div>
  )
}

export default Contents
