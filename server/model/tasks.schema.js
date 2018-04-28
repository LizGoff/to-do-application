const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tasksSchema = new Schema({
    categoryEntry: {type: String},
    taskEntry: {type: String},
    complete: {type: Boolean},
    delete: {type: Boolean}
});

module.exports = mongoose.model('tasks', tasksSchema);