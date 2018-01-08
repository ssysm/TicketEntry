var express = require('express');
var router = express.Router();
var Ticket = require('../model/ticket');
var jwt = require('jsonwebtoken');
var TixLog = require('../model/tixLog');
/* GET home page. */

function token_status(req, res, next) {
    if (req.cookies.token) {
        jwt.verify(req.cookies.token, 'ASHJUDNBIUYHK@%^$T&*^RT@$TGDUYASJGD&*@T$G^&RT@&', function (err, decoded) {
            if (err || decoded == undefined) {
                res.status(401).json({
                    message: "Invaild Token"
                })
            } else {
                next();
            }
        });
    } else {
        res.status(403).json({
            message: "no token"
        })
    }
}

router.get('/', token_status,function(req, res, next) {
  Ticket.find({},[],(err,docs)=>{
    "use strict";
    if(err){
      res.send(err)
    }else{
      res.send(docs)
    }
  })
});

router.post('/',token_status,(req,res,next)=>{
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
               TixLog.findOne({
                   ticketNum:docs.ticketNum
               },[],(err,entry)=>{
                   if(err){
                       res.json({
                           success:false,
                           err:err
                       }).status(500)
                   }else{
                       res.json({
                           found:true,
                           response:docs,
                           entry: entry
                       })
                   }
               })
           }
       }
   })
});

router.get('/filter/:table',token_status,(req,res)=>{
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

router.delete('/delete/:tixNum',token_status,(req,res)=>{
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
});

router.patch('/update',token_status,(req,res)=>{
    "use strict";
    Ticket.update({
        ticketNum:req.body.tixNum
    },{
        name:req.body.newName
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
});

router.post('/entry',(req,res)=>{
    "use strict";
    var { tixNum } = req.body;
    TixLog.create({
        ticketNum:tixNum
    },(err,docs)=>{
        if(err){
            console.log(err);
            res.json({
                success:false
            }).status(500)
        }else{
            res.json({
                success:true,
                date:docs.entry,
            }).status(200)
        }
    })
});

module.exports = router;
