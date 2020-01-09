const express = require('express');
const ejs = require('ejs'); 
const mealEventController = require('./controller/MealEventController'); 
const bodyParser = require('body-parser'); 
const app = express();

const port = process.env.PORT || 1111;

app.use(express.static('public'));
app.use(express.json()); 
app.use(express.urlencoded()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false})); 
app.use('/', mealEventController);

app.get('/', (req, res, next) => {
    res.send('this is home page');  
})

app.listen(port, () => {
    console.log(`listening on port ${port}`); 
})