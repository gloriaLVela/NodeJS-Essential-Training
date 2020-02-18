const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    console.log(`wating ${currentTime / 1000} seconds`);
}
console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => console.log("done");

setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);
