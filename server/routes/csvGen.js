var express = require('express');
var router = express.Router();
var json2csv = require('json2csv');
var Ticket = require('../model/ticket');
var fs = require('fs');
var path = require('path');
router.get('/',(req,res)=>{
    "use strict";
   var fields = ['SECTION','ROW','SEAT NUM','TICKET NUM','NAME'];
   var array = [];
   Ticket.find({},["position.section","position.row","position.sectionNum","ticketNum","name"]).sort({ticketNum:1}).exec((err,docs)=>{
      for(var i = 0;docs.length > i;i++){
          var min={
              SECTION:docs[i].position.section,
              ROW:docs[i].position.row,
              "SEAT NUM":docs[i].position.sectionNum,
              "TICKET NUM":docs[i].ticketNum,
              NAME:docs[i].name
          };
          array.push(min);
      }
      var csv = json2csv({ data: array, fields: fields ,withBOM: true});
       fs.writeFile(path.join(__dirname,"../public/seat.csv"), csv, { encoding: 'utf8' },function(err,data) {
           if (err) throw err;
           res.sendFile(path.join(__dirname,"../public/seat.csv"));
       });
   })
});

module.exports = router;