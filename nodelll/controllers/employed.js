const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const getEmployedById = async(req,res) => {
    try {
        console.log(req.params.id);
        let user = await User.findById(req.params.id);
        res.status(200).json({user:user})
    } catch (err) {
      res.status(500).json({err:err})
        
    }
}
const getAllEmployed = async(req,res) => {
    try {
        let user = await User.find();
        res.status(200).json({user: user})
    } catch (err) {
        res.status(500).json({err : err})
    }
}


const setNewEmployed = async(req,res)=>{
    let employed = new User(req.body);
    console.log(employed);
    try {
        let token = jwt.sign({firstName:req.body.firstName,lastName:req.body.lastName,gmail:req.body.gmail,password:req.body.password},process.env.SECRET)
        employed.password = await bcrypt.hash(employed.password , 10)
        let myEployed = await employed.save();
        myEployed.password = req.body.password
        console.log(myEployed.password);
        res.status(200).json({employed:myEployed , token:token})
    } catch (err) {
        console.log(err);
        res.status(500).json({err : err})
    }
}

const updateEmployedById = async(req,res)=>{
    try {
        console.log(req.params.id);
        let employed = await User.findByIdAndUpdate(req.params.id , req.body)
        await employed.save();
        res.status(200).json("succes")
    } catch (err) {
        res.status(500).json({err : err})
    }
}

const checkPermission = (req ,res,next)=>{
    try {
        console.log(req.body.gmail)
        let token = jwt.sign({gmail:req.body.gmail,password:req.body.password},process.env.SECRET)
        jwt.verify(token, process.env.SECRET)
        res.status(200).json({token:token})
        next()
    } catch (err) {
        res.status(401).json({err : "err"})
    }
}
module.exports = { getEmployedById,getAllEmployed, setNewEmployed,updateEmployedById , checkPermission}