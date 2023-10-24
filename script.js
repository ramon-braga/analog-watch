let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let hour = formatTime(now.getHours());
    let minute = formatTime(now.getMinutes());
    let second = formatTime(now.getSeconds());

    digitalElement.innerHTML = `${hour}:${minute}:${second}`;

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;

}

function formatTime(time) {
    return time >= 10 ? time : '0' + time;
}

setInterval(updateClock, 1000);