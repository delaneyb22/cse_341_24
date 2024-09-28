// index.js
const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
  res.send('Hello from routes!');
});

router.use('/users', require('./users'));

module.exports = router;