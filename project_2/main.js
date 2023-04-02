const sec = document.getElementById('sec_hand');
const minuteHand = document.getElementById('minute_hand');
const hourHand = document.getElementById('hour_hand');

const secInterval = setInterval(() => {
  const time = new Date();
  const seconds = time.getSeconds();
  // It takes 60 secs for the complete circulation round the circle 360deg.
  // It will therefor take 6 degrees per second gives a total of 360degrees in 60secons
  // Thus for every second, the seconds_arm of the clock will move secs*6degre angle
  const degrees = seconds * 6;
  sec.style.transform = `rotate(${degrees}deg)`;

  // The minutes-hand of the clock
  const minutes = time.getMinutes();
  const degreesMin = minutes * 6;
  minuteHand.style.transform = `rotate(${degreesMin}deg)`;

  //The Hour-hand of the clock.
  const hours = time.getHours() % 12;
  const degreesHour = hours * 30;
  hourHand.style.transform = `rotate(${degreesHour}deg`;
}, 1000);
