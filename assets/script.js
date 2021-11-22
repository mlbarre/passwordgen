// Assignment code here
var generatePassword =  function() {
    var specialChara = window.prompt("Please enter one of the following special characters: @ # $ !");

    if (specialChara === "@" || specialChara === "#" || specialChara === "$" || specialChara === "!") {
        window.alert("You've picked a special character!")
    } else {
        window.alert("You will have to pick one to continue.")
    }

    var passLength = window.prompt("Please choose how many characters: 8 - 128");
        if (passLength >= 8 && passLength <= 128) {
        passLength = 8 === 128;
        console.log(passLength); 
    } else (passLength < 8 || passLength > 128); {
        window.alert("Please choose a valid number between 8 and 128.");
    }
        var specialCase = window.prompt("Please choose one of the following: 'lowercase', 'uppercase', or 'numeric'.")
            if (specialCase === "lowercase") {
                window.prompt("You chosen lowercase. Correct?");
                specialCase = true;
            } else if (specialCase === "uppercase") {
                window.prompt("You've chosen uppercase. Correct?");
                specialCase = true;
            } else {
                window.prompt("You've chosen numeric. Correct?");
                specialCase = true;
            }
    
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);

generatePassword();