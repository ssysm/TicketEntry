const mongoose = require('mongoose');
const db = mongoose.connect(require('../config').db);

var schema = mongoose.Schema({
    ticketNum:{
        type:String,
        required:true,
        index:{
            unique:true
        }
    },
    entry:{
        type:Date,
        default:Date.now()
    }
});
const TixLog = mongoose.model('log', schema);

module.exports = TixLog;