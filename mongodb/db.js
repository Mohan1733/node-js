const db=require('mongoose');

db.connect('mongodb://localhost:27017/userdb')
.then(()=>{
    console.log("datatbase connected")
})
.catch((err)=>{
    console.log("failed",err)
})
