//const _ = require('underscore');
const _ = require('./node_modules/underscore/underscore-umd.js');
const console = require("./modules/console.js");

const names = ['Taro', 'Hanako'];

const greetings = _.map(names, (name)=> {
    return `Hello, ${name}!`;
});

console.log(greetings);
