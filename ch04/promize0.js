var coloors = require('colors');
var promise = new Promise(function (resolve, reject) {
    var success = false;
    if (success) {
        resolve('promise fulfilled');
    } else {
        reject(new Error('promise rejected'));
    }
});

promise
    .then(v => console.log(("" + v).green))
    .catch(err => console.log(("" + err.message).red));