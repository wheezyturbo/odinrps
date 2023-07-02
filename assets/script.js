/* rps script v1.0 */

const start_btn = document.getElementsByClassName('start-btn')[0];
console.log(start_btn);

start_btn.addEventListener('click',()=>{
    document.getElementById('content').style.display="block"
    start_btn.style.display="none"
})

let winner = ()=>{
    if(humanElement==computerElement){
        return "Draw"
    }
    else if(humanElement == 'rock'){
        if(computerElement == 'paper')return "Computer";
        else return "Human";
    }
    else if(humanElement=='paper'){
        if(computerElement=='scissors')return "Computer";
        else return "Human";
    }
    else{
        if(computerElement=='rock')return "Computer";
        else return "Human";
    }
}

const updateScore =(winner)=>{
    if(winner=='Draw');
    else if(winner=='Computer'){
        computerScore++;
    }
    else humanScore++;
    hoomanRes.textContent=humanScore;
    computerRes.textContent=computerScore;
    results.innerHTML = `human picked <span class="resbro">${humanElement}</span> and computer picked <span class="resbro">${computerElement}</span>`;
}

const elements = ['rock','paper','scissors'];

let humanElement,computerElement;
let humanScore = 0,computerScore = 0;
let rock = document.getElementById('rock');
console.log(rock)
while(humanScore <=5 && computerScore<=5){
    mechanics();
}

function mechanics(){
    rock.addEventListener("click",()=>{
        console.log("rock clicked")
        humanElement = "rock";
        computerElement = elements[Math.floor(Math.random()*3)];
        console.log(humanElement,computerElement)
        results.textContent=winner();
        updateScore(winner());
    
    })
    paper.addEventListener("click",()=>{
        console.log("rock clicked")
        humanElement = "paper";
        computerElement = elements[Math.floor(Math.random()*3)];
        console.log(humanElement,computerElement)
        results.textContent=winner();
        updateScore(winner());
    })
    scissors.addEventListener("click",()=>{
        console.log("rock clicked")
        humanElement = "scissors";
        computerElement = elements[Math.floor(Math.random()*3)];
        console.log(humanElement,computerElement)
        results.textContent=winner();
        updateScore(winner());
    })
}