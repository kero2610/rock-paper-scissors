/* Rock Paper Scissors
1. create a userInput variable to ask input from user whether user choose Rock, Paper or Scissors
2. create a computerChoice variable to get generated random output between Rock, Paper and Scissors
3. if userInput === Rock && computerChoice === Rock - a tie
4. if userInput === Rock && computerChoice === Paper - computer wins
5. if userInput === Rock && computerChoice === Scissors - user wins
6. if userInput === Paper && computerChoice === Rock - user wins
7. if userInput === Paper && computerChoice === Paper - a tie
8. if userInput === Paper && computerChoice === Scissors - computer wins
9. if userInput === Scissors && computerChoice === Rock - computer wins
10. if userInput === Scissors && computerChoice === Paper - user wins
11. if userInput === Scissors && computerChoice === Scissors - a tie
12. if user wins, print 'You win!'
13. if user lose, print 'You lose!'
14. if a tie, print 'A tie'
15. if user input a value other than Rock, Paper and Scissors, print 'Wrong input!'

The Odin Project instruction to algorithm
1. make a function getComputerChoice that randomly return Rock/Paper/Scissors
2. make a function that play 1 round.
    - take 2 parameters - playerSelection, computerSelection
    - return a string that declare the winner
3. make parameters in function(2) case insensitive
4. make a function game()
    - use function(2) 5 times
    - save score
    - return winner/loser
*/

let playerSelection = '';
let computerSelection = '';


console.log(game());

// Generate random output Rock/Paper/Scissors
function getComputerChoice() {
    // 0 = Rock, 1 = Paper, 2 = Scissors   
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) {
        return 'Rock';
    }
    else if (randomNum === 1) {
        return 'Paper';
    }
    else if (randomNum === 2) {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Rock/Paper/Scissors : ', '');
    computerSelection = getComputerChoice();
    console.log('player: ' + playerSelection, ' vs computer :' + computerSelection);

    // playerSelection = Rock
    if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'rock') {
        return 'A tie';
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        return 'You lose!';
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        return 'You win!';
    }

    // playerSelection = Paper
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        return 'You win!';
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'paper') {
        return 'A tie';
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        return 'You lose!';
    }

    // playerSelection = Scissors
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        return 'You lose!';
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        return 'You win!';
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'scissors') {
        return 'A tie';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log('Round ' + i);
        result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result === 'You win!') {
            playerScore++
            console.log('Current score. Player: ' + playerScore + ' Computer: ' + computerScore);
        }
        else if (result === 'You lose!') {
            computerScore++
            console.log('Current score. Player: ' + playerScore + ' Computer: ' + computerScore);
        }
        else if (result === 'A tie') {
            console.log('Current score. Player: ' + playerScore + ' Computer: ' + computerScore);
        }
    }

    if (playerScore > computerScore) {
        return 'Congratulations! You win!';
    }
    else if (playerScore < computerScore) {
        return 'Aww You lose! Nice try though';
    }
    else {
        return "It's a tie!";
    }

}

/*
let userInput = parseInt(prompt('0 = Rock, 1 = Paper, 2 = Scissors : ', ''));
let computerChoice = Math.floor(Math.random() * 3);
// 0 = Rock, 1 = Paper, 2 = Scissors
console.log(userInput);
console.log(computerChoice);


// userInput = 0(Rock)
if (userInput === 0 && computerChoice === 0) {
    console.log('A tie');
}
else if (userInput === 0 && computerChoice === 1) {
    console.log('You lose!');
}
else if (userInput === 0 && computerChoice === 2) {
    console.log('You win!');
}

//userInput = 1(Paper)
else if (userInput === 1 && computerChoice === 0) {
    console.log('You win!');
}
else if (userInput === 1 && computerChoice === 1) {
    console.log('A tie');
}
else if (userInput === 1 && computerChoice === 2) {
    console.log('You lose!');
}

//userInput = 2(Scissors)
else if (userInput === 2 && computerChoice === 0) {
    console.log('You lose!');
}
else if (userInput === 2 && computerChoice === 1) {
    console.log('You win!');
}
else if (userInput === 2 && computerChoice === 2) {
    console.log('A tie');
}

else {
    console.log('Wrong input!');
}*/

