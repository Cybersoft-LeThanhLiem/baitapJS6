/**
 * Bài 3:
 */

document.getElementById("btnBai3").onclick = function () {
    var n = document.getElementById("n_3").value;
    var f = 1;
    var i = 1;
    while (i <= n) {
        f *= i;
        i++;
    }

    document.getElementById("kqBai3").innerHTML = new Intl.NumberFormat().format(f);
}