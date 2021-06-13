 const mongoose = require('mongoose')
 const userSchema = mongoose.Schema({
    firstName: {
                type: String,
                default: "user"
            },
            lastName: {
                type: String,
                default: "user"
            },
            password: {
                type: String,
                minlength: 6
            },
            gmail: {
                type:String,minlength:5,require        
            },  
            employeds:[
                { type:mongoose.Schema.Types.ObjectId,ref:'Employed' }
            ]
 })
 module.exports=mongoose.model('user',userSchema);