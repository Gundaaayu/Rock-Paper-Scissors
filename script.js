
let computerChoice=[{choice:'rock',value:'1'},{choice:'paper',value:'2'},{choice:'scissor',value:'3'}]
let result;
let plresult;

function getComputerChoice(){
     result=computerChoice[Math.floor(Math.random()*computerChoice.length)];
    return result;

}

function playerChoice(){
    plresult=prompt("Rock,Paper or Scissor ?");
    return plresult;
}


function finalResult(cmp,per){
    if(cmp===per){
        console.log("same")
    }else{
        console.log("not same")
    }

}



function game(){
    for(var i=1;i<=5;i++){
        if(i<=5){
        getComputerChoice();
        console.log(result.choice);
        playerChoice();
        console.log(plresult)
        finalResult(result.choice,plresult);
        }else{
            console.log("GAME OVER")
        }
    }
}

game();
// playerChoice();
// getComputerChoice();
// finalResult(result,plresult);