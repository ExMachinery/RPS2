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

// Game engine
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const result = document.querySelector(".Result")
const score = document.querySelector(".score");
const final = document.querySelector(".final");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        getComputerChoice();
        playRound(button.id);
    });
});


function playRound() {
    let human = arguments[0];
    let AI = enemy;
    console.log(AI, human);

    if (human == AI) {
        result.textContent = "Draw!";
    } else if (human == 'Rock') {
        if (AI == 'Paper') {
            result.textContent = "AI chose Paper! You lose!";
            computerScore += 1;
        } else if (AI == 'Scissors') {
            result.textContent = 'AI chose Scissors! You win!';
            humanScore += 1;
        }
    } else if (human == 'Scissors') {
        if (AI == 'Rock') {
            result.textContent = 'AI chose Rock! You lose!';
            computerScore += 1;
        } else if (AI == 'Paper') {
            result.textContent = 'AI chose Paper! You win!';
            humanScore += 1;
        }
    } else if (human == 'Paper') {
        if (AI == 'Scissors') {
            result.textContent = 'AI chose Scissors! You lose!';
            computerScore += 1;
        } else if (AI == 'Rock') {
            result.textContent = 'AI chose Rock! You win!';
            humanScore += 1;
        }
    }
    score.textContent = `You: ${humanScore} AI: ${computerScore}`;
    console.log(humanScore);
    console.log(computerScore);

    if (humanScore == 5) {
        final.textContent = 'You beat dumbass AI. Hope you proud of yourself.';
        score.textContent = `You: ${humanScore} AI: ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
    }
    if (computerScore == 5) {
        final.textContent = 'You have been beaten by AI, son! Shame!';
        score.textContent = `You: ${humanScore} AI: ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
    }



}


// Starter
// let round = 5;
// function playGame() {
//         getComputerChoice();
//         getHumanChoice();
//         playRound();
// }

// for (let i = 0; i < round; i++) {
//     playGame();
// }


// alert(`Total Score. You: ${humanScore}, AI: ${computerScore}`);
// switch (true) {
//     case (humanScore < computerScore):
//         alert('You have been bitten by AI, son! Shame!');
//         break;
//     case (humanScore > computerScore):
//         alert('You beat dumbass AI. Hope you proud of yourself.');
//         break;
//     case (humanScore === computerScore):
//         alert('Wow, you reach dumb AI in your RPS skill! Good job!');
//         break;
//     default:
//         console.log('Cases still doesnt work properly');
// }