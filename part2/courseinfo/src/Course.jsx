import React from 'react'
function SingleCourse(props){
  const{id:id,name:name,parts:parts}=props.course;
  const sum=parts.reduce((acc,current)=>acc+current.exercises,0)
  return(
    <>
      <h2>{name}</h2>      
      
      {parts.map( 
       note=>  
  
         <p key={note.id}>{note.name}{note.exercises}</p>        
                          
        )}
        
        <p>total exercises {sum}</p> 

    </>
  )
}

function Course(props) {
console.log('props --->', props);   
console.log('props.course --->', props.courses);
  const [course1,course2]=props.courses;
console.log('course1 --->', course1);

//   const{id:id1,name:name1,parts:parts1}=course1;
// console.log('name --->', name1);
// const{id:id2,name:name2,parts:parts2}=course2;     
    
    //const {id,name,parts}=props.courses;
    //here when i put header instead of name on consoling the header it was returning undefined   

// console.log('id --->', id);
// console.log('header --->', {name});
  // const sum1=parts1.reduce((acc,current)=>acc+current.exercises,0)
  // const sum2=parts1.reduce((acc,current)=>acc+current.exercises,0)
    
  return (
    <div>
      <h1>Web Development Curriculum</h1>
      <SingleCourse course={course1}/>
      <SingleCourse course={course2}/>


      {/* the code before writing it on a seperate component */}
      {/* <h2>{name1}</h2>      
      
       {parts1.map( 
        note=>  
   
          <p key={note.id}>{note.name}{note.exercises}</p>        
                           
         )}
         
         <p>total exercises {sum1}</p> 

         
      <h2>{name2}</h2>      
      
       {parts2.map( 
        note=>  
   
          <p key={note.id}>{note.name}{note.exercises}</p>        
                           
         )}
         
         <p>total exercises {sum2}</p>  */}

      
      
    </div>
  )
}

export default Course
