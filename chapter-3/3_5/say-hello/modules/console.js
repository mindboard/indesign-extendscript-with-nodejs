var console = {};

console.log = function(message){
    $.writeln(message);
};

module.exports = console;
