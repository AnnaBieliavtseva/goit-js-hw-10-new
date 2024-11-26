import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const datetimePicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('.start-btn');



// console.log(date);
let userSelectedDate;

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
      btnStart.classList.add('disable');
      
    } else {
      iziToast.destroy();

      btnStart.classList.remove('disable');

        console.log(userSelectedDate);
       
        
        // return this.userSelectedDate;
        }
       
        
        
  },
};

flatpickr(datetimePicker, options);
console.log(userSelectedDate)
 const differenceDate = userSelectedDate - dateNow;
 console.log(differenceDate);
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

console.log(convertMs(differenceDate))