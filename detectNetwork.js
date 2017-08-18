var detectNetwork = function(cardNumber) {

  var cardType;
  var prefixOne   = cardNumber[0];
  var prefixTwo   = cardNumber.slice(0, 2);
  var prefixThree = cardNumber.slice(0, 3);
  var prefixFour  = cardNumber.slice(0, 4);
  var prefixSix   = cardNumber.slice(0, 6);
  var len         = cardNumber.length;

  // Diner's Club

  if(len === 14 && prefixTwo === "38" || prefixTwo === "39") cardType = "Diner's Club";

  // American Express

  if(len === 15 && prefixTwo === "34" || prefixTwo === "37") cardType = "American Express";

  // Visa

  if(prefixOne === "4") {
    switch(len) {
      case 13:
      case 16:
      case 19:
        cardType = "Visa";
    }
  }

  // MasterCard

  if(len === 16) {
    switch(prefixTwo) {
      case "51":
      case "52":
      case "53":
      case "54":
      case "55":
        cardType = "MasterCard";
    }
  }

  // Discover

  if(len === 16 || len === 19) {
    if(prefixFour === "6011" || prefixTwo === "65") cardType = "Discover";
    switch(prefixThree) {
      case "644":
      case "645":
      case "646":
      case "647":
      case "648":
      case "649":
        cardType = "Discover";
    }
  }

  // Maestro

  if(prefixFour === "5018" || prefixFour === "5020" ||
     prefixFour === "5038" || prefixFour === "6304") {
       if(len >= 12 && len <= 19) cardType = "Maestro";
  }

  // China UnionPay

  if(len >= 16 && len <= 19) {
    if(parseInt(prefixSix) >= 622126 && parseInt(prefixSix) <= 622925) {
      cardType = "China UnionPay";
    }
    if(parseInt(prefixFour) >= 6282 && parseInt(prefixFour) <= 6288) {
      cardType = "China UnionPay";
    }
    if(parseInt(prefixThree) >= 624 && parseInt(prefixThree) <= 626) {
      cardType = "China UnionPay";
    }
  }

  // Switch

  if(len === 16 || len === 18 || len === 19) {
    switch (prefixFour) {
      case "4903":
      case "4905":
      case "4911":
      case "4936":
        cardType = "Switch";
    }
    if(prefixSix === "564182" || prefixSix === "633110") cardType = "Switch";
    if(prefixFour === "6333" || prefixFour === "6759") cardType = "Switch";
  }

  return cardType;
};