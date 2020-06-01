var fs = require('fs');
try {
    fs.readFile('README!.txt', 'utf8', function (error, data) {
        if (error) {
            throw error;
            return;
        }
        console.log(data);
    });
} catch (error) {
    console.error('Caught the error synchronously');
}