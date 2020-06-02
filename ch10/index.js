var clrs = require('colors');
//console.log(("starting" + ".".repeat(40)).bgYellow.blue.bold);
var mysql = require('mysql');
var connexUrl = 'mysql://root:root@localhost:3306/mean';
var connectionOpts = {
    host: 'localhost', port: 3306,
    user: 'root', password: 'root', database: 'mean'
};
var connex = mysql.createConnection(connexUrl);
connex.connect(function (error) {
    if (error) {
        return console.error(error.message.red);
    }
    console.log('successfully connected!'.bgYellow.blue.bold);
    //connex.disconnect();
    process.exit(0);
});