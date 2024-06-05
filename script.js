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

function playRound(player, enemy) {
    switch (player) {
        case (player === enemy):
            console.log('Draw!');
            break;
        case (player == 'Rock'):
            if (enemy == 'Paper') {
                alert('AI choose Paper! You lose!');
                return ++computerScore;
            } else if (enemy == 'Scissors') {
                alert('AI choose Scissors! You win!');
                return ++humanScore;
            }
        case (player == 'Scissors'):
            if (enemy == 'Rock') {
                alert('AI choose Rock! You lose!');
                return ++computerScore;
            } else if (enemy == 'Paper') {
                alert('AI choose Paper! You win!');
                return ++humanScore;
            }
        case (player == 'Paper'):
            if (enemy == 'Scissors') {
                alert('AI choose Scissors! You lose!');
                return ++computerScore;
            } else if (enemy == 'Rock') {
                alert('AI choose Rock! You win!');
                return ++humanScore;
            }
    }
    console.log(humanScore);
    console.log(computerScore);
}
