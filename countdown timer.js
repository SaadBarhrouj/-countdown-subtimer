const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const restartButton = document.getElementById('Restart');
const stopButton = document.getElementById('Stop');
const resetButton = document.getElementById('Reset');

let totalSeconds = 31536000; // One year in seconds
let countdownInterval;

function updateCountdown() {
    if (totalSeconds > 0) {
        totalSeconds--;

        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        daysElement.textContent = formatTime(days);
        hoursElement.textContent = formatTime(hours);
        minutesElement.textContent = formatTime(minutes);
        secondsElement.textContent = formatTime(seconds);
    } else {
        clearInterval(countdownInterval);
    }
}

function startCountdown() {
    countdownInterval = setInterval(updateCountdown, 1000);
}

function stopCountdown() {
    clearInterval(countdownInterval);
}

function resetCountdown() {
    totalSeconds = 31536000; // Reset to one year in seconds
    updateCountdown(); 
}

function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}

restartButton.addEventListener('click', startCountdown); 
stopButton.addEventListener('click', stopCountdown);
resetButton.addEventListener('click', resetCountdown);
