var mongoose = require('mongoose');
//var dbUrl = 'mongodb://your_mongo_connection_url';
var dbUrl = 'mongodb://localhost:27017/hr_db';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
// Close the Mongoose connection on Control+C
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected');
        process.exit(0);
    });
});
require('../models/employee');
require('../models/team');