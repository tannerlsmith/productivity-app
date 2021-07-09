// vars for time
let seconds = 0;
let minutes = 0;
let hours = 0; 

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;

let status = 'stopped';

// When to increment values & how to display
function stopWatch() {
    seconds++;

    if(seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    // if seconds/mins/hours = 1 digit, add a leading 0 to value
    if(seconds < 10) {
        displaySeconds = '0' + seconds.toString();
    } else { 
        displaySeconds = seconds;
    }

    if(minutes < 10) {
        displayMinutes = '0' + minutes.toString();
    } else {
        displayMinutes = minutes;
    }

    if(hours < 10) {
        displayHours = '0' + hours.toString();
    } else {
        displayHours = hours;
    }

    // display updated time values to user.
    document.getElementById("time-display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

function startStop() {
    if(status === 'stopped') {
        // replace to 1k when done testing.
        interval = window.setInterval(stopWatch, 1);
        document.getElementById('startButton').innerHTML = 'startTime';
        status = 'started';
    }
}


function reset() {
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0; 
    hours = 0;
    document.getElementById('time-display').innerHTML = '00:00:00';
    document.getElementById('startStop').innerHTML = 'Start';
}


