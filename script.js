// Computer choice
let enemy;

function getComputerChoice() {
    let ran = Math.random();
    ran *= 100;
    if (ran <= 33) {
        enemy = 'Rock';
    } else if (ran >= 66) {
        enemy = 'Paper';
    } else {
        enemy = 'Scissors';
    }
    return enemy;
}

// Player choice
let player;

function getHumanChoice() {
    player = (parseInt(prompt('1 - Rock, 2 - Scissors, 3 - Paper. Give me numba!', )));
    if (player === 1) {
        player = 'Rock';
    } else if (player === 2) {
        player = 'Scissors';
    } else {
        player = 'Paper';
    }
    return player;
}

// Game engine
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoi) {

}