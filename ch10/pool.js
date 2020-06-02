var clrs = require('colors');
var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'root',
    database: 'mean',
    connectionLimit: 20,
    queueLimit: 100,
    waitForConnections: true
});

pool.getConnection(function (error, connection) {
    if (error) {
        return console.error(error.message.bgYellow.red.bold);
    }
    //console.log('successfully obtained connection!'.bgYellow.blue.bold);
    var selectSql = 'SELECT * FROM presidents';
    connection.query(selectSql, function (error, results) {
        if (error) {
            connection.release();
            return console.error(error.message);
        }
        console.log('results of SELECT:');
        console.log(JSON.stringify(results, null, 2).rainbow.bold);
        process.exit(0);
    });

    //connection.release();

});