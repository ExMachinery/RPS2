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

function playRound() {
    let human = player;
    let AI = enemy;
    console.log(AI, human);

    if (human == AI) {
        alert('Draw!')
    }else if (human == 'Rock') {
        if (AI == 'Paper') {
            alert('AI choose Paper! You lose!');
            return ++computerScore;
        } else if (AI == 'Scissors') {
            alert('AI choose Scissors! You win!');
            return ++humanScore;
        }
    } else if (human == 'Scissors') {
        if (AI == 'Rock') {
            alert('AI choose Rock! You lose!');
            return ++computerScore;
        } else if (AI == 'Paper') {
            alert('AI choose Paper! You win!');
            return ++humanScore;
        }
    } else if (human == 'Paper') {
        if (AI == 'Scissors') {
            alert('AI choose Scissors! You lose!');
            return ++computerScore;
        } else if (AI == 'Rock') {
            alert('AI choose Rock! You win!');
            return ++humanScore;
        }
    }
    console.log(humanScore);
    console.log(computerScore);
}

// Starter
let round = 5;
function playGame() {
        getComputerChoice();
        getHumanChoice();
        playRound();
}

for (let i = 0; i < round; i++) {
    playGame();
}


alert(`Total Score. You: ${humanScore}, AI: ${computerScore}`);
switch (true) {
    case (humanScore < computerScore):
        alert('You have been bitten by AI, son! Shame!');
        break;
    case (humanScore > computerScore):
        alert('You beat dumbass AI. Hope you proud of yourself.');
        break;
    case (humanScore === computerScore):
        alert('Wow, you reach dumb AI in your RPS skill! Good job!');
        break;
    default:
        console.log('Cases still doesnt work properly');
}