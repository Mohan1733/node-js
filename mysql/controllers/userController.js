const db=require('../db');

// get all users
exports.getAllUsers=(req,res)=>{
    db.query("select * from users",(err,result)=>{
        if(err) return res.status(500).send(err);
        res.send(result);
    })
}











