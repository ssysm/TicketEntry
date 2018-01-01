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
    Ticket.create(req.body.tixArr,(err,docs)=>{
        if(err){
            res.status(500).json({
                err
            })
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
          res.status(500).json({
              success:false,
              err:err
          })
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

router.get('/filter/:table',(req,res)=>{
    "use strict";
    var { table } = req.params;
    if(table !== "table"){
        Ticket.find({
            "position.table":false
        }).sort({ticketNum:1}).exec((err,docs)=>{
            if(err){
                res.status(500).json({err})
            }else{
                res.json({
                    success:true,
                    response:docs
                })
            }
        })
    }else{
        Ticket.find({
            "position.table":true
        }).sort({ticketNum:1}).exec((err,docs)=>{
            if(err){
                res.status(500).json({err})
            }else{
                res.json({
                    success:true,
                    response:docs
                })
            }
        })
    }
});

router.delete('/delete/:tixNum',(req,res)=>{
    "use strict";
    Ticket.remove({
        ticketNum:req.params.tixNum
    },(err,docs)=>{
        if(err){
            res.status(500).json({err})
        }else{
            res.json({
                success:true,
                response:docs
            })
        }
    })
})

module.exports = router;
