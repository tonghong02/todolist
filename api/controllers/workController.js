var Works = require("../models/work");

function getWorks(res){
    Works.find(function(err, works){
        if(err){
            res.status(500).json(err);
        }
        else{
            res.json(works);
        }
    });
}

module.exports = function(app){
    // get all works
    app.get("/api/works", function(req, res){
        getWorks(res);
    });

    // get work by Id
    app.get("/api/works/:id", function(req, res){
        Works.findById({_id: req.params.id}, function(err, work){
            if(err){
                throw err;
            }
            else{
                res.json(work);
            }
        });
    });

    //create new work
    app.post("/api/work", function(req, res){
        var work = {
            text: req.body.text,
            isDone: req.body.isDone
        };

        Works.create(work, function(err, work){
            if(err){
                throw err;
            }
            else{
                getWorks(res);
            }
        });
    });

    // update work
    app.put("/api/work", function(req, res){
        if(!req.body._id){
            return res.status(500).send("ID is required!");
        }
        else{
            Works.update({
                _id: req.body._id
            }, {
                text: req.body.text,
                isDone: req.body.isDone
            }, function(err, work){
                if(err){
                    return res.status(500).json(err);
                }
                else{
                    getWorks(res);
                }
            });
        }
    });

    //remove work by ID
    app.delete("/api/work/:id", function(req, res){
        Works.remove({
            _id: req.params.id
        }, function(err, work){
            if(err){
                return res.status(500).json(err);
            }
            else{
                getWorks(res);
            }
        });
    });
    





}