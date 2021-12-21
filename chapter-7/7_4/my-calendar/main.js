const mycalendarmodel = require('./modules/mycalendarmodel.js');
const mycalendarind = require('./modules/mycalendarind.js');

const calendarModel = mycalendarmodel.createModel();
mycalendarind.buildCalendar(calendarModel);
