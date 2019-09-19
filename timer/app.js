let timer;
let timerElement = document.getElementById('timer_veuw');
let startBtn, stopBtn, resetBtn;
let sec, min, hour;
sec = 0;
min = 0;
hour = 0;

startBtn = document.getElementById('start');
stopBtn = document.getElementById('stop');
resetBtn = document.getElementById('reset');

startBtn.addEventListener('click', function() {
    timer = setInterval(TimerHandler, 1000);
    resetBtn.disabled = true;
});
stopBtn.addEventListener('click', function() {
    timer = clearInterval(timer);
    resetBtn.disabled = false;
});
resetBtn.addEventListener('click', function() {
    timer = clearInterval(timer);
    sec = 0;
    min = 0;
    hour = 0;
    timerElement.innerHTML = '00:00:00';
});

function TimerHandler() {
    sec++;

    if (sec == 60) {
        sec = 0;
        min++;
    }

    if (min == 60) {
        min = 0;
        hour++;
    }

    DisplayTime();


}

function DisplayTime() {
    let secZ, minZ, hourZ;
    secZ = sec;
    minZ = min;
    hourZ = hour;
    if (sec < 10) {
        secZ = '0' + sec;
    }
    if (min < 10) {
        minZ = '0' + min;
    }
    if (hour < 10) {
        hourZ = '0' + hour;
    }
    timerElement.innerHTML = hourZ + ':' + minZ + ':' + secZ;
}