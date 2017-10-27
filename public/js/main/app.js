var app = angular.module('app.works', ["xeditable"]);

app.controller("workController",function($scope, svWorks) {
    // app.controller("workController", ["$scope", "svWorks", function($scope, svWorks) {
    $scope.appName = "To do list";
    $scope.formData = {};

    $scope.works = [];
    // $scope.works = [
    //     {
    //         text: "to do 1",
    //         isDone: true
    //     },
    //     {
    //         text: "to do 2",
    //         isDone: false
    //     },
    //     {
    //         text: "to do 3",
    //         isDone: false
    //     },
    //     {
    //         text: "to do 4",
    //         isDone: true
    //     }
    // ]


    svWorks.get().success(function(data){
        $scope.works = data;
    });



    $scope.createWork = function(){
        var work ={
            text: $scope.formData.text,
            isDone: false
        };

        // $scope.works.push(work);
        // $scope.formData.text = "";

        svWorks.create(work).success(function(data){
            $scope.works = data;
            $scope.formData.text = "";
        })
    }

    $scope.updateWork = function(work){
        console.log("update work : " + work);

        svWorks.update(work).success(function(data){
            $scope.works = data;
        })
    }

    $scope.deleteWork = function(work){
        console.log("delete work : " + work);

        svWorks.delete(work._id).success(function(data){
            $scope.works = data;

        });

    }


});