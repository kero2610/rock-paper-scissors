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

*/

let userInput = parseInt(prompt('0 = Rock, 1 = Paper, 2 = Scissors : ', ''));
let computerChoice = Math.floor(Math.random() * 3);
// 0 = Rock, 1 = Paper, 2 = Scissors
console.log(userInput);
console.log(computerChoice);

// userInput = 0(Rock)
if ( userInput === 0 && computerChoice === 0){
    console.log('A tie');
}
else if (userInput === 0 && computerChoice === 1){
    console.log('You lose!');
}
else if (userInput === 0 && computerChoice === 2){
    console.log('You win!');
}

//userInput = 1(Paper)
else if (userInput === 1 && computerChoice === 0){
    console.log('You win!');
}
else if (userInput === 1 && computerChoice === 1){
    console.log('A tie');
}
else if (userInput === 1 && computerChoice === 2){
    console.log('You lose!');
}

//userInput = 2(Scissors)
else if (userInput === 2 && computerChoice === 0){
    console.log('You lose!');
}
else if (userInput === 2 && computerChoice === 1){
    console.log('You win!');
}
else if (userInput === 2 && computerChoice === 2){
    console.log('A tie');
}