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

let random;

let nbFace = 6 ;

let spinosaure = 0 ;
let microraptor = 0 ;
let ankylosaure = 1 ;
let tRex = 3;
let brachiosaure = 2 ;
let pierreExt = -1 ;


let dino = [spinosaure,
            microraptor, 
            ankylosaure,
            tRex,
            brachiosaure,
            pierreExt];

let   dice = document.querySelectorAll(".dice");

function randomDice(){

    random = 1 + Math.floor(Math.random() * nbFace);
    dispatchDice();
    }

function dispatchDice () {
    let i = 0;
    
        for (; i < nbDice ; i++) {
            dice[i].innerHTML = random;
            console.log(random);
        }
    }
  
