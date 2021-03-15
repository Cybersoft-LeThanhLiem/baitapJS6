/**
 * Bài 2:
 */

document.getElementById("btnBai2").onclick = function () {
    var x = Number(document.getElementById("x").value);
    var n = Number(document.getElementById("n").value);
    var i = 1;
    var sum = 0;

    while (i <= n) {
        sum += Math.pow(x, i);
        i++;
    }

    document.getElementById("kqBai2").innerHTML = new Intl.NumberFormat().format(sum);
    document.getElementById("kqBai2").classList.add('alert', 'alert-success');
}