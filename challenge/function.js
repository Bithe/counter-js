var count = 1;

function multiplicationTable(number) {
    for (i = 1; i <= 10; i++) {
        count = 13 * i;
        console.log(i + "X" + number + "=" + count);

    }

}

var thirteenTable = multiplicationTable(13);

// Uppercase to lowercase
function upperRegularcase(text) {
    let lowercase = text.toLowerCase();
    return lowercase;
}
var resultlower = upperRegularcase('BITHE');
console.log(resultlower);


// full name


function name(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}
var fullName = name('hablu', 'bablu');


//square


function squareNumber(number) {
    var result = Math.pow(number, 2);
    console.log(result);
}

var square = squareNumber(10);


//object
const pizza = {
    troppins: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    servees: 2,
}

console.log(pizza.troppins[2]);


// leap year

function leapYear(year) {
    if ((year % 400 == 0) || (year % 4 == 0) && (year % 100 != 0)) {
        console.log("Its a leap year");
    } else if (year % 100 == 0) {
        console.log("Its not a leap year");
    }
}

leapYear(2022);

//
function compare(a, b) {
    if (a == b) {
      return true;
    } else {
      return false;
    }
  }
  const result = compare(15, "15");
  console.log(result);
///

  function compare(a, b) {
    if (a.toString() === b) {
     return true;
    } else {
     return false;
    }
   }
   
   const results = compare(25, 25);
   console.log(results);
   //
   console.log("123" + 123);
//

let a="hi"
let b="there"
console.log(a+b)  
  

//

const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);
}