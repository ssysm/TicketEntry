var express = require('express');
var router = express.Router();
var Ticket = require('../model/ticket');
/* GET home page. */
router.get('/', function(req, res, next) {
  Ticket.find({},[],(err,docs)=>{
    "use strict";
    if(err){
      res.send(err)
    }else{
      res.send(docs)
    }
  })
});

router.post('/',(req,res,next)=>{
    "use strict";
    Ticket.create({
        position:{
            table:req.body.table,
            section:req.body.section,
            row:req.body.row,
            sectionNum:req.body.ticketNum
        },
        ticketNum:req.body.uniqueTixNum,
        name:req.body.name
    },(err,docs)=>{
        if(err){
            res.send(err).status(500)
        }else{
            res.json({
                success:true,
                response:docs
            })
        }
    })
});

router.post('/single',(req,res)=>{
    "use strict";
   Ticket.findOne({
       ticketNum:req.body.ticketNum
   },[],(err,docs)=>{
       if(err){
          res.send(err).status(500)
       }else{
           if(!docs){
               res.json({
                   found:false,
                   ticketNum:req.body.ticketNum
               })
           }else{
               res.json({
                   found:true,
                   response:docs
               })
           }
       }
   })
});

module.exports = router;
