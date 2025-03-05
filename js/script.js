let time = 25 * 60;
let timeBreak = 5 * 60;
let timer;

function startTimer() {
    clearInterval(timer); // Limpiar cualquier intervalo previo
    timer = setInterval(function() {
        if (time <= 0) {
            clearInterval(timer);
            cambiarAdescanso();
            time = timeBreak;
            startBreak();
        } else {
            time--;
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
            document.getElementById('timer').innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    time = 25 * 60;
    document.getElementById('timer').innerHTML = '25:00';
    document.getElementById('frase').innerHTML = 'Tiempo de trabajo';
}

function openSettings() {
    document.getElementById('settingsModal').style.display = 'block';
}

function closeSettings() {
    document.getElementById('settingsModal').style.display = 'none';
}

function saveSettings() {
    // Coger valores de los input
    let workTime = document.getElementById('workMinutes').value;
    let breakTime = document.getElementById('breakMinutes').value;

    // Validar los valores
    if (workTime < 1 || workTime > 60) {
        alert('El tiempo de trabajo debe estar entre 1 y 60 minutos');
        return;
    }
    if (breakTime < 1 || breakTime > 15) {
        alert('El tiempo de descanso debe estar entre 1 y 15 minutos');
        return;
    }

    // Aplicar el cambio y actualizar el temporizador
    time = workTime * 60;
    timeBreak = breakTime * 60;
    clearInterval(timer); // Limpiar cualquier intervalo previo
    closeSettings();
    actualizarTimer();
}

function actualizarTimer() {
    // Actualizar el temporizador con los valores introducidos en los settings
    let workTime = document.getElementById('workMinutes').value;
    let breakTime = document.getElementById('breakMinutes').value;
    document.getElementById('timer').innerHTML = `${workTime}:00`;
    document.getElementById('timerBreak').innerHTML = `${breakTime}:00`;
}

function openAnalytics() {
    alert("Función no disponible aún");
}

function startBreak() {
    clearInterval(timer); // Limpiar cualquier intervalo previo
    timer = setInterval(function() {
        if (timeBreak <= 0) {
            clearInterval(timer);
            timeBreak = 5 * 60;
            startTimer();
        } else {
            timeBreak--;
            let minutes = Math.floor(timeBreak / 60);
            let seconds = timeBreak % 60;
            document.getElementById('timerBreak').innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        }
    }, 1000);
}

function cambiarAdescanso() {
    clearInterval(timer);
    document.getElementById('timer').innerHTML = `${Math.floor(timeBreak / 60)}:00`;
    document.getElementById('frase').innerHTML = "¡Es hora de descansar! Inicia para descansar";
}