var number = prompt("Enter your phone number only using dashes \nit should look something like 123-456-7890. I super serious promise this won't be used for SPAM! Serious.");
if (number.charAt(3) && number.charAt(7) === "-" && number.length === 12) {
  alert("Your number is valid");
} else {
  alert("Your number is invalid");
}

var birthDate = prompt("Enter your birth date in the format xx/xx/xx");
if (birthDate.charAt(2) === "/" && birthDate.charAt(5) === "/" && birthDate.length === 8) {
  alert("Your birthdate is valid");
} else {
  alert("Your birthdate is invalid");
}

var postCode = prompt("Enter your postal code either as xxxxx or xxxxx-xxxx");
if (postCode.length === 5 || (postCode.length === 9 && postCode.charAt(5) === "-")) {
  alert("Your postal code is valid");
} else {
  alert("Your postal code is invalid");
}

var stateAbrv = prompt("Enter your state abbreviation in caps like CO");
if (stateAbrv.length === 2 && (stateAbrv === stateAbrv.toUpperCase())) {
  alert("Your state abbreviation is valid");
} else {
  alert("Your state abbreviation is invalid");
}

var isMarried = prompt("Are you married? Either yes or no");
if (isMarried.toUpperCase() === "yes".toUpperCase() || isMarried.toUpperCase() === "no".toUpperCase()) {
  alert("Your marriage is valid");
} else {
  alert("I have no idea what you entered");
}
