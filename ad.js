function add(a, b) {
    return a + b;
}
console.log(add("adam" + "eve"));


var string = "hubby babu";
console.log(string.length);


for (i = 0; i < 10; i++) {
    console.log(100 + Math.random() * 100);
}

//


var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for (var i = 0; i < sentence.length; i++) {
    var letter = sentence[i];
    if (letter == 'a') {
        count++;
    }
}
console.log(count)