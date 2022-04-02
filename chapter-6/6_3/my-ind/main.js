const console = require('./modules/console.js');
const myind = require("./modules/myind.js");

const doc = myind.createDocument({
    pageWidth: '50mm',
    pageHeight: '50mm'
});
console.log(doc);

const page = doc.pages.item(0);
const contents = 'Hello, World!';

const textFrame = myind.createTextFrame(page, {
    left: '0mm',
    top: '0mm',
    right: '50mm',
    bottom: '50mm'
}, contents);
console.log(textFrame);
