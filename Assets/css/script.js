// character arrays
var numarray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var arrayspecial = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/']
var Upperletter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X', 'Y', 'Z']
var lowerletter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x', 'y', 'z']
// assignment code
var generateBtn = document.querySelector("#generate");
// write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var possiblepassword = '';
  var actualpassword = '';
  // requirements for password length
  var passwordlength = parseInt(prompt("A password is usually required to be between 8 and 14 characters. Enter how many characters you want yours to be."),12);
  //
  if (isNaN (passwordlength)) {   
    alert("Please enter a number between 8 and 14 .");
    return "Please enter a valid number.";
  }
  if (passwordlength < 8) {
    alert("Please enter a number between 8 and 14 .");
    return "Please enter a valid number.";
  }
  if (passwordlength > 12) {
    alert("Please enter a number between 8 and 14 .");
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
generateBtn.addEventListener("click", writePassword);