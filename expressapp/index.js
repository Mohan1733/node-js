const express=require('express');
const app=express();


// middleware
app.use((req,res,next)=>{
    res.status(200).send(`req received: ${req.method} ${req.url}`)
    next()
})

// routing
app.get("/",(req,res)=>{
    res.status(200).send("hello world node js")
})
app.post("/",(req,res)=>{
    res.status(200).send("hello express app: this is post method")
})

// route parameters
app.get("/user/:id",(req,res)=>{
    res.status(200).send(`user id is ${req.params.id}`);
})
app.post("/data",(req,res)=>{
    console.log(req.body)
    res.status(201).json({message:"data received"})
})

// rest api
app.get("/products",(req,res)=>{ res.send("all products")});
app.post("/products",(req,res)=>{ res.send("products added")});
app.put("/products/:id",(req,res)=>{ res.send(`updated: ${req.params.id}`)});
app.delete("/products/:id",(req,res)=>{ res.send(`deleted: ${req.params.id}`)});
app.use((req,res)=>{
    res.status(404).send("404 page found");
})


app.listen(5000,()=>{
    console.log("server listening http://localhost:5000")
})


