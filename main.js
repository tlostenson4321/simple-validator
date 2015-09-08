var phoneNumber = prompt ( "Please enter your phone number" +"\n" + "ex. xxx-xxx-xxxx" +"\n" + "This will not be used for spam")
console.log(phoneNumber)

if (phoneNumber.charAt(3) === "-" && phoneNumber.charAt(7) === "-") {
	alert ("true")
}
else {
	alert ("false\nPlease use format xxx-xxx-xxxx")
}

var birthDate = prompt ("Please enter your birth date" +"\n" + "ex. xx/xx/xx")
console.log(birthDate)

if (birthDate.charAt(2) === "/" && birthDate.charAt(5) === "/") {
	alert ("true")
}
else {
	alert ("false\nPlease use format xx/xx/xx")
}
