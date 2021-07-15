const express= require('express');
const path = require('path')
const app = express();
const port = process.env.PORT || 7000


if (process.env.NODE_ENV = "Production" || process.env.NODE_ENV === "staging"){
    app.use(express.static('public'));
    app.get('/', (req,res)=>{
        res.sendFile(path.resolve(__dirname + '/reuse/set.json'))
 })
}
 

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})