const mongoose= require('mongoose')
const usersSchema= new mongoose.Schema({
     name:{
        type:String,
        required:true
    },
    },
{timestamps:true})

export default mongoose.model('Users',usersSchema)
