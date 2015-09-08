var phoneNumber = prompt ( "Please enter your phone number" +"\n" + "ex. xxx-xxx-xxxx" +"\n" + "This will not be used for spam")
console.log(phoneNumber)

if (phoneNumber.charAt(3) === "-" && phoneNumber.charAt(7) === "-") {
	alert ("true")
}
else {
	alert ("false\nPlease use format xxx-xxx-xxxx")
	prompt ( "Please enter your phone number" +"\n" + "ex. xxx-xxx-xxxx" +"\n" + "This will not be used for spam")
}

var birthDate = prompt ("Please enter your birth date" +"\n" + "ex. xx/xx/xx")
console.log(birthDate)

if (birthDate.charAt(2) === "/" && birthDate.charAt(5) === "/") {
	alert ("true")
}
else {
	alert ("false\nPlease use format xx/xx/xx")
	prompt ("Please enter your birth date" +"\n" + "ex. xx/xx/xx")
}
var postalCode = prompt ("Please enter your postal code" +"\n" + "ex. xxxxx or xxxxx-xxxx")
console.log(postalCode)

if (postalCode.length === 5) {
	alert ("true")
}	
else if (postalCode.length === 10 && postalCode.charAt(5) === "-") {
	alert ("true")
}
else {
	alert ("false\nPlease use format xxxxx or xxxxx-xxxx")
	prompt ("Please enter your postal code" +"\n" + "ex. xxxxx or xxxxx-xxxx")
}

var stateAbbr = prompt ( "Please enter in your abbreviated state code" + "\n" + "ex. CO, AZ, XX, etc.")

if (stateAbbr.length === 2 && stateAbbr.isUpperCase) {
	alert ("true")
}

else {
	alert ("false\nPlease use format XX")
}

var married = prompt ("Are you married?" + "\n" + "Please answer 'yes' or 'no")

if (married == "yes" || "Yes" || "YES") {
	alert ("true")
}
else {
	alert ("false")
}
