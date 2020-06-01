var m = require('./mmm');
console.log(" " + m.now + " " + m.add(100, 200));
console.log(m.multiply(4, 5));
console.log(m.factorial(4));
setTimeout(function () {
    m = require('./mmm');
    console.log('time after second require ' + m.now);
}, 5000);