const express=require("express");
const morgan=require("morgan");
const app=express();
const PORT=3001;

app.use(express.json());

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
 

const phonebook=[
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]
app.get("/",(req,res)=>{
    res.send(phonebook)
})

app.get("/info",(req,res)=>{
    const numOfPeople=(phonebook.length);
    const formattedTime = new Date().toLocaleTimeString();
    console.log('✌️numOfPeople --->', numOfPeople);
    res.send(`<h2>phonebook have data for  ${numOfPeople} people<h2/> <br/> <h3>the current time is ${formattedTime}<h3/>`)
    // res.send(`phonebook have data for ${numOfPeople} people  and the current time is ${formattedTime}`)
})

app.get("/api/persons",(req,res)=>{
   
  res.send(phonebook)

})

app.get("/api/persons/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const user=phonebook.find(one=>one.id===id)
    console.log('user --->', user);
    res.send(user)

})

app.delete("/api/persons/:id",(req,res)=>{
  const id=Number(req.params.id)
  // const id= req.params.id
console.log('✌️id --->', id);
 
console.log('✌️typeof(id) --->', typeof(id));
  const restUsers=phonebook.filter(user=>user.id!==id);
console.log('✌️restUsers --->', restUsers);
  // res.send(restUsers)
  response.status(204).end();

})

app.post("/api/persons",(req,res)=>{
  const user=req.body;
  console.log('✌️user --->', user);
  const id=Math.round(Math.random()*(100-10)+10);
  console.log('✌️id --->', id);
  user["id"]=id;
  const ifUserExists=phonebook.find(inUser=>inUser.name===user.name);
  if(!user.name ){
   return res.status(404).json({error:"name field can't be empty"})
  }
  else if(!user.number){
    return res.status(404).send({error:"number not recieved "})
  }
  else if(ifUserExists){
    return res.status(400).send({error:"this name is already in db so please use another name"})
  }
  const newUser={
    "id": user.id,
    "name": user.name, 
    "number": user.number
  }
  console.log(phonebook.concat(newUser))
  res.send(phonebook.concat(newUser))
   
  // res.send(user)
})


app.listen(PORT,()=>{
    console.log(`server is up and running on port ${PORT}`);
})