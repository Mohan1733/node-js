const express=require('express')
const app=express();


const userRoutes=require('./routes')
app.use('/users',userRoutes)



app.listen(5000,()=>{
  console.log("server listening http://localhost:5000")
})






