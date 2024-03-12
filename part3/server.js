require('dotenv').config();
const express=require("express");
const morgan=require("morgan");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose")
const userModel=require('./models/users')

const PORT=process.env.PORT ||7000;
console.log('✌️PORT --->', PORT);

app.use(express.json());
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/phonebook").then(()=>{
  console.log("connected to mongoDB")
})

//app.use(morgan('dev'));

morgan.token('post-data', (req) => {
  return JSON.stringify(req.body);
  // if (req.method === 'POST') {
  //   return JSON.stringify(req.body);
  // }
  // return '-';
});

app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :post-data')
);
 

// const phonebook=[
//     { 
//       "id": 1,
//       "name": "Arto Hellas", 
//       "number": "040-123456"
//     },
//     { 
//       "id": 2,
//       "name": "Ada Lovelace", 
//       "number": "39-44-5323523"
//     },
//     { 
//       "id": 3,
//       "name": "Dan Abramov", 
//       "number": "12-43-234345"
//     },
//     { 
//       "id": 4,
//       "name": "Mary Poppendieck", 
//       "number": "39-23-6423122"
//     }
// ]
app.get("/",async(req,res)=>{
  const users=await userModel.find();
console.log('✌️users --->', users);
    res.send(users)
})

//creating users in db
// if(process.argv.length>2){
// const createUser=async()=>{
//   const user=await userModel.create({
//     name:process.argv[2],
//     number:process.argv[3],
//   })
    
//     console.log(`added ${process.argv[2]} with number ${process.argv[3]} in the phonebook `)

//   }
//   createUser();
// }


//finding all the users that are in the database
// const findUser=async()=>{
//   const users=await userModel.find({})
//   console.log(users)
//   console.log("phonebook:")
//   users.map((user)=>{
//       console.log(user.name)
//     })
//   // console.log(`phonebook: `)
// }
// findUser();

app.get("/info",(req,res)=>{
    const numOfPeople=(phonebook.length);
    const formattedTime = new Date().toLocaleTimeString();
    console.log('✌️numOfPeople --->', numOfPeople);
    res.send(`<h2>phonebook have data for  ${numOfPeople} people<h2/> <br/> <h3>the current time is ${formattedTime}<h3/>`)
    // res.send(`phonebook have data for ${numOfPeople} people  and the current time is ${formattedTime}`)
})

// app.get("/api/persons",(req,res)=>{
   
//   res.send(phonebook)

// })

app.get("/api/persons/:id",async(req,res)=>{
    const id=req.params.id;
    const user=await userModel.findOne({_id:id})
    // const user=phonebook.find(one=>one.id===id)
    // console.log('user --->', user);
    res.send(user)

})

app.delete("/api/persons/:id",async (req,res)=>{
  const id=req.params.id;

  // const id= req.params.id
console.log('✌️id --->', id);

  const deleteUser=await userModel.findByIdAndDelete({_id:id})
  //const deleteUser=await userModel.deleteOne({_id:id });
  // res.send(restUsers)
  res.status(204).end();

})
// app.delete("/api/persons/:id",(req,res)=>{
//   const id=Number(req.params.id)
//   // const id= req.params.id
// console.log('✌️id --->', id);
 
// console.log('✌️typeof(id) --->', typeof(id));
//   const restUsers=phonebook.filter(user=>user.id!==id);
// console.log('✌️restUsers --->', restUsers);
//   // res.send(restUsers)
//   res.status(204).end();

// })

app.put("/api/persons",async(req,res)=>{
  const {id,newPerson}=req.body;
console.log('✌️req.body in the put method --->', req.body);
  
console.log('✌️newPerson --->', newPerson);
  //const inUser=await userModel.findOne(one=>user.id===one.id);
  const updatedUser=await userModel.findOneAndUpdate({_id:id},{number:newPerson.number},{ new: true })
 console.log('✌️updatedUser --->', updatedUser);
  
  res.send(updatedUser)
  

})

app.post("/api/persons",async(req,res)=>{
  const user=req.body;
  console.log('✌️user --->', user);
  try{
    const addUser=await userModel.create(user)
console.log('✌️addUser --->', addUser);
  res.send(addUser)
  }
  // catch(error){
  //   console.error('the error on creating user or wrong phonenumber',error);
  //   return res.status(400).json(error);
  // }
  catch (error) {
    console.error('the error on creating user or wrong phonenumber', error);
    if (error.name === 'ValidationError') {
      // Handling Mongoose validation errors
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ error: validationErrors });
    } else {
      // Handling other types of errors
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  // if(!user.name ){
  //  return res.status(404).json({error:"name field can't be empty"})
  // }
  // else if(!user.number){
  //   return res.status(404).send({error:"number not recieved "})
  // }

  
 
})

// app.post("/api/persons",(req,res)=>{
//   const user=req.body;
//   console.log('✌️user --->', user);
//   const id=Math.round(Math.random()*(100-10)+10);
//   console.log('✌️id --->', id);
//   user["id"]=id;
//   const ifUserExists=phonebook.find(inUser=>inUser.name===user.name);
//   if(!user.name ){
//    return res.status(404).json({error:"name field can't be empty"})
//   }
//   else if(!user.number){
//     return res.status(404).send({error:"number not recieved "})
//   }
//   else if(ifUserExists){
//     return res.status(400).send({error:"this name is already in db so please use another name"})
//   }
//   const newUser={
//     "id": user.id,
//     "name": user.name, 
//     "number": user.number
//   }
//   console.log(phonebook.concat(newUser))
//   res.send(phonebook.concat(newUser))
   
//   // res.send(user)
// })


app.listen(PORT,()=>{
    console.log(`server is up and running on port ${PORT}`);
})