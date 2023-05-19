let userWin = 0;
let compWin = 0;
let str;
function getComputerChoice()
{
    let comp = ["rock", "paper" , "scissor"];
    return comp[Math.floor(Math.random()*comp.length)];
}

function play(playerChoice , computerChoice)
{
    if((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissor") || (playerChoice === "scissor" && computerChoice === "rock"))
    {
        compWin++
        return (" You lose! " + computerChoice + " beat " + playerChoice);
    }
    else if (playerChoice === computerChoice)
    {
        return ("A draw! You both have " + playerChoice);
    }

    else if ((computerChoice === "rock" && playerChoice === "paper") || (computerChoice === "paper" && playerChoice === "scissor") || (computerChoice=== "scissor" && playerChoice === "rock"))
    {
        userWin++;
        return ("You win! " + playerChoice + " beat " + computerChoice);
    }

    else{
        compWin++;
        return ("Invalid hand!. Turn forfeited.!");
    }
}

function game() 
{
    for( let i =1 ; i<=5 ; i++)
    {
      str = prompt("Enter a hand, rock , paper or scissors?");
      console.log(play(str.toLowerCase(), getComputerChoice()));  
    }

    if(userWin > compWin)
    {
        console.log("You won the game!!");
    }
    else if (compWin < userWin)
    {
        console.log("Oh no! You lost the game.");
    }
    else
    {
        console.log("It's a draw!!");
    }
}

game();