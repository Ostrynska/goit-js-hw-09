import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/confetti.css';
import Notiflix, { Loading } from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  btn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.btn.addEventListener('click', onBtnClick);
refs.btn.setAttribute('disabled', true);

let startTime = 0;
let timerId = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  altInput: true,
  altFormat: 'F j, Y',
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future👎');
      return;
    }
    refs.btn.removeAttribute('disabled');
    startTime = selectedDates[0];
  },
};
const fp = flatpickr('#datetime-picker', options);

function onBtnClick(e) {
  e.preventDefault();

  timerId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = startTime - currentTime;

    updateTimeCounter(convertMs(deltaTime));

    if (deltaTime < 900) {
      Notiflix.Notify.info('Done! Timer is over 🏁');
      refs.btn.removeAttribute('disabled');
      clearInterval(timerId);
    }
  }, 1000);

  setTimeout(() => {
    refs.btn.setAttribute('disabled', true);
    Notiflix.Notify.success('Countdown timer has started🕑');
  }, 0);
}

function updateTimeCounter({ days, hours, minutes, seconds }) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}
