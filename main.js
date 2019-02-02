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
var updateChal1
var updateChal2

/////default button states

// do we want an onload state or maybe call functions for auto disable? 
// an onload could also run number generator?
//I think onload, the game should run, so updateBtn-disabled, until fields are shown (if possible), clearBtn and resetBtn -disabled and guess- active
// updateBtn.disabled = true;
// guessBtn.disabled = true;
// clearBtn.disabled = true;
// resetBtn.disabled = true;


/////event listeners

updateBtn.addEventListener('click', function(e) {
  e.preventDefault();
  getRange();
});

// guessBtn.addEventListener('click', function getName() {
//   updateChal1 = document.querySelector(#chal1).value;
//   updateChal2 = document.querySelector(#chal2).value;
// })

// guessBtn.addEventlistener('click', function() {
//   displayLatest();
//   compareGuess();
// });

// // guessBtn.addEventListener('click' function getGameInfo() {
// //   var updateChal1 =  chal1.value;
// //   console.log(updateChal1)
// //   var updateChal2 = chal2.value;
// //   console.log(updateChal2)

// //   var guess1 = guess1.value; (Possibly needs to be a Global Value)
// //   var guess2 = guess2.value; (See above)
// // }

// // function getName() {
// //   var updateChal1 =  chal1.value;
// //   var updateChal2 = chal2.value;

// });


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


function isValidNum(event) {
  return event.charCode >= 48 && event.charCode <= 57
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


/////pseudo button states by action, maybe call onload?

// function updateBtnState() {
//   // maybe bang operator to indicate "no [value]"
//   if (nothing in range min or max) {
//     updateBtn.disabled = true;
//   } else {
//     updateBtn.disabled = false;
//   }
// }

// function guessBtnState() {
//   if (no value in chal name or guess inputs) {
//     submitBtn.disabled = true;
//   } else {
//     submitBtn.disabled = false;
//   }
// }

// function clearResetBtnState() {
//   if (no value in chal name or guess inputs)
//     submitBtn.disabled = true;
//   } else {
//     submitBtn.disabled = false;
//   }
// }

