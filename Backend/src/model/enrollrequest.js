const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://coursemgmttcs:5aLM9OOKxMaxwKyA@cluster0.mgtops3.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });


const Schema = mongoose.Schema;

const EnrollSchema = new Schema({
    c_name: String,
    c_professor:String,
    p_email:String,
    s_name:String,
    s_email:String,
    s_education:String,
    status:String,
    c_id:String
    

});

var Enrolldata = mongoose.model('enrolldata',EnrollSchema);

module.exports = Enrolldata;