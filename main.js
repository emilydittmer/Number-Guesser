/////global variables

var minRange = document.querySelector('#minrange');
var maxRange = document.querySelector('#maxrange');
var chal1 = document.querySelector('#chal1');
var chal2 = document.querySelector('#chal2');
var guess1 = document.querySelector('#guess1');
var guess2 = document.querySelector('#guess2');
var updateBtn = document.querySelector('#update-btn');
var guessBtn = document.querySelector('#guess-btn');
var clearBtn = document.querySelector('#clear-btn');
var resetBtn = document.querySelector('#reset-btn');
var randomNum

/////event listeners

updateBtn.addEventListener('click', function(e) {
  e.preventDefault();
  getRange();
});

guessBtn.addEventlistener('click', function() {
  displayLatest();
  compareGuess();
});

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
};


/////pseudocoding

// function displayLatest() {
//   chal1.innerText = document.queryselector #chal1-name
//   chal2.innerText assign to html id #chal2-name
//   guess1.innerText assign to html id #chal1-guess parse value
//   guess2.innerText assign to html id #chal1-guess parse value
//   parsed value guessOne if/else if/else
//   parsed value guessTwo if/else if/else
//   var guessOne = parseInt(guess1.value);
//   var guessTwo = parseInt(guess2.value);
// }


// function compareGuess() {
//   if (guess one is higher than) {
//     innertext[#chal1-status] 'is too high'
//     } else if (guess one is lower than) {
//       innertext[#] 'is too low'
//     } else 'you got it'
//   }
// }