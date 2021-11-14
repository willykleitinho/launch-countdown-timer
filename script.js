const targetDate = new Date('February 9, 2022');
console.log(targetDate.toString());

var daysLeft, hoursLeft, minutesLeft, secondsLeft;

window.onload = () => {

  daysLeft = document.getElementById('days-left');
  hoursLeft = document.getElementById('hours-left');
  minutesLeft = document.getElementById('minutes-left');
  secondsLeft = document.getElementById('seconds-left');
  
  setInterval(() => {
    let temp = targetDate - Date.now();

    // a day has 86.400.000 milliseconds
    daysLeft.innerText = String(Math.floor((temp / 86400000))).padStart(2, '0');
    temp %= 86400000;

    // an hour has 3.600.000 milliseconds
    hoursLeft.innerText = String(Math.floor((temp / 3600000))).padStart(2, '0');
    temp %= 3600000;

    // a minute has 60.000 milliseconds
    minutesLeft.innerText = String(Math.floor((temp / 60000))).padStart(2, '0');
    temp %= 60000;

    // a second has 1.000 milliseconds
    secondsLeft.innerText = String(Math.floor((temp / 1000))).padStart(2, '0');
  }, 999);
}