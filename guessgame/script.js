
// set max number
let max = 100;
document.getElementById("maxNum").innerText = max;

// generate random number
let num = Math.floor(Math.random() * max) + 1;

// get elements
let input = document.getElementById("guessInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let message = document.getElementById("message");

// submit button logic
submitBtn.addEventListener("click", function () {
    let guess = parseInt(input.value);

    if (isNaN(guess)) {
        message.innerText = "⚠️ Please enter a valid number";
        return;
    }

    if (guess === num) {
        message.innerText = "🎉 Correct! Number was " + num;
    } else if (guess > num) {
        message.innerText = "📈 Too high! Try again";
    } else {
        message.innerText = "📉 Too low! Try again";
    }

    input.value = "";
});

// reset game
resetBtn.addEventListener("click", function () {
    num = Math.floor(Math.random() * max) + 1;
    message.innerText = "Game restarted! Start guessing...";
    input.value = "";
});