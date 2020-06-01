/* console.log('one event loop cycle');

setTimeout(function () {
    console.log('-- different cycle');
}, 100);
console.log('same cycle');

setInterval(function () {
    console.log('Task A');
}, 10);
setInterval(function () {
    console.log('Task B');
}, 15);
*/

setInterval(function () {
    console.log('Task A');
}, 10);

setInterval(function () {
    while (true); //!!! infinit loop !!!
    console.log('Task B*');
}, 15);