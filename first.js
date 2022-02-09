var age = 25;
var tem = 17;
var dim = 5;
var string = 'hey im bithe';
var myOffcieAddress = "kalabagan";
var boolen = true;
var boolen = false;

var total = age + dim;
console.log(56);
console.log(total);
console.log(age + tem);
console.log(string);
console.log(boolen);
// 1 st letter num die suru hote parbe na bt last e dia jay

var num1 = '99.5';
var num2 = 15;
var convert = parseInt(num1);
console.log(convert + num2);
console.log(typeof num1);


var date = new Date();
console.log(typeof date);


//



var fl1 = 0.1;
var flt2 = 0.2;
var ftotal = fl1 + flt2;
ftotal = ftotal.toFixed(2);
console.log(ftotal);
console.log(fl1 + flt2);

var array = [1, 2, 3];
var index = array.indexOf(2);
console.log(index);

var lastBench = ['lalam, mula', 'alu'];
lastBench.push('tomto');
console.log(lastBench);


//

// console.log(5 > 6);
// console.log(6 == 6);
// console.log(6 != 6);
// console.log(5 != 6);
// console.log(studyGoood && goodPerson);
// console.log(studyGoood || goodPerson);

// console.log(6 >= 6);
// var cokePrice = 17;
// var isHot = true;
// if (cokePrice < 15) {
//     console.log(“coke khabo”);
// } else if (isHot == true) {
//     console.log(“ami hot”);
// } else {
//     console.log(“pani khabo”);
// }


var friends = ['b', 'r'];
for (var i = 0; i < friends.length; i++) {
    // console.log(i);
}

for (var i = 0; i < 10; i++) {
    console.log(i);
}


var name = "false ";
console.log(typeof name);

var bithe = ['a', 'i', 'o'];
console.log(bithe.length);

bithe.push('e');
console.log(bithe);


var numbers = [9, 7, 5, 3];
console.log(numbers);
numbers[2] = 1;
console.log(numbers);
console.log(numbers.length);

var index = numbers.indexOf(7);
console.log(index);

var whom = numbers[0];
console.log(whom);



//
var isFoodReady = true;
if (isFoodReady == true) {
    console.log('mom, i wnat to meet with u');
}

var price = 100000;
var mybudget = 100000;

if (price < mybudget) {
    console.log('meeting with mom');

} else if (price > mybudget) {
    console.log('meeting with dad')
} else {
    console.log('meeting with both')
}



//
var roastGtiven = 0;
while (roastGtiven < 7) {
    console.log(roastGtiven);
    console.log('roast giving to us');
    roastGtiven++;
}

//
for (var i = 0; i < 3; i++) {
    console.log('bthe roast');
    console.log(i);
}

var number = [78, 90, 98, 66, 55];
for (var i = 0; i < 5; i++) {
    var indexWho = number[i];
    console.log(indexWho);
}


// 


function sub(num1, num2) {
    var result = num2 - num1;
    return result;
}
var minus = sub(10, 20);
console.log('minus=', minus);


//boject


var book = {
    name: 'cindrel',
    author: 'bithe',
    price: 90,
    pages: 5,
}
console.log(book);
console.log(book.author);


book.price = 300;
book["price"] = 400;
var bookPrice = "price";
book[bookPrice] = 600;
console.log(book);

//



function getReminder(number1, number2) {
    number1 % number2;
}

reminder = getReminder(12, 2);

console.log(reminder);


//

function addNumber(number1, number2) {
    return "Result is " + number1 + number2;
}

var result = addNumber(5, 4);


//


for (i = 0; i <= 10; i++) {
    console.log(Math.round(Math.random() * 100));
}

//
var a = 5;
var b = 8;
var c = 4;
var d = 6;
var highest = console.log('highest ' +
    Math.max(a, b, c, d));

//
console.log(Math.floor(13.67));

//
const numbera = -78;
const answer = Math.abs(numbera);
console.log(answer);

//
const wasim = "hubby";
// wasim = "hubby babu";
console.log(wasim);


//
var a = 2;
var b = 3;
if (a < b) { console.log("Hello "); }

//
console.log(Math.round(12.96));
console.log(Math.ceil(12.96));
console.log(Math.floor(12.96));

//
// function add(a, b) { return a + b; }


// console.log(add(2, 4));

//