const timer = document.querySelector('.timer');
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const lapButton = document.querySelector('.lap-button');
const meditationAudio = document.querySelector('.meditation-audio');
const lapList = document.querySelector('.lap-list');
let intervalId;
let time = 0;
let lapTimes = [];

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  meditationAudio.play();
  intervalId = setInterval(() => {
    time++;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  }, 1000);
});

stopButton.addEventListener('click', () => {
  startButton.disabled = false;
  stopButton.disabled = true;
  meditationAudio.pause();
  clearInterval(intervalId);
});




lapButton.addEventListener('click', () => {
  lapTimes.push(time);
  displayLapTimes();
});

function displayLapTimes() {
  lapList.innerHTML = '';
  lapTimes.forEach((lapTime, index) => {
    const lapItem = document.createElement('li');
    lapItem.classList.add('lap-item');
    lapItem.textContent = `Lap ${index + 1}: ${lapTime}s`;

    lapList.appendChild(lapItem);
  });
}