// const
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');

// sources
const tasksRouter = require('./routes/tasks.route');
const Tasks = require('./models/tasks.schema');
const tasksData = require('./modules/tasksDataBase');

// use
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/tasks', tasksRouter);


// listen
app.listen(PORT, () => {
    console.log('listening on port', PORT);
  });