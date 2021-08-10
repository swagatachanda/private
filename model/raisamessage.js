const mongoose=require('mongoose')
const message=mongoose.Schema({
    msg : {
        type : String,
        required : true,
        unique : true
    },
    number : {
        type : Number,
        required : true,
        unique : true
    }
})

module.exports=mongoose.model('message',message)