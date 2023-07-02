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
    updateDivScore();
    results.innerHTML = `human picked <span class="resbro">${humanElement}</span> and computer picked <span class="resbro">${computerElement}</span>`;
}


const elements = ['rock','paper','scissors'];

let humanElement,computerElement;
let humanScore = 0,computerScore = 0;
let rock = document.getElementById('rock');
console.log(rock)
rock.addEventListener("click",()=>{
    if(humanScore<5 && computerScore<5){
    console.log("rock clicked")
    humanElement = "rock";
    computerElement = elements[Math.floor(Math.random()*3)];
    console.log(humanElement,computerElement)
    results.textContent=winner();
    updateScore(winner());
    }
    else{
        updateDivScore();
        humanScore>computerScore?results.innerHTML="Winner is human <br>New Game":results.innerHTML="Winner is Computer <br>New Game";
        humanScore = 0,computerScore=0;
    }

})
paper.addEventListener("click",()=>{
    if(humanScore<5 && computerScore<5){
    console.log("rock clicked")
    humanElement = "paper";
    computerElement = elements[Math.floor(Math.random()*3)];
    console.log(humanElement,computerElement)
    results.textContent=winner();
    updateScore(winner());
    }
    else{
        updateDivScore();
        humanScore>computerScore?results.innerHTML="Winner is human <br>New Game":results.innerHTML="Winner is Computer <br>New Game";
        humanScore = 0,computerScore=0;
    }
})
scissors.addEventListener("click",()=>{
    if(humanScore<5 && computerScore<5){
    console.log("rock clicked")
    humanElement = "scissors";
    computerElement = elements[Math.floor(Math.random()*3)];
    console.log(humanElement,computerElement)
    results.textContent=winner();
    updateScore(winner());
    }
    else{
        updateDivScore();
        humanScore>computerScore?results.innerHTML="Winner is human <br>New Game":results.innerHTML="Winner is Computer <br>New Game";
        humanScore = 0,computerScore=0;
    }
})

function updateDivScore(){
    hoomanRes.textContent=humanScore;
    computerRes.textContent=computerScore;
}