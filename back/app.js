const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const port = process.env.PORT || 4201;
const app = express();

const test_routes = require('./routes/test');

mongoose.connect('mongodb://127.0.0.1:27017/business', { useUnifiedTopology: true, useNewUrlParser: true }, (err, res) =>{
    if (err){
        console.log(err)
    }else {
        console.log("server running")
        app.listen(port, function(){
            console.log(`Running server on port ${port}`)
        })
    }
});

app.use(bodyparser.urlencoded({limit: '50mb', extended: true}))
app.use(bodyparser.json({limit: '50mb', extended: true}))

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use('/api', test_routes)

module.exports = app;