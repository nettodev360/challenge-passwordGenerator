// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var characterLength = 8;
var choiceArray = [];
var specialCharacterArray = ["!", "$", "%", "&", "*", "?"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U","V", "W", "X", "Y", "Z"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// console.log(specialCharacterArray);
// console.log(lowercaseArray);
// console.log(uppercaseArray);
// console.log(numberArray);

function generatePassword(){

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
