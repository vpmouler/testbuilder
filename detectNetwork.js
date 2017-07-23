// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  if (cardNumber.length == 15 && cardNumber.slice(0,2) == 34 || cardNumber.slice(0,2) == 37)
  	return "American Express";
  if (cardNumber.length == 14 && cardNumber.slice(0,2) == 38 || cardNumber.slice(0,2) == 39)
  	return "Diner's Club";
  if (cardNumber.length == 16 && cardNumber.slice(0,2) >= 51 && cardNumber.slice(0,2) <= 55)
    return "MasterCard";
  if (cardNumber[0] == 4 && cardNumber.length == 13 || cardNumber.length == 16 || cardNumber.length == 19)
    return "Visa"; // why is this returning visa when on top of mastercard?
  if (cardNumber.length === 16 || cardNumber.length === 19 && cardcardNumber.slice(0,4) == 6011 || cardNumber.slice(0,6) >= 622126 && cardNumber.slice(0,6) <= 622925 || cardNumber.slice(0,2) == 65 || cardNumber.slice(0,3) >= 644 && cardNumber.slice(0,3) <= 649) 
    return "Discover Card";
  if (cardNumber.length >= 12 && cardNumber.length <= 19 && cardNumber.slice(0,4) == '5018' || cardNumber.slice(0,4) == 5020 || cardNumber.slice(0,4) == 5038 || cardNumber.slice(0,4) == 6304)
    return "Maestro";
};
/*
var Maestro = '501819293918204'
console.log(Maestro.slice(0,4) === 5018)
console.log(detectNetwork(Maestro))



  if (cardNumber.slice(0,4) >= 3528 && cardNumber.slice(0,4) <= 3589)
    return "JCB";


var MasterCard = "5512345678901234";
var visa = "4123456789012345678";

console.log(detectNetwork(visa));

console.log(visa[0])
*/
