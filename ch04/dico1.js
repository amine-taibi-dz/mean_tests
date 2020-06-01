var x = 10;
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var n = 11;

var k = 0;
for (var b = Math.ceil(n / 2); b >= 1; b = Math.floor(b / 2)) {
    console.log('loop ' + b);
    while (k + b < n && array[k + b] <= x) {
        k += b;
        console.log('jump ' + b);
    }
}
if (array[k] == x) {
    console.log(`${x} found in index [${k}]`);
}