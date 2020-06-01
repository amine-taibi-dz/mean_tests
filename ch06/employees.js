var employeeDb = require('./employees.json');//data from json file as js array!


exports.getEmployees = getEmployees;
exports.getEmployee = getEmployee;

function getEmployees(callback) {
  setTimeout(function () {
    callback(null, employeeDb);
  }, 1000);
}

function getEmployee(employeeId, callback) {
  getEmployees((error, data) => {
    if (error) {
      return callback(error);
    }
    var result = data.find(item => item.id === employeeId);
    callback(null, result);
  });
}
