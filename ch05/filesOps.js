var fs = require('fs');
fs.readFile(__filename, { encoding: 'utf8' },
    (err, data) => {
        if (err) {
            console.log(err.message);
            return;
        }
        console.log(data);
    });

// SYNC ...
//var fs = require('fs');
var data0;
try {
    data0 = fs.readFileSync(__filename + "0");
    console.log(data0);
} catch (error) {
    console.error("SYNC ***** :" + error.message);
}