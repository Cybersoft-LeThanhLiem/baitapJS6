/**
 * Bài 4:
 */

document.getElementById("btnBai4").onclick = function () {
    for (let i = 1; i <= 10; i++) {
        var div = document.createElement("div");
        div.style.cssText = "height: 50px; width: 100%; margin-bottom: 1rem;"
        if (i % 2 == 1) {
            div.style.backgroundColor = "deepskyblue";
        } else {
            div.style.backgroundColor = "red";
        }
        document.getElementById("bai4").appendChild(div);
    }
}