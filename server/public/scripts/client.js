
var app = angular.module('TaskApp', []);

app.controller('TaskController', ['$http', function($http) {
    console.log('TaskController Loaded');
    
    var self = this;
    self.tasksList = [];
    self.newTasks = {
        categoryEntry: '',
        priority: 'Low',
        tasksEntry: '',
        // due_date: new Date(),
        completed: false
    };

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
            console.log('error on /tasks Get', error);
        });
    };

    self.createTasksEntry = function() {
        $http({
            method: 'POST',
            url: '/tasks',
            data: self.newTasks
        }) 
        .then(function (response) {
            self.newTasks.categoryEntry = '';
            self.newTasks.tasksEntry = '';
            self.getTasksEntry();
            console.log(response);
        })
        .catch(function(error){
            console.log('error on /tasks Post', error);
        });
    };

    // (This is how Kris did the toggle in class)
    // self.toggleCompleteness + function(theTask) {
    //     theTask.complete = !theTask.complete
    //     (other stuff. Check lecture notes)
    // }

    self.deleteTasks = function(deleteTasks) {
        console.log(self.newTasks);
        // if(confirm('Are you sure?')) {
        //     // request to server to delete this task
        //     // try Modal in bootstrap for prettier alerts
        // }
        $http({
            method: "DELETE",
            url: "/tasks",
            params: deleteTasks
        })
        .then(function(response) {
            self.getTasksEntry();
            console.log('response from delete', response);
        })
        .catch(function(error) {
            console.log('error on /tasks DELETE', error);
        });
    }

    self.completeButton = function(completeUpdateSave) {
        console.log(self.newTasks);    
        // completeUpdateSave.completed = !completeUpdateSave.completed;
        $http({
            method: "PUT",
            url: "/tasks",
            data: completeUpdateSave
        })
        .then(function(response) {
            self.getTasksEntry();
            console.log('completed in database', response);
        })
        .catch(function(error) {
            console.log('error on /tasks PUT', error);
        });
    }

    self.getTasksEntry();

}]);

