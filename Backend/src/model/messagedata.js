const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://coursemgmttcs:5aLM9OOKxMaxwKyA@cluster0.mgtops3.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });


const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    message: String,
    s_id:String,
    r_id:String,
    s_name:String,
    about:String   
});

var Messagedata = mongoose.model('messagedata',MessageSchema);

module.exports = Messagedata;