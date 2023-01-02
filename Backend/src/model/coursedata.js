const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://coursemgmttcs:5aLM9OOKxMaxwKyA@cluster0.mgtops3.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });


const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: String,
    duration:String,
    image:String,
    professor:String,
    email:String,
    details:String,
    qualification:String,
    type:String,
    startdate:String,
    level:String
    
});

var Coursedata = mongoose.model('coursedata',CourseSchema);

module.exports = Coursedata;