const userScoreDisplay = document.getElementById('userscore');
const computerScoreDisplay = document.getElementById('cscore');
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const choices = document.querySelectorAll('button');
let userWin = 0;
let compWin = 0;
let userChoice;
let computerChoice;
let response;

function getComputerChoice()
{
    let comp = ["rock", "paper" , "scissor"];
    computerChoice = comp[Math.floor(Math.random()*comp.length)];
    computerChoiceDisplay.innerHTML = computerChoice
}

    choices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    getComputerChoice();
    play();
  }))

function play()
{
    if((userChoice === "rock" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "scissor") || (userChoice === "scissor" && computerChoice === "rock"))
    {
        compWin++
        result = (" You lose! " + computerChoice + " beat " + userChoice);
        computerScoreDisplay.innerHTML = compWin;
    }
    else if (userChoice === computerChoice)
    {
        result = ("A draw! You both have " + userChoice);
    }

    else if ((computerChoice === "rock" && userChoice === "paper") || (computerChoice === "paper" && userChoice === "scissor") || (computerChoice=== "scissor" && userChoice === "rock"))
    {
        userWin++;
        result = ("You win! " + userChoice + " beat " + computerChoice);
        userScoreDisplay.innerHTML = userWin;
    }
    resultDisplay.innerHTML = result;
}

// if(userWin==5)
// {
//     al;
    
// }
