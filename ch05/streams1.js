var fs = require('fs');
//('data', 'close' is optional, 'end', 'error') events in  readable streams
//chunk ==> data
var opts = { encoding: 'utf8', autoClose: true, emitClose: true };

var readStream = fs.createReadStream('foo.txt');
var writeStream = fs.createWriteStream('bar.txt');
readStream.pipe(writeStream);
