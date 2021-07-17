const express = require('express');
const path = require('path');
const app = express();
const { config, engine } = require('express-edge');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const index = require('./routes/index');
const mongoose = require('mongoose');
const user = require('./routes/user.js')
app.use(engine);
app.set('views', __dirname + '/views');



app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect("mongobd://localhost:27017/userDB", { useNewUrlParser: true })


const userSchema = {
    passcode: Number,
    email: String,
    password: String
};

const User = new mongoose.model("User", userSchema)

if (process.env.NODE_ENV = "Production" || process.env.NODE_ENV === "staging") {
    app.use(express.static('public'));
    app.use(index);
    app.use('/user', user)
}

app.get("/index", (req, res) => {
    res.render("index")
})

app.get("/register", function(req, res) {
    res.render("register")
});


app.post("/register", (req, res) => {
    const newUser = new User({
        passcode: req.body.passcode,
        email: req.body.email,
        password: req.body.password
    });


    newUser.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            res.render("app") //this app route IDK what is sef lmao I'm just here rendering it tp try and see it
        }
    })

});














app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})