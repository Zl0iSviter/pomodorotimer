const appscreen = document.getElementById("app-screen") ;
const timer = document.getElementById("timer") ;
const changerButton = document.getElementById("changer") ;
const startButton = document.getElementById("btn-start") ;

let timeleft = 1500;
let interval;

const startpause = () =>{
    if ( startButton.textContent === 'start'){
        startTimer();
        startButton.textContent = 'pause';
    } else {
        stopTimer();
        startButton.textContent ='start';
    }
};

const modeChanger = () =>{
    if ( changerButton.textContent === 'rest'){
        appscreen.classList.remove('work-mode');
        appscreen.classList.add('break-mode');
        timer.textContent = '05:00';

        timeleft = 300;

        changerButton.textContent = 'study';
    } else {
        appscreen.classList.remove('break-mode');
        appscreen.classList.add('work-mode');
        timer.textContent = '25:00';
        timeleft = 1500;

        changerButton.textContent = 'rest';
    }
};

const updateTimer = () => {
    const minutes = Math.floor(timeleft / 60);
    const seconds = timeleft % 60;

    timer.innerHTML = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
};

const startTimer = () => {
    interval = setInterval(() => {
        timeleft--;
        updateTimer();

        if(timeleft === 0){
            clearInterval(interval);
            modeChanger();
            updateTimer();
            startpause();
        }
    },
     1000)
};

const stopTimer = () => clearInterval(interval);

changerButton.addEventListener('click', modeChanger );

startButton.addEventListener('click',startpause);
