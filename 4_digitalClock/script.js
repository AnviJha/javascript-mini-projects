function updateClock() {
  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  // AM / PM
  let period = h >= 12 ? "PM" : "AM";

  // Convert 24 → 12 hour format
  h = h % 12;
  h = h === 0 ? 12 : h; // 0 → 12

  // Leading zero
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;
  document.getElementById("period").innerText = period;
}

setInterval(updateClock, 1000);
updateClock();