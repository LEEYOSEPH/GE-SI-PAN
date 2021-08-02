const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const autoIncrement = require('mongoose-auto-increment');

const userSchema = new Schema(
    {
        number: {
            type: String,
            // required: true
        },
        id: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        name:{ 
            type: String, 
            required: true
        }
    },  
) 

// userSchema.plugin(autoIncrement.plugin, {
//     model: 'user',
//     field : 'number',
//     startAt : 1,
//     increment : 1
// })

module.exports = mongoose.model("user", userSchema)