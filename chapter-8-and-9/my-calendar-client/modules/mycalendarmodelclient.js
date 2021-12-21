const _ = require('../node_modules/underscore/underscore-umd.js');
const JSON2 = require('JSON2');

const mycalendarmodelclient = {};

mycalendarmodelclient.createModel = (year, month)=>{
    const contents = JSON2.stringify({
        year: year,
        month: month
    });

    let retVal = {};

    const host = 'localhost:8000';
    const path = '/'

    const conn = new Socket();
    const resultList = [];

    if ( conn.open ( host , 'UTF-8' ) ) {
        const br = '\r\n';
        conn.write("POST " + path + " HTTP/1.1" + br);
        conn.write("HOST: " + host + br);
        conn.write("Content-Type: application/json"+ br);
        conn.write("Content-Length: "+ contents.length + br);
        conn.write( br );

        conn.write(contents);

        while(!conn.eof){
            resultList.push(conn.readln());
        }
        conn.close();

        retVal = JSON2.parse(_.rest( resultList.join('\n').split('\n\n') ).join('\n\n'));
    }

    return retVal;
};

module.exports = mycalendarmodelclient;
