const mongoose = require('mongoose')

const connectDB = (url)=>{
    return mongoose.connect(url).then(()=>{
    })
}

module.exports = connectDB