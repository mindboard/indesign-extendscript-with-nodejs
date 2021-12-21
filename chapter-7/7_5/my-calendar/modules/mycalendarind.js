const _ = require('../node_modules/underscore/underscore-umd.js');
const myind = require('./myind.js');
const mycalendarmodel = require('./mycalendarmodel.js');

const mycalendarind = {};

mycalendarind.createTextFrameModelList = (calendarModel)=>{
    // ヘッダー(曜日)を準備:
    const dayList = mycalendarmodel.dayList;

    // スタイルの準備:
    const style = {
        columnWidth: 10,
        rowHeight:   10,
        headerHeight: 4
    };

    // テキストフレームモデルリストの生成(ヘッダー用):
    const headerTextFrameModelList = _.map(dayList, (day, index)=>{
        return {
            contents: day,
            left:   style.columnWidth * index,
            top:    0,
            right:  style.columnWidth * (index+1),
            bottom: style.headerHeight
        };
    });

    // テキストフレームモデルリストの生成(ボディ用):
    const bodyTextFrameModelList = _.map(calendarModel.itemList, (item, index)=>{
        const columnIndex = index % 7;
        const rowIndex = parseInt(index / 7);
        return {
            contents: item.date,
            left:   style.columnWidth * columnIndex,
            top:    style.headerHeight + style.rowHeight * rowIndex,
            right:  style.columnWidth * (columnIndex+1),
            bottom: style.headerHeight + style.rowHeight * (rowIndex+1)
        };
    });

    return headerTextFrameModelList.concat( bodyTextFrameModelList );
};

mycalendarind.buildCalendar = (calendarModel)=>{
    const textFrameModelList =  mycalendarind.createTextFrameModelList(calendarModel);

    // ページの大きさを計算:
    const pageWidth = _.max(_.map(textFrameModelList, (it)=> it.right));
    const pageHeight = _.max(_.map(textFrameModelList, (it)=> it.bottom));

    // ドキュメントを生成:
    const doc = myind.createDocument({
        pageWidth: `${pageWidth}mm`,
        pageHeight: `${pageHeight}mm`
    });

    // ページを取得:
    const page = doc.pages.item(0);

    // テキストフレームを生成:
    _.each(textFrameModelList, (textFrameModel)=>{
        myind.createTextFrame(page, {
            left:   `${textFrameModel.left}mm`,
            top:    `${textFrameModel.top}mm`,
            right:  `${textFrameModel.right}mm`,
            bottom: `${textFrameModel.bottom}mm`
        }, textFrameModel.contents);
    });
};

module.exports = mycalendarind;
