// Set target date (change this!)
const targetDate = new Date("2026-01-01T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now; // difference in ms

  if (diff <= 0) {
    document.querySelector(".countdown").innerText = "Time's up!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();