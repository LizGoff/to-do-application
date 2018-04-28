
var app = angular.module('TaskApp', []);

app.controller('TaskController', ['$http', function($http) {
    console.log('TaskController Loaded');
    
    var self = this;
    self.tasksList = [];
    self.newTasks = {};

    // self.tasks = [
    //     {
    //         'categoryEntry': 'Office',
    //         'tasksEntry': 'Study more code'
    //     }
    // ];

    self.getTasksEntry = function() {
        $http({
            method: 'GET',
            url: '/tasks'
        }) 
        .then(function (response) {
            self.tasksList = response.data;
            console.log('get response', response.data);
        })
        .catch(function(error){
            console.log('error on /tasks get', error);
        });
    };

    self.createTasksEntry = function() {
        $http({
            method: 'POST',
            url: '/tasks',
            data: self.newTasks
        }) 
        .then(function (response) {
            self.getTasksEntry();
            console.log(response);
        })
        .catch(function(error){
            console.log('error on /tasks post', error);
        });
    };
    self.getTasksEntry();

}]);

