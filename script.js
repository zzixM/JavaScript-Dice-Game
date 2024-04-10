'use strict';

// Globals constants
const doc = document;
const docQ = query => doc.querySelector(query);
const id = query => doc.getElementById(query);
const WINCONDITION = 100; // sets the win condition

// Global Variables - HTML Elemenst
/**
 * * Gets elemenst form document to store them
 * * Elem = HTML Element
 */
const player0Elem = docQ(".player--0"); // Each player in the game
const player1Elem = docQ(".player--1");
const diceImg = docQ(".dice")
const score0Elem = docQ("#score--0"); // Tracks over all score
const score1Elem = docQ("#score--1");
const currentScore0Elem = id("current--0"); // tracks score on turn on screen
const currentScore1Elem = id("current--1");
const newGameBtn = docQ(".btn--new");
const rollDiceBtn = docQ(".btn--roll");
const diceHoldBtn = docQ(".btn--hold");

// Global Variables - Game Variables
const gameScores = [0, 0] // Games scores for keeping over turns
let curentScore = 0; // tracks score on turn
let currentPlayer = 0; // 0 = player 0 1 = player 1
let playing = true; // tracks state of game

// setting initial conditions
score0Elem.textContent = 0;
score1Elem.textContent = 0;
diceImg.classList.add("hidden");

// toggles active player 
const togglePlayer = () => {
        // Changes acive player visually
        // Automaticly by switching with .toggle()
        player0Elem.classList.toggle("player--active");
        player1Elem.classList.toggle("player--active");

        // Switches player
        // if current player = 0 => 1 else 1 => 0
        currentPlayer = currentPlayer === 0 ?  1 : 0;
}

// handles setting current score
const setScore = (target) => {
    // calls function to set score
    document.getElementById(`current--${target}`).textContent = curentScore;
}

// handles setting game score
const setGameScore = (target) => {
    // calls function to set game score
    document.getElementById(`score--${target}`).textContent = gameScores[target];
}

// Generates sudorandom number between 1 and 6 to imitate a dice
// adds event listner for rollDiceBtn 
rollDiceBtn.addEventListener("click", function () {

    // Checks if the game is being played / won or not
    if (playing) {

        // Generates number
        let diceRoll = Math.trunc(Math.random() * 6) + 1;

        // Shows correct dice image 
        diceImg.classList.remove("hidden");
        diceImg.src = `dice-${diceRoll}.png`;
        
        // Checks if the dice is going to switch players
        if (diceRoll !== 1) {
            // adds dice to curent score
            curentScore += diceRoll;

            // Gets active player and changes score
            setScore(currentPlayer)

        } else {
            // resets current score for next player
            curentScore = 0;

            // calls function to set score
            setScore(currentPlayer)

            // calls function to switch player
            togglePlayer();
        }
    }

})

// Adds event listiner for holding score
diceHoldBtn.addEventListener("click", function () {
    // updates games scores
    gameScores[currentPlayer] += curentScore;
    
    // Visually updates the current players score
    setGameScore(currentPlayer);

    // restest current score and playes current score display Elem
    curentScore = 0;
    setScore(currentPlayer);

    // Checks for win condition 
    if (gameScores[currentPlayer] >= WINCONDITION) {
        playing = false;
        console.log("Winner");

        // adds winner class to current player
        doc.querySelector(`.player--${currentPlayer}`).classList.add("player--winner");
        // removes player active effect visually
        doc.querySelector(`.player--${currentPlayer}`).classList.remove("player--active");

    } else {
        togglePlayer();
    }
})

newGameBtn.addEventListener("click", function() {
    // starts game
    playing = true;
    currentPlayer = 0;

    // resets game states
    for (let i = 0; i < gameScores.length; i++){
        gameScores[i] = 0;
        curentScore = 0;
        // visually resets scores
        setScore(i);
        setGameScore(i)

        // visually removes winner
        doc.querySelector(`.player--${i}`).classList.remove("player--winner");

        // sets up actove player for next game
        if (i === currentPlayer) {
            doc.querySelector(`.player--${currentPlayer}`).classList.add("player--active");
        } else {
            doc.querySelector(`.player--${i}`).classList.remove("player--active");
        }
    }
})

/**
 * * FOR GitHub -
 * ! game code writen by (script.js) - @zzixM
 * ! index.html and style.css writen by - @jonasschmedtmann
 * ! .pngs provided by - @jonasschmedtmann
 * ? project from "The Complete JavaScript Course 2024: From Zero to Expert!"
 * ? this project was not a colaberation
 */