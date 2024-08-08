
// setTimeout(() => {}, 1000); // Déclencher un code après 1 seconde

const btnTimeOutStart = document.getElementById('btnTimeOutStart');
const btnTimeOutStop = document.getElementById('btnTimeOutStop');
const btnIntervalStart = document.getElementById('btnIntervalStart');
const btnIntervalStop = document.getElementById('btnIntervalStop');

let timerTimeout;
let timerInterval;

btnTimeOutStart.addEventListener('click', startTimeout);
btnTimeOutStop.addEventListener('click', stopTimeout);

btnIntervalStart.addEventListener('click', startInterval);
btnIntervalStop.addEventListener('click', stopInterval);


function startTimeout () {
    clearTimeout(timerTimeout);
    console.log("setTimeout : Début du timer");
    timerTimeout = setTimeout(() => { console.log("Hello world !"); }, 1000);
    console.log("Timer créé: ", timerTimeout);
}


function stopTimeout () {
    console.log("setTimeout : Arrêt du timer");
    clearTimeout(timerTimeout);
}

function startInterval () {
    clearInterval(timerInterval);
    console.log("setInterval : Début du timer");
    timerInterval = setInterval(() => { console.log("Hello world !"); }, 1000);
    console.log("Timer créé: ", timerInterval);
}


function stopInterval () {
    console.log("setInterval : Arrêt du timer");
    clearInterval(timerInterval);
}