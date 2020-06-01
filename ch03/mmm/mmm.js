/** AUTO WRAPPING
 *
 *
 * (function (exports, require, module, __filename, __dirname) {

        // The code we write will be here

   });
**/
/*
console.log(__dirname);
console.log(__filename);
console.log(module);
console.log(require);
console.log(exports);
*/
function add(number1, number2) {
    return parseInt(number1, 10) + parseInt(number2, 10);
}
function multiply(number1, number2) {
    return parseInt(number1, 10) * parseInt(number2, 10);
}
function factorial(number) {
    if (number === 0) {
        return 1;
    }
    else {
        return number * factorial(number - 1);
    }
}

exports.add = add;
exports.multiply = multiply;
exports.factorial = factorial;
exports.now = Date.now();