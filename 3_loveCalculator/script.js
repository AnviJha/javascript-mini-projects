const btn = document.getElementById("btn");
const result = document.getElementById("result");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  const name1 = document.getElementById("name1").value;
  const name2 = document.getElementById("name2").value;

  if (name1 === "" || name2 === "") {
    result.innerText = "⚠️ Enter names!";
    message.innerText = "";
    return;
  }

  const score = trueLoveScore(name1, name2);
  result.innerText = score + "%";
  message.innerText = getMessage(score);
});

function trueLoveScore(name1, name2) {
  let str = (name1 + name2).toLowerCase();

  let trueCount = 0;
  let loveCount = 0;

  for (let char of str) {
    if ("abcdefghijklmno".includes(char)) trueCount++;
    if ("pqrstuvwxyz".includes(char)) loveCount++;
  }

  return parseInt("" + trueCount + loveCount);
}

function getMessage(score) {
  if (score > 80) return "Perfect Match 💖";
  if (score > 50) return "Good Connection 😊";
  if (score > 30) return "It can work 🙂";
  return "Better as friends 😅";
}