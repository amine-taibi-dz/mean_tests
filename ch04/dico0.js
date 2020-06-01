var x = 9;
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var n = 10;
var a = 0;
var b = n - 1;
while (a <= b) {
    var k = Math.ceil((a + b) / 2);
    if (array[k] == x) {
        // x found at index k
        console.log(`found in index ${k}`);
    }
    if (array[k] > x) b = k - 1;
    else a = k + 1;
}