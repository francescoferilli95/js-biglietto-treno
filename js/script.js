console.log('Hello Console!');

/** 
 * TASKS:
 * 
 *  1. ASK FOR THE VISITOR'S KM RIDE NEEDED;
 *  2. ASK FOR VISITOR'S AGE;
 *  3. CALCULATE THE TOTAL RIDE PRICE AND APPLY DISCOUNTS IF NEEDED;
 *  4. GIVE AN OUTPUT ABOUT THE PRICE WITH ONLY TWO DECIMAL PLACES.
 * 
*/

/**
 *  VARIABLES
 */

var kmNeeded = parseInt( prompt('How many KM do you need to do?'));
console.log(kmNeeded);
var visitorAge = parseInt( prompt('How old are you?'));
console.log(visitorAge);
var price = (0.21 * kmNeeded).toFixed(2);
console.log(price);
var youngDiscount = ( (price * 20) / 100).toFixed(2);
console.log(youngDiscount);
var seniorDiscount = ( (price * 40) / 100).toFixed(2);
console.log(seniorDiscount);
var youngDiscountPrice = (price - youngDiscount).toFixed(2);
var seniorDiscountPrice = (price - seniorDiscount).toFixed(2);

/**
 * PRICE CALCULATOR BASED ON THE AGE OF THE VISITOR
 */

if (visitorAge < 18) {
    document.getElementById('price').innerHTML = youngDiscountPrice;
} else if (visitorAge > 65) {
    document.getElementById('price').innerHTML = seniorDiscountPrice;
} else {
    document.getElementById('price').innerHTML = price;
}