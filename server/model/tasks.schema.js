const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TasksSchema = new Schema({
    categoryEntry: {type: String},
    tasksEntry: {type: String}
    // complete: {type: Boolean},
    // delete: {type: Boolean}
});

module.exports = mongoose.model('tasks', TasksSchema);