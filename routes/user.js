const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
process.env.TOKEN_SECRET;


router.post('/register', (req,res)=>{
    let errors = [];
  const {name, email, password} = req.body;
   if(!req.body.email === "testemail@gmail.com"){
       errors.push({msg: "Invalid mail"})
   }
   if(!req.body.password === 'amapiano'){
    errors.push({msg: "Wrong passcode"})
   }
   res.render('workspace', {
       name: req.body.name
   })
})

router.get('/login', (req,res)=>{
    res.render('login')
})

module.exports = router;