const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TasksSchema = new Schema({
    categoryEntry: {type: String},
    tasksEntry: {type: String},
    question_delete: {type: Boolean}
});

module.exports = mongoose.model('tasks', TasksSchema);