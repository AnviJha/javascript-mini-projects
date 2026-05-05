// Game + User sequences
let gameseq = [];
let userseq = [];

let btns = ["red", "green", "blue", "yellow"];

let started = false;
let level = 0;
let score = 0;

let h3 = document.querySelector("h3");

// Start game
document.addEventListener("keypress", function () {
    if (!started) {
        started = true;
        level = 0;
        score = 0;
        gameseq = [];
        h3.innerText = "Game Started!";
        levelup();
    }
});

// Flash for GAME (white)
function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(() => {
        btn.classList.remove("gameflash");
    }, 300);
}

// Flash for USER (green)
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 300);
}

// LEVEL UP
function levelup() {
    userseq = [];
    level++;
    h3.innerText = `Level ${level} | Score: ${score}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameseq.push(randColor); // still store full sequence

    console.log("Game Sequence:", gameseq);

    // 🔥 only flash NEW color
    gameFlash(randBtn);
}

// Play full sequence
function playSequence() {
    let i = 0;

    let interval = setInterval(() => {
        let color = gameseq[i];
        let btn = document.querySelector(`.${color}`);

        gameFlash(btn);

        i++;
        if (i >= gameseq.length) {
            clearInterval(interval);
        }
    }, 600);
}

// User clicks
let allBtns = document.querySelectorAll(".btn");

for (let btn of allBtns) {
    btn.addEventListener("click", function () {
        let color = this.classList[1];

        userseq.push(color);

        userFlash(this);

        checkAnswer(userseq.length - 1);
    });
}

// Check answer
function checkAnswer(idx) {
    if (userseq[idx] === gameseq[idx]) {

        // full sequence correct
        if (userseq.length === gameseq.length) {
            score++; // increase score
            setTimeout(levelup, 1000);
        }

    } else {
        // ❌ GAME OVER
        h3.innerText = `Game Over! Final Score: ${score} | Press any key to restart`;

        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.background = "linear-gradient(135deg, #1f1c2c, #928dab)";
        }, 200);

        reset();
    }
}

// Reset game
function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
    score = 0;
}