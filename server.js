const express = require('express');
const app = express();
const router = require('./routes');
const mongodb= require('./data/database');

const port = process.env.PORT || 3000;

//app.use('/', require('./routes'));
app.use('/', router);


mongodb.initDb((err) =>{
    if (err){
        console.log(err);
    }
    else{
        app.listen(port,()=> {console.log(`Database is listening and node Running on port ${port}`)});
    }
});


