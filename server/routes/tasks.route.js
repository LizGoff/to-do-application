const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Tasks = require('../model/tasks.schema');
const tasksDataBase = require('../modules/tasksDataBase');



router.get('/', (req, res) => {
    
    // ------- database read or find ------ //

    Tasks.find({}).sort('completed')
        .then((tasksDatabase) => {
            console.log('data from database', tasksDatabase);
            res.send(tasksDatabase);
        })
        .catch((error) => {
            console.log('error with router find', error);
            res.sendStatus(500);
        });

});

router.post('/', (req, res) => {

    // ------- database read or find ------ //
    // data from client become req.body
    const tasksToAdd = req.body;
    // console.log(tasksToAdd);
    Tasks.create(tasksToAdd)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error router post', error);
            res.sendStatus(500);
        });
});

router.delete('/', (req, res) => {
    Tasks.findByIdAndRemove(req.query._id)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error from delete', error);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    Tasks.findByIdAndUpdate(req.body._id, req.body)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error from put', error);
            res.sendStatus(500);
        });
});

module.exports = router;