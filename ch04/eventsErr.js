var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
emitter.on("error", function (err) {
    console.log(err.message);
    console.log(err.name);

});
emitter.emit('error', new Error('our error is bad and we feel bad'));
