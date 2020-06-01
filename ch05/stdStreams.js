var fs = require('fs');
//reading from std input
var userName =
    process.stdin.once('data', data => {
        userName = data;
        console.log("Who are you! " + userName + " ^_^!!");
        process.stdin.pause();
    });
process.stdout.write('What is your name? ');
process.stdin.resume();