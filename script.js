let fill = 90;
let intervalId = null;

const fishbowl = document.getElementById('fishbowl');
const fish = document.getElementById('fish');
const tap = document.getElementById('tap');

const emptyingFn = () => {
  intervalId = setInterval(() => {
    fill = fill - 1;
    fishbowl.style.setProperty('--filling', fill);

    if (fill < 8) {
      clearInterval(intervalId);
    } else if (fill < 28) {
      fish.classList.add('fishbowl__fish--dead');
    } else if (fill < 50) {
      fish.classList.add('fishbowl__fish--dying');
    } else {
      fish.classList.remove('fishbowl__fish--dying');
      fish.classList.remove('fishbowl__fish--dead');
    }
  }, 200);
};

intervalId = emptyingFn();

tap.addEventListener('click', () => {
  tap.classList.add('fishbowl__tap--active');

  setTimeout(() => {
    tap.classList.remove('fishbowl__tap--active');
  }, 500);

  if (fill < 6) {
    intervalId = emptyingFn();
    fish.classList.add('fishbowl__fish--floating');
  }

  fill = Math.min(fill + 26, 90);
});