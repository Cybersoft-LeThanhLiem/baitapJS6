/**
 * Bài 5:
 */

function prime(x) {
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}

document.getElementById("btnBai5").onclick = function () {
    var n = document.getElementById("n_5").value;
    var kq = "";

    if (n < 2) {
        kq = "Không tồn tại số nguyên tố từ 1 - n";
    } else {
        for (let i = 2; i <= n; i++) {
            if (prime(i)) {
                kq += i + ', ';
            }
        }
    }

    document.getElementById("kqBai5").innerHTML = kq.substring(0, kq.length - 2);
}