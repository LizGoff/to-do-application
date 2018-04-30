const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TasksSchema = new Schema({
    categoryEntry: {type: String},
    tasksEntry: {type: String},
    // priority: {type: String},
    // due_date: {type: Date},
    completed: {type: Boolean} //default: false
});

module.exports = mongoose.model('tasks', TasksSchema);