var mongoose = require('mongoose');
var db = mongoose.connection;
var dbUrl = 'mongodb://localhost:27017/humanresources';
//var dbUrl = 'mongodb+srv://taibi:Aharoni.Ziv@cluster0-novdt.mongodb.net/test?retryWrites=true&w=majority';
var Schema = mongoose.Schema;
var TeamSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

var EmployeeSchema = new Schema({
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        }
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    image: {
        type: String,
        default: 'images/user.png'
    },
    address: {
        lines: {
            type: [String]
        },
        postal: {
            type: String
        }
    }
});

var Employee = mongoose.model('Employee', EmployeeSchema);

var Team = mongoose.model('Team', TeamSchema);
db.on('error', function () {
    console.log('there was an error communicating with the database');
});
/*
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        return console.log('there was a problem connecting to the database!' + err);
    }
    console.log('connected!');


    var team = new Team({
        name: 'Product Development'
    });
    team.save(function (error, data) {
        if (error) {
            console.log(error);
        } else {
            console.dir(data.toJSON());
        }
        db.close();
        process.exit();
    });
});
*/

/*
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true },
    function () {
        console.log('connected!');
        Team.create([
            { name: 'Product Development02' },
            { name: 'Dev Ops02' },
            { name: 'Accounting02' }],
            function (error, ...objs) {
                if (error) {
                    console.log(error);
                } else {
                    objs.forEach(o => console.dir(o));
                    
                    console.log(pd);
                    console.log(devops);
                    console.log(acct);
                    
db.close();
process.exit();
                }
            });
    });
*/

function insertTeams(callback) {
    Team.create([{
        name: 'Product Development'
    }, {
        name: 'Dev Ops'
    }, {
        name: 'Accounting'
    }], function (error, arrs) {
        if (error) {
            return callback(error);
        } else {
            console.info('teams successfully added')
            callback(null, arrs);
        }
    });
}

function insertEmployees(arr, callback) {
    Employee.create([{
        name: {
            first: 'John',
            last: 'Adams'
        },
        team: arr[0]._id,
        address: {
            lines: ['2 Lincoln Memorial Cir NW'],
            postal: '20037'
        }
    }, {
        name: {
            first: 'Thomas',
            last: 'Jefferson'
        },
        team: arr[1]._id,
        address: {
            lines: ['1600 Pennsylvania Avenue', 'White House'],
            postal: '20500'
        }
    }, {
        name: {
            first: 'James',
            last: 'Madison'
        },
        team: arr[2]._id,
        address: {
            lines: ['2 15th St NW', 'PO Box 8675309'],
            postal: '20007'
        }
    }, {
        name: {
            first: 'James',
            last: 'Monroe'
        },
        team: arr[2]._id,
        address: {
            lines: ['1850 West Basin Dr SW', 'Suite 210'],
            postal: '20242'
        }
    }], function (error, data) {
        if (error) {
            return callback(error);
        } else {
            console.info('employees successfully added');
            console.log(`** arr[0] => ${arr[0]}`);
            console.log(`** data[0] => ${data[0]}`);

            console.log(`arr => ${arr}`);
            console.log(`data => ${data}`);
            callback(error, {
                team: arr[0],
                employee: data[0]
            });
        }
    })
}

function retrieveEmployee(data, callback) {
    Employee.findOne({
        _id: data.employee._id
    }).populate('team').exec(function (error, result) {
        if (error) {
            return callback(error);
        } else {
            console.log('*** Single Employee Result ***');
            console.dir(result);
            callback(null, data);
        }
    });
}

function retrieveEmployees(data, callback) {
    Employee.find({
        'name.first': /J/i
    }, function (error, results) {
        if (error) {
            return callback(error);
        } else {
            console.log('*** Multiple Employees Result ***')
            console.dir(results);
            callback(null, data);
        }
    });
}

function updateEmployee(first, last, data, callback) {
    console.log('*** Changing names ***');
    console.dir(data.employee);

    var employee = data.employee;
    employee.name.first = first;
    employee.name.last = last

    employee.save(function (error, result) {
        if (error) {
            return callback(error);
        } else {
            console.log('*** Changed name to Andrew Jackson ***');
            console.log(result);
            callback(null, data);
        }
    });
}

function deleteEmployee(result, callback) {
    console.log('*** delete  ***');
    console.dir(result);

    var employee = result.employee;
    employee.delete(function (error, result) {
        if (error) {
            return callback(error);
        } else {
            callback(null, result);
        }
    });
}

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        return console.log('there was a problem connecting to the database!' + err);
    }
    console.log('connected!');

    insertTeams(function (err, arr) {
        if (err) {
            return console.log(err)
        }
        insertEmployees(arr, function (err, result) {
            retrieveEmployee(result, function (err, result) {
                retrieveEmployees(result, function (err, result) {
                    updateEmployee('Andrew', 'Jackson', result, function (err, result) {
                        deleteEmployee(result, function (err, result) {
                            if (err) {
                                console.error(err);
                            } else {
                                console.info('database activity complete')
                            }
                            db.close();
                            process.exit();
                        });
                    });
                });
            });
        });
    });
});
