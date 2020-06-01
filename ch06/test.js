var set = new Set();
for (let a = 0; a < 1000; a++) {
    let a3 = ((a * a) % 9 * a) % 9;
    let threeA = (3 * a) % 9;
    for (let b = 0; b < 1000; b++) {
        let b3 = (((b * b) % 9) * b) % 9;
        let timesB = (threeA * b) % 9;
        for (let c = 0; c < 1000; c++) {
            // console.log(a, b, c);
            set.add(((a3 + b3 + ((c * c) % 9 * c) % 9 + (timesB * c) % 9) % 9));
        }
    }
}
console.log([...set].sort());