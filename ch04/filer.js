var fs = require('fs');
fs.readFile('README.txt', 'utf-8', function (error, data) {
    if (error) {
        return console.error(error);
    }
    console.log(data);
    // process.stdout.write(data, 'utf-8');

});

/*var t = process.stdin.read(5);
console.log(t);
*/
