var fs = require('fs');
try {
    var data = fs.readFileSync('README1.txt', 'utf8');
    console.log(data);
} catch (error) {
    //code: 'ENOENT'
    // ERROR NO ENTRY
    console.error(error);
}