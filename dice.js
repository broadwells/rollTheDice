console.log("Hello, World! Let's Roll!");

var getRoll = function(die){
  var max = 6;
  if (die == 1) {
    console.log("Rolling first die!");
  } else {
    console.log("Rolling second die!");
  }
  result = Math.ceil(Math.random() * max);
  return result;
};

var strResult = "You got: ";
var dice1 = getRoll(1);
console.log(strResult + dice1);
var dice2 = getRoll(2);
console.log(strResult + dice2);
var total = dice1 + dice2;
console.log("Total roll: " + total);
if (dice1 == 1 && dice2 == 1) {
  console.log("Snake eyes!");
} else if ((dice1 + dice2) == 7 || (dice1 + dice2) == 11) {
  console.log("Craps!");
} else if ((dice1 + dice2) == 12) {
  console.log("Boxcars!");
} else if (dice1 == dice2) {
  console.log("Doubles!");
} else {
  console.log("You lose.");
}

console.log("Goodbye!");
