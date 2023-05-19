let userWin = 0;
let compWin = 0;
function getComputerChoice()
{
    let comp = ["rock", "paper" , "scissor"];
    return comp[Math.floor(Math.random()*comp.length)];
}

function play(playerChoice , computerChoice)
{
    if((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissor") || (playerChoice === "scissor" && computerChoice === "rock"))
    {
        console.log(" You lose! " + computerChoice + " beat " + playerChoice);
        compWin++;
    }
    else if (playerChoice === computerChoice)
    {
        console.log("A draw! You both have " + playerChoice);
    }

    else
    {
        console.log("You win! " + playerChoice + " beat " + computerChoice);
        userWin++;
    }
}
