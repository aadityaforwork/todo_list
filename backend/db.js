const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aadityamalani15:RvSAdTDbypq5QOUr@cluster0.rdezbxs.mongodb.net/')

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo= mongoose.model('todo',todoSchema);

const completedSchema = new mongoose.Schema({
    id: String
})

const completed = mongoose.model('completed',completedSchema);

module.exports = {
    todo,
    completed
}

