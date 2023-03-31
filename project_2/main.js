const sec = document.getElementById('sec_hand');
const minuteHand = document.getElementById('minute_hand');

const secInterval = setInterval(() => {
  const time = new Date();
  const seconds = time.getSeconds();
  // It takes 60 secs for the complete circulation round the circle 360deg.
  // It will therefor take 6 degrees per second gives a total of 360degrees in 60secons
  const degrees = seconds * 6;
  sec.style.transform = `rotate(${degrees}deg)`;
}, 1000);
