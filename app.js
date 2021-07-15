const express= require('express');
const path = require('path');
const app = express();
const {config, engine} = require('express-edge');
const bodyParser = require('body-parser');
const port = process.env.PORT || 7000;
const index = require('./routes/index');
const mongoose = require('mongoose');

app.use(engine);
app.set('views', __dirname + '/views');


if (process.env.NODE_ENV = "Production" || process.env.NODE_ENV === "staging"){
    app.use(express.static('public'));
    app.use(index);
}
 

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})