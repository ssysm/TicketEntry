const mongoose = require('mongoose');
const db = mongoose.connect(require('../config').db);

var schema = mongoose.Schema({
    position:{
        table:{
            type:String
        },
        section:{
            type:String
        },
        row:{
            type:String
        },
        sectionNum:{
            type:String
        }
    },
    ticketNum:{
        type:String,
        required:true,
        index:{
            unique:true
        }
    },
    name:{
        type:String,
        required:true
    }
});
const Ticket = mongoose.model('ticket', schema);

module.exports = Ticket;