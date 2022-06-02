//importing express library to create server
const express =require ("express") 

const app= express()

app.get("/user",  (req,res) =>{
      res.send("First Api CALL")
})

const port =5000;
app.listen(port,(req,res) =>{
     console.log(`starting aplication on port no : http ://localhost ${port}`)
})