var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
process.on('uncaughtException', function (error) {
    console.error(error.message);
    process.exit(-1);
});
emitter.emit('error', new Error('our error is bad and we feel bad'));