var phoneNumber = prompt ( "Please enter your phone number" +"\n" + "ex. 303-555-0123" +"\n" + "This will not be used for spam")
console.log(phoneNumber)

if (phoneNumber.charAt(3) === "-" && phoneNumber.charAt(7) === "-") {
	alert ("true")
}
else {
	alert ("false")
}

var birthDate = prompt ("Please enter your birth date" +"\n" + "ex. xx/xx/xx")