// character arrays
var numarray = ['1234567890']
var arrayspecial = ['!@#$%^&*()_+']
var Upperletter = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
var lowerletter = ['abcdefghijklmnopqrstuvwxyz']

// assignment code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// generate password function
function generatePassword() {
  var possiblepassword = '';
  var actualpassword = '';


  // requirements for password length
  var passwordlength = parseInt(prompt("A password is usually required to be between 8 and 12 characters. Enter how many characters you want yours to be.",8));
  // if password length does not fall in the parameters
  if (isNaN (passwordlength)) {   
    alert("Please enter a number between 8 and 12.");
    return "Please enter a valid number.";
  }
  // if password length is less than 8
  if (passwordlength < 8) {
    alert("Please enter a number between 8 and 12.");
    return "Please enter a valid number.";
  }
  // if password length is greater than 12
  if (passwordlength > 12) {
    alert("Please enter a number between 8 and 12.");
    return "Please enter a valid number.";
  }
  // confirmations for lower case letter  requirements
  var lowerlettercon = confirm("would you like lowercase letters in your password?");
  if (lowerlettercon) {
    possiblepassword += lowerletter;
  }
  // confirmations for Uppercase letter requirements
  var Upperlettercon = confirm("would you like uppercase letters in your password?");
  if (Upperlettercon) {
    possiblepassword += Upperletter;
  }
  // confirmations for number requirements
  var numarraycon = confirm("would you like numbers in your password?");
  if (numarraycon) {
    possiblepassword += numarray;
  }
  // confirmations for special character requirements
  var arrayspecialcon = confirm("would you like special characters in your password?"); 
  if (arrayspecialcon) {
    possiblepassword += arrayspecial;
  }
  // if no character type is selected
  for (var i = 0; i < passwordlength; i++) {
    var randomchar = Math.floor(Math.random() * possiblepassword.length);
    var randomletter = possiblepassword[randomchar];
    actualpassword += randomletter;
  } 
  return actualpassword;
}
