var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');
const username = "icn-ticket";
const passHash = bcrypt.hashSync('ICN-TICKET-p@ssw0rd');
router.post('/login',(req,res)=>{
    "use strict";
    var {uname,password} = req.body;
    if(uname !== username){
        res.json({
            success:false
        }).status(400)
    }else{
        if(bcrypt.compareSync(password,passHash)){
            res.json({
                success:false
            }).status(403)
        }else{
            const token = jwt.sign({
                loggedIn : true
            },"ASHJUDNBIUYHK@%^$T&*^RT@$TGDUYASJGD&*@T$G^&RT@&");
            res.cookie(
                'token',
                token,
                {
                    Domain:'.'+req.host,
                    maxAge: 900000,
                    httpOnly: true
                }).json({
                success:true
            }).status(200);
        }
    }
})

module.exports = router;
