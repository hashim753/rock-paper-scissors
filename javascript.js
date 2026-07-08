function getComputerChoice(){
    let words = ["Rock","Paper","Scissors"];
    let randomIndex = Math.floor(Math.random() * words.length);
    let randomWord = words[randomIndex];
    return randomWord.toLowerCase();
}
function getHumanChoice(){
    let choice=prompt("Rock, Paper or Scissors :");
    return choice.toLowerCase();
}
function playRound(human,computer){
    console.log(`Human    : ${human}`);
    console.log(`Computer : ${computer}`);
    if(human === "rock" && computer === "paper"){
        computerScore+=1;
        console.log("You Lose! Paper beats Rock.");
    }
    else if(human === "rock" && computer === "scissors"){
        humanScore+=1;
        console.log("You Win! Rock beats Scissors.");
    }
    else if(human === "paper" && computer === "scissors"){
        computerScore+=1;
        console.log("You Lose! Scissors beats paper.");
    }
    else if(human === "paper" && computer === "rock"){
        humanScore+=1;
        console.log("You Win! Paper beats Rock.");
    }
    else if(human === "scissors" && computer === "rock"){
        computerScore+=1;
        console.log("You Lose! Rock beats Scissors.");
    }
    else if(human === "scissors" && computer === "paper"){
        humanScore+=1;
        console.log("You Win! Scissors beats Paper.");
    }
    else{
        console.log("Draw");
    }  
}
function playGame(){
    for(let i=0;i<5;i++){

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
}

let humanScore=0;
let computerScore=0;

playGame();

console.log("Final Score:");
console.log(`Human    : ${humanScore}`);
console.log(`Computer : ${computerScore}`);
