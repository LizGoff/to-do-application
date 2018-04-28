
var app = angular.module('TaskApp', []);

app.controller('TaskController', ['$http', function($http) {
console.log('TaskController Loaded');
var self = this;

self.tasksList = [];

getTasksEntry()

self.newTasks = {};

self.tasks = [
    {
        'categoryEntry': 'Office',
        'tasksEntry': 'Study more code'
    }
];

function getTasksEntry() {
    $http({
        method: 'GET',
        url: '/tasks'
    }) 
    .then(function (response) {
        self.tasksList = response.data;
    })
    .catch(function(error){
        console.log('error on /tasks GET', error);
    });
};

function createTasksEntry() {
    $http({
        method: 'POST',
        url: '/tasks',
        data: self.newTasks
    }) 
    .then(function (response) {
    getTasksEntry()
    console.log(response);
    })
    .catch(function(error){
        console.log('error on /tasks POST', error);
    });
};

}]);

