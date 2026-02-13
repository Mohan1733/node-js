const express=require('express');
const router=express.Router();


router.get('/',(req,res)=> res.send("user list"));
router.get('/:id',(req,res)=>res.send(`user ${req.params.id}`));

module.exports=router;



