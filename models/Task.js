const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    name:{
        type : String,
        required : [true,'must provide name'],
        trim : true,
        maxlength : [30, 'name cannot be greater than 30 characters']
    },
    completed:{
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model('Task', TaskSchema)