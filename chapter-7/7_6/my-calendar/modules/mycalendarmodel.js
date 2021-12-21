const _ = require('../node_modules/underscore/underscore-umd.js');

const mycalendarmodel = {};

mycalendarmodel.dayList = ['Sun.','Mon.','Tue.','Wed.','Thu.','Fri.','Sat.'];

mycalendarmodel.createModel = ()=>{
    const dateList = _.map(_.range(1,32), (date)=> String(date));
    const itemList = _.map(dateList, (date, index)=>{
        return {
            date: date,
            day: mycalendarmodel.dayList[index % 7]
        };
    });

    return {
        year: 0,
        month: 1,
        itemList: itemList
    };
};

module.exports = mycalendarmodel;
