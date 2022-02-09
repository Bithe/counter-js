function makeRed(){
    document.body.style.backgroundColor = 'Red';
}


const yellowButton = document.getElementById('make-yellow-button');

yellowButton.onclick = makeYellow;

function makeYellow(){
    document.body.style.backgroundColor = 'Yellow'; 
}

//handle event using anonymous function
const greenButton = document.getElementById('make-green-button');
greenButton.onclick = function (){
    document.body.style.backgroundColor = 'green';
}

//

const goldenButton = document.getElementById('make-golden');

goldenButton.addEventListener('click', makeGolden);

function makeGolden(){
    document.body.style.backgroundColor = 'goldenrod';
}

const pinkButton = document.getElementById('make-pink-button');

pinkButton.addEventListener('click', function makePink(){
    document.body.style.backgroundColor = 'pink';
})


document.getElementById('make-white').addEventListener('click', function(){
    document.body.style.backgroundColor = 'white';
})


function handleJustFunction(){
    const p = document.getElementById('clicking-method');
    p.innerText = 'set a inner text';
}

 document.getElementById('handle-event').addEventListener('click', function(){
    const p = document.getElementById('clicking-method');
    p.innerText = 'set a inner text';
 })
      