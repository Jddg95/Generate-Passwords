// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var digits = "0123456789";
  var special = "!@#$%^&*():;',.<>?_+[]{}|";


  var password = "";
  var lenghtOfPassword = parseInt(prompt("Enter the desired length of the password (between 8 and 128):"));

  if (!(lenghtOfPassword >= 8 && lenghtOfPassword <= 128)) {
    alert("Invalid password lenght. Please enter a number between 8 and 128.");
  }

  var includeLower = confirm("Include lowercase letters?");
  var includeUpper = confirm("Include uppercase letters?");
  var includeDigits = confirm("Include digits?");
  var includeSpecial = confirm("Include special characters?");

  if (!includeLower && !includeUpper && !includeDigits && !includeSpecial) {
  alert("Please select at least one character type.");
  }

  var charSet = "";

  if (includeLower) {
  charSet += lowercaseLetters;
  }

  if (includeUpper) {
  charSet += uppercaseLetters
  }

  if (includeDigits) {
  charSet += digits
  }

  if (includeSpecial) {
  charSet += special
  }

  for (var i = 0; i < lenghtOfPassword; i++) {
  var randomIndex = Math.floor(Math.random() * charSet.length);
  password += charSet[randomIndex];
  }

  return password;
}