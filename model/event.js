const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    title : {type : String , required : true , minLength : 1 , maxLength : 25},
    description : {type : String, required : true , minLength : 1, maxLength : 255},
    date : {type :Date, required : true},
    address : {type : String , required : true, minLength : 5 , maxLength : 30},
    image : {type : String}
});

const event = mongoose.model("Event",eventSchema);
module.exports = event;