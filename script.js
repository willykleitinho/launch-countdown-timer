window.onload = () => {
  const format = (value, factor) => String(Math.floor((value / factor))).padStart(2, '0');

  const targetDate = new Date('February 9, 2022');

  const daysLeft = document.getElementById('days-left');
  const hoursLeft = document.getElementById('hours-left');
  const minutesLeft = document.getElementById('minutes-left');
  const secondsLeft = document.getElementById('seconds-left');
  
  setInterval(() => {
    let milliseconds = targetDate - Date.now();

    // a day has 86.400.000 milliseconds
    daysLeft.innerText = format(milliseconds, 86400000);
    milliseconds %= 86400000;

    // an hour has 3.600.000 milliseconds
    hoursLeft.innerText = format(milliseconds, 3600000);
    milliseconds %= 3600000;

    // a minute has 60.000 milliseconds
    minutesLeft.innerText = format(milliseconds, 60000);
    milliseconds %= 60000;

    // a second has 1.000 milliseconds
    secondsLeft.innerText = format(milliseconds, 1000);
  }, 990);
}