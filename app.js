class Dice {
    constructor(name, imgName, value, contrains) {
      this.name = name;
      this.imgName = imgName;
      this.value = value;
      // this.contrains = contrains;
    }
  }

const dice1 = new Dice("T-rex le Carnasier", "tRex.png", 3);
const dice2 = new Dice("Le Commandant Brachiosaure", "brachiosaure.png", 2);
const dice3 = new Dice("Le Fantassin Ankylosaure", "ankylosaure.png", 1);
const dice4 = new Dice("L'assasin Spinosaure", "spinosaure.png", 1);
const dice5 = new Dice("Le Microraptor Psychopompe", "microraptor.png", 0);
const dice6 = new Dice("La Pierre d'Extinction", "pierre.png", -1);
const diceFaceArray = [dice1, dice2, dice3, dice4, dice5, dice6];
//nombre de dés
let nbDice = 7; 

let maxRandom = diceFaceArray.length;

let fullDiceArray = [];
    
const dice = document.querySelectorAll(".dice");

function randomDice(){
  //initialise le tableau a 0;
    fullDiceArray = [];

  //boucle pour randomisé les dés
    for (i = 0 ; i < nbDice ; i++) {
    const random = Math.floor(Math.random() * maxRandom);
  //ajoute les dés dans un tableau par leur nom.png
    let tabfullDice = fullDiceArray.push(diceFaceArray[random].imgName);
  //affiche les resulta sur les dés en html
    dice[i].innerHTML = `<data-value="${diceFaceArray[random].value}"><p>${diceFaceArray[random].value}</p>  <img src="./img/${diceFaceArray[random].imgName}">`;
    }
  //limit la taille du tableau a 7
    if (fullDiceArray.length >= 7) {
      fullDiceArray.length = 7;
      console.log(fullDiceArray);
    }
}

// function play(){



// }

  
