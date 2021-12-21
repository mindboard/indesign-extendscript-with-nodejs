const console = require("./modules/console.js");
const JSON2 = require('JSON2');

const jsondata = '{"hello": "world", "list": [1, 2, 3, 4, 5]}';
const obj = JSON2.parse(jsondata);
console.log(obj);

const jsondata2 = JSON2.stringify(obj);
console.log(jsondata2);
