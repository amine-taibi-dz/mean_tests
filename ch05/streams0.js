var fs = require('fs');
//('data', 'close' is optional, 'end', 'error') events in  readable streams
//chunk ==> data
var opts = { encoding: 'utf8', autoClose: true, emitClose: true };
var rStream = fs.createReadStream("./huge.txt", opts);
rStream.on('close', () => { console.log("close event"); });
rStream.on('data', (chunk => { process.stdout.write("[[DATA]] " + chunk); }));
rStream.on('end', () => { console.log("end event"); });
rStream.on('error', (err) => { console.log(err.message) });

