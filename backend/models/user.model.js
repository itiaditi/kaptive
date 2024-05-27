const mongoose = require("mongoose");

const user = mongoose.Schema({
    userId:Number,
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
	

},{
    versionKey:false
})

const userModel = mongoose.model('users',user);

module.exports={
    userModel
}