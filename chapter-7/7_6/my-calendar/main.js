const mycalendarmodelany = require('./modules/mycalendarmodelany.js');
const mycalendarind = require('./modules/mycalendarind.js');

const calendarModel = mycalendarmodelany.createModel(2021, 11);
mycalendarind.buildCalendar(calendarModel);
