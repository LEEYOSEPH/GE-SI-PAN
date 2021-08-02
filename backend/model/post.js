const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')

const postSchema = new Schema(
    {
        number: {
            type: Number,
            index: true
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        createDt:{ 
            type: String, 
            default: moment().format('YYYY-MM-DD hh:mm:ss')
        },
        updateDt:{
            type: String, 
        },
        delete: {
            type: String,
            default: 'N'
        },
        userNo: {
            type: String,
            required: true
        },
        boardCnt: {
            type: Number,
            default: -2
        },
    },  
) 

module.exports = mongoose.model("post", postSchema)