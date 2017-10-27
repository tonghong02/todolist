var Works = require("../models/work");

module.exports = function(app){
    app.get("/api/setupWorks", function(req, res){

        var dataWorks = [
            {
                text: "Hoc NodeJS",
                isDone: false
            },
            {
                text: "Hoc AngularJS",
                isDone: false
            },
            {
                text: "Hoc MongoDB",
                isDone: false
            },
            {
                text: "Hoc ExpressJS",
                isDone: false
            }
        ];

        Works.create(dataWorks, function(err, results){
            res.json(results);
        });
    });
}