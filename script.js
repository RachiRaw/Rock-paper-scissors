function getComputerChoice()
{
    let comp = ["rock", "paper" , "scissor"];
    return comp[Math.floor(Math.random()*comp.length)];
}

console.log(getComputerChoice());