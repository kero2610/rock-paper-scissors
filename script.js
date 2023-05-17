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

ADDING UI AND CHANGE USERINPUT TO CLICK BUTTON
1. Add 3 button - Rock, Paper, Scissors - call playRound() when click
2. Add <div> showing result every round
3. Display current score and announce winner once player/computer get 5 points

*/
let playerSelection = '';
let computerSelection = '';
let playerScore = 0;
let computerScore = 0;
let round = 0;

const rock = document.querySelector('.rock');
rock.addEventListener('click', playRound);

const paper = document.querySelector('.paper');
paper.addEventListener('click', playRound);

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', playRound);

const scorePlayer = document.querySelector('.scorePlayer');
const scoreComputer = document.querySelector('.scoreComputer');
scorePlayer.textContent = playerScore;
scoreComputer.textContent = computerScore;

const result = document.querySelector('.result');

const gameRound = document.querySelector('.round');
gameRound.textContent = `Round ${round}`;



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
    roundCheck();
    playerSelection = this.dataset.button;
    computerSelection = getComputerChoice();

    // playerSelection = Rock
    if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'rock') {
        result.textContent = 'A tie!';
        checkScore();
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        computerScore++;
        result.textContent = 'You Lose! Paper beats Rock';
        checkScore();
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        playerScore++;
        result.textContent = 'You Win! Rock beats Scissors';
        checkScore();
    }

    // playerSelection = Paper
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        playerScore++;
        result.textContent = 'You Win! Paper beats Rock';
        checkScore();
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'paper') {
        result.textContent = 'A tie!';
        checkScore();
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        computerScore++;
        result.textContent = 'You Lose! Scissors beats Paper';
        checkScore();
    }

    // playerSelection = Scissors
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        computerScore++;
        result.textContent = 'You Lose! Rock beats Scissors';
        checkScore();
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        playerScore++;
        result.textContent = 'You Win! Scissors beats Paper';
        checkScore();
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'scissors') {
        result.textContent = 'A tie!';
        checkScore();
    }
}

//check score and declare winner/loser
function checkScore() {
    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;

    if (playerScore === 5) {
        result.textContent = 'Congratulations! You Win!';
        resetScore();
    }
    else if (computerScore === 5) {
        result.textContent ='Aww You Lose! Nice try though!'
        resetScore();
    }
}

//reset score to 0
function resetScore() {
    playerScore = 0;
    computerScore = 0;
    round = 0;
}

//check current round
function roundCheck(){
    round++;
    gameRound.textContent = `Round ${round}`;
}