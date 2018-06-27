// const
const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');

// sources
const tasksRouter = require('./routes/tasks.route');
const Tasks = require('./model/tasks.schema');

// use
app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use('/tasks', tasksRouter);


// listen
app.listen(PORT, () => {
    console.log('listening on port', PORT);
  });