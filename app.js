class Dice {
    constructor(name, img, value, contrains) {
      this.name = name;
      this.img = img;
      this.value = value;
      this.contrains = contrains;
    }
  }


const dice1 = new Dice("T-rex le Carnasier", "tRex.png", 3, null);
const dice2 = new Dice("Le Commandant Brachiosaure", "brachiosaure.png", 2, null);
const dice3 = new Dice("Le Fantassin Ankylosaure", "ankylosaure.png", 1, null);
const dice4 = new Dice("L'assasin Spinosaure", "spinosaure.png", 1, null);
const dice5 = new Dice("Le Microraptor Psychopompe", "microraptor.png", 0, null);
const dice6 = new Dice("La Pierre d'Extinction", "pierre.png", -1, null);


const diceFaceArray = [dice1, dice2, dice3, dice4, dice5, dice6];


let nbDice = 7; 

let maxRandom = diceFaceArray.length;

//let fullDiceArray = [];
// let tabfullDice = fullDiceArray.push(random);
    
const dice = document.querySelectorAll(".dice");

function randomDice(){
    let i = 0;

    for (; i < nbDice ; i++) {
    const random = Math.floor(Math.random() * maxRandom);
    
    dice[i].innerHTML = `<data-value="${diceFaceArray[random].value}">${diceFaceArray[random].value}  <img src="./img/${diceFaceArray[random].img}">`;
    console.log(i);
    }
    play();
}

function play(){



}

  
