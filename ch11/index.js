var colors = require('colors');
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Route one
app.get('/teams/:teamName/employees/:employeeId',
    function (req, res, next) {
        console.log('teamName = ' + req.params.teamName.yellow);
        console.log('employeeId = ' + req.params.employeeId.yellow);
        res.send('path one'.big());
    });
// Route two
app.get('/teams/:teamName/employees', function (req, res, next) {
    console.log('setting content type');
    res.set('Content-Type', 'application/json');
    res.locals.data = 999;
    next();
}, function (req, res, next) {
    console.log('teamName = ' + req.params.teamName.blue);
    console.log((res.locals.data).toString().blue);
    res.send('path two');
});
// Route three
app.get(/^\/groups\/(\w+)\/(\d+)$/, function (req, res, next) {
    console.log('groupname = ' + req.params[0].red);
    console.log('groupId = ' + req.params[1].red);
    res.send('path three');
});
var server = app.listen(1337, function () {
    console.log('Server started on port 1337 ....'.rainbow.bold);
});