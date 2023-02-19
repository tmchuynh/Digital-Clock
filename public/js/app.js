var x = document.querySelector(".time");
var hour = document.querySelector(".hour")
var minute = document.querySelector(".minutes")
var second = document.querySelector(".seconds")

function tick() {
    var y = new Date();
    hour.innerHTML = y.getHours();
    minute.innerHTML = y.getMinutes();
    second.innerHTML = y.getSeconds();
}
setInterval(tick, 1000);