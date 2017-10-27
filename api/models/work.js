var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var workSchema = new Schema({
    text: String,
    isDone: {type: Boolean, default: false}
});

var works = mongoose.model("works", workSchema);

module.exports = works;