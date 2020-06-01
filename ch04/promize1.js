var coloors = require('colors');
var fs = require('fs');
var promise = new Promise(function (resolve, reject) {
    fs.readFile('README.txt', 'utf8', function (error, data) {
        if (error) {
            return reject(error);
        }
        resolve(data);
    });
});


promise
    .then(v => console.log(("" + v).green))
    .catch(err => console.log(("" + err.message).red));