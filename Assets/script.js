// Assignment Code
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var lowerCaseArray = lowerCase.split("");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var upperCaseArray = upperCase.split("");

var specialChars = "!@#$%^&*?"
var specialCharsArray = specialChars.split("");

var selectNumbers = "1234567890"
var selectNumbersArray = selectNumbers.split("");

var generateBtn = document.getElementById("generate");


// Write password to the #password input

// start of window prompts
// prompt for length of password and criteria between 8 and 128 characters 
function options() {

  var length = window.prompt("how long do you want your password to be? you can pick between 8 and 128 characters");

  // need to validate user inputs
  //  if length is <8 or >128 
  if (((length <= 8)) || ((length >= 128))) {
    window.alert("try again");
  }
  // need variable to store user repsonse 

  // pr ompt ;password should have lowercase letters 
  var lowerCaseChosen = window.confirm("do you want lowercase letters?");

  // variable to store user response //


  // prompt ;password should have uppercase letters
  var upperCaseChosen = window.confirm("do you want uppercase letters?");

  // variable to store user response //

  // prompt ;password should have special characters //
  var specialCharsChosen = window.confirm("do you want special characters?");
  // varaible to store use
  // r response 

  // prompt ;password should have numeric values
  var numbersChosen = window.confirm("do you want numbers?");
  // varaible to store user response //
  //  validate that some correct user submission has been made to genereate password //
  var objectForOptions = {
    length: length, lowerCaseChosen: lowerCaseChosen, upperCaseChosen: upperCaseChosen, specialCharsChosen: specialCharsChosen, numbersChosen: numbersChosen,
  }
  console.log(length);

  // generatePassword();

  return objectForOptions

 
}
options();
// will be used for each choice of character that the user selects 
function randomIndex(array) {
  var random = Math.floor((Math.random() * array.length));
  var randomEl = array[random]
  return randomEl
}
randomIndex(specialCharsArray);
console.log(randomIndex(specialCharsArray));
// if(!length & !lowercaseletter & !uppercaseletter & !specialcharacters & !numericvalue)
// // alert about not generating password if not criteria is met

// restart alerts  
function generatePassword() {
  let optionsFunction = options()
  let resultsArray = []
  let possibleChars = []
  let sureChars = []
  if (objectForOptions.lowerCaseChosen) {
    possibleChars = possibleChars.concat(lowerCaseArray)
    sureChars.push(randomIndex(lowerCaseArray))
  }
  if (objectForOptions.upperCaseChosen) {
    possibleChars = possibleChars.concat(upperCaseArray)
    sureChars.push(randomIndex(upperCaseArray))
  }
  if (objectForOptions.specialCharsChosen) {
    possibleChars = possibleChars.concat(specialCharsArray)
    sureChars.push(randomIndex(specialCharsArray))
  }
  if (objectForOptions.numbersChosen) {
    possibleChars = possibleChars.concat(selectNumbersArray)
    sureChars.push(randomIndex(selectNumbersArray))
  }
  for(var i = 0; i < optionsFunction.length; i ++){
    var possibleChar = randomIndex(possibleChars)
    resultsArray.push(possibleChar)
  }
  for(var i = 0; i < sureChars.length; i ++){
    resultsArray[i] = sureChars[i]
  }
  console.log("hello")
  return resultsArray
}
// generatePassword()
var generateBtn = document.querySelector("#generate")
function writePassword(){


var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


