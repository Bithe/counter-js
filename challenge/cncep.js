function electricityBill(unit) {
    let amount;
    if (unit <= 100) {
        amount = unit * 5;
        return ("Your total bill is " + amount);
    } else if (unit > 100 && unit < 200) {
        let firstBill = 100 * 5;

        let remaingBill = (unit - 100) * 6;
        amount = firstBill + remaingBill;
        return ("Your total bill is " + amount);
    } else {
        let firstBill = 100 * 5;
        let secondBil = 100 * 6;
        let remaingBill = (unit - 200) * 7;
        amount = firstBill + secondBil + remaingBill;
        return ("Your total bill is " + amount);
    }
}
console.log(electricityBill(200));



//
// function checkGPA(marks) {

//     for (i = 0; i < marks; i++)
//         let element;
//     if (element <= 80) {
//         return true;
//     }
//     return false;
// }

// console.log(checkGPA(80));


//

function secondLargestElements(array) {
    let largests = array[0];
    let secdonLargests = array[0];
    for (let i = 0; i < array.length; i++) {
        let elements = array[i];
        if (elements > largests) {
            secdonLargests = largests;
            largests = elements;
        } else if (elements > secdonLargests) {
            secdonLargests = elements;
        }
    }
    return ["Second Largest is " + secdonLargests, "Largest is " + largests];
}
let array = [45, 41, 56, 35, 64, 60];
console.log(secondLargestElements(array));