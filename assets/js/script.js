// vars for time
const timer = document.querySelector('#time');
const start_btn = document.querySelector('#start_btn');
const pause_btn = document.querySelector('#pause_btn');
const reset_btn = document.querySelector('#reset_btn');

let time= 0;
    setInterval;

function showTime() {
    time+= 1;
    timer.innerHTML = toHHMMSS(time)
}

function start() {
    interval = setInterval(showTime, 1000);
    hideBtn([start_btn]);
    showBtn([pause_btn, reset_btn])
}

function pause() {
    if (interval) {
        clearInterval(interval);
        interval = null;
    } else {
        interval = setInterval(showTime, 1000)
        pause_btn
    }
}

function reset() {
    clearInterval(interval);
    interval = null;
    pause_btn
    time = 0;
    timer.innerHTML = toHHMMSS(time);
}

function toHHMMSS(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - hours * 3600) / 60);
    let seconds = time - hours * 3600 - minutes * 60;
  
    hours = `${hours}`.padStart(2, '0');
    minutes = `${minutes}`.padStart(2, '0');
    seconds = `${seconds}`.padStart(2, '0');
  
    return hours + ':' + minutes + ':' + seconds;
}

function showBtn(btnArr) {
    btnArr.forEach((btn) => (btn.style.display = 'inline-block'));
}







