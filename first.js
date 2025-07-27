let userScore=0;
let computerScore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const computerScorePara= document.querySelector("#computer-score");

const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    msg,innerText="game was draw. play again!"
    msg.style.backgroundColor="#000000";
}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore
        msg,innerText="you win!"
        msg.style.backgroundColor="green";
    }else{
        computerScore++;
        computerScorePara.innerText=computerScore;
        msg,innerText="you loose!"
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
console.log("user choice=", userChoice);
const computerChoice=genComputerChoice();
console.log("computer choice=", computerChoice);

if(userChoice===computerChoice){
drawGame();
}else{
    let userWn=true;
    if(userChoice === "rock"){
        userWin=computerChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        userWin=computerChoice==="scissors"?false:true;
    }else{
        userWin=computerChoice==="rock"?false:true;
    }
    showWinner(userWin);
}
};

choices.forEach((choice)=> {
    choice.addEventListener("click", () => {
        const userChoice =choice.getAttribute("id")
// console.log("choice was clicked",userChoice);
playGame(userChoice);
    });
});



