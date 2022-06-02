const mongoose= require('mongoose')

const connect=()=>{
    mongoose.connect("mongodb+srv://12345:12345@cluster0.dmgue.mongodb.net/Masai-Mini-project?retryWrites=true&w=majority")
}
module.exports= connect