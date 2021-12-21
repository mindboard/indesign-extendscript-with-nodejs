const JSON2 = require('JSON2');
const console = require('./modules/console.js');
const mycalendarmodel = require('./modules/mycalendarmodel.js');

const calendarModel = mycalendarmodel.createModel();
console.log(JSON2.stringify(calendarModel));
