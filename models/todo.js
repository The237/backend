const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    name: {type: String, required: true, minLength:3, maxLength: 200},
    author: {type: String, minLength:3, maxLength: 30},
    uid: String,
    isComplete: Boolean,
    date: {type: Date, default: new Date()}
})

const Todo = mongoose.model("Todo", todoSchema)

exports.Todo = Todo