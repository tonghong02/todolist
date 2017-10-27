var app = angular.module('app.works', []);

app.factory("svWorks",function($http){
    // app.factory("svWorks", ["$http", function($http){

    return {
        get: function(){
            return $http.get("/api/works")
        },
        post: function(work){
            return $http.post("/api/work", work)
        },
        update: function(work){
            return $http.put("/api/work", work)
        },
        delete: function(id){
            return $http.delete("/api/work/" + id)
        }
    };
})