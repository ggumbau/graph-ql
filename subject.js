const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var subject = new Schema({
    name: String,
    datain: String,
    dataout: String,
});

module.exports = mongoose.model('Subject',subject);
