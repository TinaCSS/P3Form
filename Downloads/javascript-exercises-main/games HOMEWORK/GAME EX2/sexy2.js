const imgBack = "exercise-2/bg.jpg";
const imgMole = "exercise-2/mole.jpg";
const imgCover = imgBack;
const timer$$ = document.querySelector('[data-function="time-left"]');
const score$$ = document.querySelector('[data-function="score"]');
const squares$$ = document.querySelectorAll('[data-function="square"]');

let score = 0;
let randomNumber = 0;
let hitPosition = null;

function timer() {
  const initialTime = 30000;
  let timeRemaining = initialTime;
  function updateTimer() {
    timer$$.textContent = timeRemaining / 1000;
  }
  
  const countdown = setInterval(() => {
    timeRemaining -= 1000;
    updateTimer();
    if (timeRemaining <= 0) {
      clearInterval(countdown);
      alert("Time's up! Your score: " + score);
    }
  }, 1000);
  updateTimer();
  function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 12);
    randomSquare(randomNumber);
    console.log(randomNumber);
  }
  generateRandomNumber();
}

timer();

/* function assignSquare() {
  squares$$ = document.querySelectorAll('[data-function="square"]');
  for (i = 0; i < squares$$.length; i++) {
    square.classList.add([i]);
  }
}

assignSquare(); */

//.toggle

function randomSquare(randomNumber) {
    for (let i = 0; i < squares$$.length; i++) {
        square.classList.add([i]);
      
    if (index === randomNumber) {
      square.classList.add("b-mole");
      square.addEventListener("click", () => {
        score = score + 1;
        score$$.textContent = score;
      });
    } else {
      square.setAttribute("class", "b-mole");
      square.removeEventListener("click", () => {});
    }
  };
}

generateRandomNumber();
setInterval(generateRandomNumber, 500);
randomSquare();
