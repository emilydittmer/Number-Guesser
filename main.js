/////global variables

var minRange = document.querySelector('#minrange');
var maxRange = document.querySelector('#maxrange');
var chal1 = document.querySelector('#chal1');
var chal2 = document.querySelector('#chal2');
var updateBtn = document.querySelector('#update-btn');
var guessBtn = document.querySelector('#guess-btn');
var clearBtn = document.querySelector('#clear-btn');
var resetBtn = document.querySelector('#reset-btn');
var randomNum;
var updateChal1;
var updateChal2;
var winnerName;


/////default button states

window.onload = function(){
  generateNum();
}

function generateNum() {
  var min = 1;
  var max = 100;
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNum);
}


/////event listeners

updateBtn.addEventListener('click', function(e) {
  e.preventDefault();
  getRange();
  clearRangeInputs();
});

guessBtn.addEventListener('click', function(e) {
  e.preventDefault();
  updateGuesses();
  displayNames();
  displayGuesses();
  displayStatus();
  clearGuessInputs();
});

clearBtn.addEventListener('click', function() {
  clearGuessInputs()
});

resetBtn.addEventListener('click', function() {
  clearRangeInputs();
  clearGuessInputs();
  getRange();
})


/////functions

function getRange() {
  var min = parseInt(minRange.value) || 1;
  var max = parseInt(maxRange.value) || 100;
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNum);
  var updateMin = document.querySelector('.update-min');
  var updateMax = document.querySelector('.update-max');
  updateMin.innerText = min;
  updateMax.innerText = max;
  clearRangeInputs();
};

function clearRangeInputs() {
  minRange.value = null;
  maxRange.value = null;
  updateBtn.disabled = true;
} 

function updateGuesses() {
  guess1 = document.querySelector('#guess1').value;
  guess2 = document.querySelector('#guess2').value; 
}

function clearGuessInputs() {
 chal1.value = null;
 chal2.value = null;
 guess1 = document.querySelector('#guess1').value = null;
 guess2 = document.querySelector('#guess2').value = null;
 clearBtn.disabled = true;
 resetBtn.disabled = true;
}

function displayNames() {
  var scoreName1 = document.querySelector('#score-name-1');
  var scoreName2 = document.querySelector('#score-name-2');
  var updateChal1 = chal1.value;
  var updateChal2 = chal2.value;
  scoreName1.innerText = updateChal1;
  scoreName2.innerText = updateChal2;
}

function displayGuesses() {
  var scoreGuess1 = document.querySelector('#score-guess-1');
  var scoreGuess2 = document.querySelector('#score-guess-2'); 
  scoreGuess1.innerText = guess1;
  scoreGuess2.innerText = guess2;
}

function displayStatus() {
  var status1 = document.querySelector('#score-guess-1-status');
  var status2 = document.querySelector('#score-guess-2-status');
  var winnerName;

  if (guess1 > randomNum) {
    status1.innerText = 'Too High';
  } else if (guess1 < randomNum) {
    status1.innerText = 'Too Low';
  } else if (parseInt(guess1) === randomNum) {
    status1.innerText = 'BOOM!';
    winnerName = chal1.value;
      createCard(winnerName);
  }

  if (guess2 > randomNum) {
    status2.innerText = 'Too High';
  } else if (guess2 < randomNum) {
    status2.innerText = 'Too Low';
  } else if (parseInt(guess2) === randomNum) {
    status2.innerText = 'BOOM!';
    winnerName = chal2.value;
      createCard(winnerName);
  }
}

function createCard(winnerName) {
  var name1 = chal1.value;
  var name2 = chal2.value;
  var winnerCard = winnerName;
  var scoreboard = document.querySelector('.scoreboard');
  var newCard =
  `<article class="scorecard">
      <section class="card">
        <h4 class="updateChal1-card-names">${name1}
        vs ${name2}</h4>
      </section>
      <hr>
      <section class=“scoreboard-winner”>
        <h2 id="winner-name">${winnerCard}</h2>
        <h3 class="display-winner">WINNER</h2>
      </section>
      <hr>
      <section class="guesses-time">
        <p>2 guesses</p>
        <p>:49 seconds</p>
        <button class="close-btn" name="close">X</button>
      </section>
    </article>`
  scoreboard.innerHTML += newCard;
}
