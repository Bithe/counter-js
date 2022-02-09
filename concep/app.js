// const allButton = document.getElementsByClassName("button-test");

// console.log(allButton);


// for(const button of allButton){
//     button.addEventListener("click", function(e){
//         document.getElementById("")
//     })
// }


let count = 0;
// document.getElementById("add").addEventListener("click", function(e){
// count = count++;
// control(count);
// });

// document.getElementById("minus").addEventListener("click", function(e){
//     count = count-1;
//   control(count);
// });

function add(e){
    count++;
    control("count");
}

function minus(e){
    if(count > 0){
        count--;
    }  
    control("count");
}

// 
function control(id){
    document.getElementById(id).innerText = count;
}