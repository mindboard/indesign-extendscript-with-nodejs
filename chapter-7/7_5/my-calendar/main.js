const mycalendarmodeloct2021 = require('./modules/mycalendarmodeloct2021.js');
const mycalendarind = require('./modules/mycalendarind.js');

const calendarModel = mycalendarmodeloct2021.createModel();
mycalendarind.buildCalendar(calendarModel);
