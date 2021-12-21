const _ = require('../node_modules/underscore/underscore-umd.js');
const mycalendarmodel = require('./mycalendarmodel.js');

const mycalendarmodelany = {};

mycalendarmodelany.getEndDateOfMonth = (year, month)=>{
    var date = new Date(year, (month-1), 1);
    return new Date(date.getYear(), date.getMonth()+1, 0);
};

mycalendarmodelany.createModel = (year, month)=>{
    const firstDayOfMonth = new Date(year,(month-1),1).getDay();
    const endDateOfMonth = mycalendarmodelany.getEndDateOfMonth(year,month).getDate();

    const emptyItemCount = firstDayOfMonth;

    // 先頭の n 日分は空文字列を入れた日にちリストを生成:
    const dateList0 = _.map(_.range(emptyItemCount), (_)=> '');
    const dateList1 = _.map(_.range(1,(endDateOfMonth+1)), (date)=> String(date));
    const dateList = dateList0.concat(dateList1);

    const itemList = _.map(dateList, (date, index)=>{
        return {
            date: date,
            day: mycalendarmodel.dayList[index % 7]
        };
    });

    return {
        year: year,
        month: month,
        itemList: itemList
    };
};

module.exports = mycalendarmodelany;
