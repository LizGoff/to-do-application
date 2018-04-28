const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/tasksList';
mongoose.connect(databaseUrl);

mongoose.connection.on('connection', () => {
    console.log(`mongoose connected to ${databaseUrl}`);
});
mongoose.connection.on('error', (error) => {
    console.log('mongoose connection error', error)
});