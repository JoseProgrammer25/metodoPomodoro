let time = 25 * 60;
let timeBreak = 5 * 60;
let timerInterval;
let running = false;

function openAnalytics() {
    alert('Funcion no disponible');
}

function openSettings() {
    document.getElementById('settingsModal').style.display = 'block';
}

function closeSettings() {
    document.getElementById('settingsModal').style.display = 'none';
}

function updateTimerDisplay() {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    document.getElementById('timer').textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    if (!running) {
        running = true;
        timerInterval = setInterval(() => {
            if (time > 0) {
                time--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                running = false;
                time = timeBreak;
                document.getElementById('frase').textContent = 'Tiempo de descanso';
                updateTimerDisplay();
                startTimer();
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    running = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    time = 25 * 60; 
    running = false;
    updateTimerDisplay();
}