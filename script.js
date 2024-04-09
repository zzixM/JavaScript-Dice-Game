'use strict';

// Globals 
const doc = document;
const docQ = query => doc.querySelector(query);
const id = query => doc.getElementById(query);

// Global Variables
const diceImg = docQ(".dice")
const score0Elem = docQ("#score--0"); // Elem = HTML Element
const score1Elem = docQ("#score--1");
const newGameBtn = docQ(".btn--new");
const rollDiceBtn = docQ(".btn--roll");
const diceHoldBtn = docQ(".btn--hold");

// setting initial conditions
score0Elem.textContent = 0;
score1Elem.textContent = 0;
diceImg.classList.add("hidden");

// Generates sudorandom number between 1 and 6 to imitate a dice
const rollDice = () => {
    let _tempDiceRoll = Math.trunc(Math.random() * 6) + 1;
    return _tempDiceRoll;
}

/**
 * * FOR GitHub -
 * ! game code writen by (script.js) - @zzixM
 * ! index.html and style.css writen by - @jonasschmedtmann
 * ! .pngs provided by - @jonasschmedtmann
 * ? project from "The Complete JavaScript Course 2024: From Zero to Expert!"
 * ? this project was not a colaberation
 */