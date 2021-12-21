const mycalendarmodelclient = require('./modules/mycalendarmodelclient.js');
const mycalendarind = require('./modules/mycalendarind.js');

const calendarModel = mycalendarmodelclient.createModel(2021, 12);
mycalendarind.buildCalendar(calendarModel);
