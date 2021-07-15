const express = require('express');
const router = express.Router();


router.get('/', (req,req)=>{
    res.render('index');
})

module.exports = router;