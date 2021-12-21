const _ = require('../node_modules/underscore/underscore-umd.js');
const mycalendarmodel = require('./mycalendarmodel.js');

const mycalendarmodeloct2021 = {};

mycalendarmodeloct2021.createModel = ()=>{
    const emptyItemCount = 5;
    const endDateOfMonth = 31;

    // 先頭の 5日分 は空文字列を入れた日にちリストを生成:
    const dateList0 = _.map(_.range(emptyItemCount), (_)=> '');
    const dateList1 = _.map(_.range(1,32), (date)=> String(date));
    const dateList = dateList0.concat(dateList1);

    const itemList = _.map(dateList, (date, index)=>{
        return {
            date: date,
            day: mycalendarmodel.dayList[index % 7]
        };
    });

    return {
        year: 2021,
        month: 10,
        itemList: itemList
    };
};

module.exports = mycalendarmodeloct2021;
