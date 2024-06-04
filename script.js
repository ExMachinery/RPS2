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

getComputerChoice();
console.log(getComputerChoice());
// Player choice