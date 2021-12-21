const express = require('express');
const mycalendarmodelany = require('./modules/mycalendarmodelany.js');

const app = express();
app.use(express.json());

app.post('/', (req, res)=>{
    const jsonObj = req.body;
    console.log( JSON.stringify(jsonObj) );
    const calendarModel = mycalendarmodelany.createModel(jsonObj.year, jsonObj.month);
    res.status(200).json( calendarModel );
});

app.listen(8000);
console.log('my-calendar-server is running.');
