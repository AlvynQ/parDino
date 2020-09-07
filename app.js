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

const faceDice = [{
    name : "T-rex le Carnasier";
    img : "vicking.png",
    value : 3,
    contrainte : null
},
    {
    img : "assasin.png",
    value : 1,
    contrainte : "nullVicking"
},
    {
    img : "mage.png",
    value : null,
    contrainte : "nullVicking"
},
{
    img : "bouclier.png",
    value : 10,
   contrainte : "nullVicking"
},
{
    img : "épée.png",
    value : 8,
    contrainte : "nullVicking"
},
{
    img : "bague.png",
    value : 2,
    contrainte : "nullVicking"
},

]

let nbDice = 7; 

let maxRandom = faceDice.length;

//let fullDiceArray = [];
// let tabfullDice = fullDiceArray.push(random);
    


let spinosaure = 0;
let microraptor = 0;
let ankylosaure = 1;
let tRex = 3;
let brachiosaure = 2;
let pierreExt = -1;


const dice = document.querySelectorAll(".dice");

function randomDice(){
    let i = 0;

    for (; i < nbDice ; i++) {
    const random = Math.floor(Math.random() * maxRandom);
    
    dice[i].innerHTML = `<data-value="${faceDice[random].value}">${faceDice[random].value}  <img src="./img/${faceDice[random].img}">`;
    console.log(i);
    }
    play();
}

function play(){



}

  
