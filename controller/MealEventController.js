const express = require('express'); 
const router = express.Router(); 
const path = require('path'); 

router.get('/', (req, res, next) => {
    res.sendfile(path.join('public/test.html'));  
});

router.post('/', (req, res, next) => {
    console.log(req.body); 
    res.send(req.body); 
})

module.exports = router; 