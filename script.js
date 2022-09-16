// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts();
    var passwordText = document.querySelector("#password");

    if(correctPrompts) {
        var newPassword = generatePassword();
     
        passwordText.value = newPassword;
    }

}

var characterLength = 8;
var choiceArray = [];
// defined arrays with characters
var specialCharacterArray = ["!", "$", "%", "&", "*", "?"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U","V", "W", "X", "Y", "Z"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// console.log(specialCharacterArray);
// console.log(lowercaseArray);
// console.log(uppercaseArray);
// console.log(numberArray);

// generate password based on prompts

function generatePassword(){
    var password = [];
    for(var i = 0; i < characterLength; i++) {
        var randomnIndex = Math.floor(Math.random() * choiceArray.length);
        password = password + choiceArray[randomnIndex];
    }
    return password;
}

// function to promt asking for character length and check for character Length

function getPrompts(){

    choiceArray=[];

    characterLength = parseInt(prompt("How may characters in your password? (8 - 128"));
    if(isNaN(characterLength) || characterLength < 8 || characterLength >128 ){
        alert("Character length undefined! Choose between 8 - 128 digits. Please Try Again!");
        return false;
    }

    // prompts for checking character requirements

    if (confirm(" Would you prefer lowercase letters in your password?")){
        choiceArray = choiceArray.concat(lowercaseArray);
    }
    if (confirm(" Would you prefer uppercase letters in your password?")){
        choiceArray = choiceArray.concat(uppercaseArray);
    }
    if (confirm(" Would you prefer special characters in your password?")){
        choiceArray = choiceArray.concat(specialCharacterArray);
    }
    if (confirm(" Would you prefer numbers in your password?")){
        choiceArray = choiceArray.concat(numberArray);
    }
    return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
