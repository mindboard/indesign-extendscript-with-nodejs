const console = {};

console.log = (message)=>{
    $.writeln(message);
};

module.exports = console;
