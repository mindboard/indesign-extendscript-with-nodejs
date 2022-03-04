const _ = require('underscore');

const names = ['Taro', 'Hanako'];

const greetings = _.map(names, (name)=> {
    return `Hello, ${name}!`;
});

console.log(greetings);
