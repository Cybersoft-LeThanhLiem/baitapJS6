/**
 * Bài 1:
 */

var n = 1;
var sum = 0;

while (true) {
    if (sum > 10000) {
        break;
    } else {
        n++;
        sum += n;
    }
}

console.log(`Bài 1: n = ${n}`);