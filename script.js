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

// Generate random output Rock/Paper/Scissors | return Rock/Paper/Scissors
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

// Play a round of Rock, Paper, Scissors | return result
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Rock/Paper/Scissors: ', '');
    computerSelection = getComputerChoice();
    console.log('Player:' + playerSelection, ' vs Computer:' + computerSelection);

    // playerSelection = Rock
    if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'rock') {
        console.log('A tie!');
        return 'tie';
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        console.log('You Lose! Paper beats Rock');
        return 'lose';
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        console.log('You Win! Rock beats Scissors');
        return 'win';
    }

    // playerSelection = Paper
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        console.log('You Win! Paper beats Rock');
        return 'win!';
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'paper') {
        console.log('A tie!');
        return 'tie';
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        console.log('You Lose! Scissors beats Paper');
        return 'lose';
    }

    // playerSelection = Scissors
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        console.log('You Lose! Rock beats Scissors');
        return 'lose';
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        console.log('You Win! Scissors beats Paper');
        return 'win';
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'scissors') {
        console.log('A tie!');
        return 'tie';
    }
    else {
        console.log('Wrong input!');
    }
}

//Play 5 rounds of Rock, Paper, Scissors | Save scores | return Result
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result;

    for (let i = 1; i <= 5; i++) {
        console.log('Round ' + i);
        result = playRound(playerSelection, computerSelection);

        if (result === 'win') {
            playerScore++
            console.log('Current score. Player:' + playerScore + ' Computer:' + computerScore);
        }
        else if (result === 'lose') {
            computerScore++
            console.log('Current score. Player: ' + playerScore + ' Computer:' + computerScore);
        }
        else if (result === 'tie') {
            console.log('Current score. Player:' + playerScore + ' Computer:' + computerScore);
        }
    }

    if (playerScore > computerScore) {
        return 'Congratulations! You Win!';
    }
    else if (playerScore < computerScore) {
        return 'Aww You Lose! Nice try though!';
    }
    else {
        return "It's a Draw!";
    }

}