// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var getRandomPass =  function() {
    if (generateBtn.onclick) {
        window.prompt("Please selected the following characters.");

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
