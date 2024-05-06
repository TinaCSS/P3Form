const squares$$ = document.querySelectorAll('[data-function="square"]')
const timeLeft$$ = document.querySelector('[data-function="time-left"]')
let score$$ = document.querySelector('[data-function="score"]')

let result = 0
let hitPosition = null;

addSquaresListeners();

const randomSquareInterval = setInterval(randomSquare, 500);
const countDownInterval = setInterval(countDown, 1000);


function randomSquare () {
    for (const square$$ of squares$$) {
        square$$.classList.remove('b-mole')
    }
    const randomNumber = Math.floor(Math.random() * 9);
    let randomPosition = squares$$[randomNumber]
    randomPosition.classList.add('b-mole')

    hitPosition = randomNumber
}

function addSquaresListeners () {
    for (let i = 0; i < squares$$.length; i++) {
        let square$$ = squares$$[i];

        square$$.addEventListener('click', () => {
            if (i === hitPosition) {
                result = result + 1
                score$$.textContent = result
                hitPosition = null
            }
        })
    }
}

function countDown () {
    const localTime = timeLeft$$.textContent - 1;
    timeLeft$$.textContent = localTime;

    if (localTime === 0) {
        clearInterval(randomSquareInterval)
        clearInterval(countDownInterval)
        alert('Your final score is ' + result)
    }
}







const imgBack = "exercise-2/bg.jpg";
const imgMole = "exercise-2/mole.jpg";
const imgCover = imgBack;
const timer$$ = document.querySelector('[data-function="time-left"]');
score$$ = document.querySelector('[data-function="score"]');
squares$$ = document.querySelectorAll('[data-function="square"]');
let score = 0;

addSquaresListeners();

function timeLeft() {
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
      alert("Time's up!");
    }
  }, 1000);
  updateTimer();
}

timeLeft();

randomSquareInterval = setInterval(() => {
  const randomIndex = Math.floor(Math.random() * squares$$.length);
  const randomSquare = squares$$[randomIndex];

  randomSquare.setAttribute("src", imgMole);

  setTimeout(() => {
    randomSquare.setAttribute("src", imgBack);
  }, 500);
}, 500);

function addSquaresListeners() {
  for (let i = 0; i < squares$$.length; i++) {
    let square$$ = squares$$[i];

    square$$.addEventListener("click", () => {
      if (i === hitPosition) {
        result = result + 1;
        score$$.textContent = result;
        hitPosition = null;
      }
    });
  }
}
