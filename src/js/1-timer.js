import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const datetimePicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('.start-btn');
const timerFields = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let userSelectedDate;
let timerId = null;

btnStart.disabled = true;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const dateNow = new Date();
    userSelectedDate = selectedDates[0];

    if (userSelectedDate <= dateNow) {
      iziToast.error({
        message: 'Please choose a date in the future',
        closeOnEscape: true,
        messageColor: '#FFFFFF',
        position: 'topRight',
        maxWidth: '300px',
        progressBar: false,
        close: false,
      });
      btnStart.disabled = true;
    } else {
      iziToast.destroy();
      btnStart.disabled = false;
    }
  },
};

flatpickr(datetimePicker, options);

btnStart.addEventListener('click', onBtnStartClick);

function onBtnStartClick() {
  btnStart.disabled = true;
  datetimePicker.disabled = true;

  timerId = setInterval(() => {
    const now = new Date();
    const timeDifference = userSelectedDate - now;

    if (timeDifference <= 0) {
      clearInterval(timerId);
      updateTimerDisplay(0, 0, 0, 0);
      datetimePicker.disabled = false;
      return;
    }
      const timeComponents = convertMs(timeDifference)
      updateTimerDisplay(timeComponents.days, timeComponents.hours, timeComponents.minutes, timeComponents.seconds)
    
  }, 1000)

}

function updateTimerDisplay( days, hours, minutes, seconds ) {
  timerFields.days.textContent = addLeadingZero(days);
  timerFields.hours.textContent = addLeadingZero(hours);
  timerFields.minutes.textContent = addLeadingZero(minutes);
  timerFields.seconds.textContent = addLeadingZero(seconds);
  }

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
  }

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


