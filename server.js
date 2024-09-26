const express = require('express');
const app = express();
const router = require('./routes');

const port = process.env.PORT || 3000;

//app.use('/', require('./routes'));
app.use('/', router);

app.listen(port,()=> {console.log(`Running on port ${port}`)});
