const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://coursemgmttcs:5aLM9OOKxMaxwKyA@cluster0.mgtops3.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });


const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
    message: String,
    c_id:String,
    time:String   
});

var Notificationdata = mongoose.model('notificationdata',NotificationSchema);

module.exports = Notificationdata;