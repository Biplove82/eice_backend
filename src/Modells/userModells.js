const mongoose =require("mongoose");
const userSchema = new mongoose.Schema({
firstName:{
    type:String,
    trime:true,

},
lastName:{
    type:String,
    trime:true,
    },

    email:{
        type:String,
    },
    message:{
        type:String,
        
    }




},{timestamps:true});
module.exports = mongoose.model("usercollection", userSchema);