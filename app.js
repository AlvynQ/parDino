// let dinoN = ["T-rex le Carnasier",
//             "Le Commandant Brachiosaure",
//             "Le Fantassin Ankylosaure",
//             "L'assasin Spinosaure",
//             "Le Microraptor Psychopompe",
//             "La Pierre d'Extinction"],

//     dinoV = [3,
//               2,
//               1,
//               spinosaure,
//               microraptor,
//               -1];

let nbDice = 7; 

let random = 0;
let maxRandom = 6;

let fullDiceArray = [];

let spinosaure = 0;
let microraptor = 0;
let ankylosaure = 1;
let tRex = 3;
let brachiosaure = 2;
let pierreExt = -1;


let   dice = document.querySelectorAll(".dice");

function randomDice(){
    let i = 0;

    for (; i < nbDice ; i++) {
    random = 1 + Math.floor(Math.random() * maxRandom);
    
    let tabfullDice = fullDiceArray.push(random);
    dice[i].innerHTML = random;
    console.log(fullDiceArray);
    }
    play();
}

function play(){



}

  
