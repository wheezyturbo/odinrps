/* rps script v1.0 */

const start_btn = document.getElementsByClassName('start-btn')[0];
console.log(start_btn);

start_btn.addEventListener('click',()=>{
    document.getElementById('content').style.display="block"
    start_btn.style.display="none"
})

const elements = ['rock','paper','scissors'];

let humanElement,computerElement;
let rock = document.getElementById('rock');
console.log(rock)
rock.addEventListener("click",()=>{
    console.log("rock clicked")
    humanElement = "rock";
    computerElement = elements[Math.floor(Math.random()*3)];
    console.log(humanElement,computerElement)
})
paper.addEventListener("click",()=>{
    console.log("rock clicked")
    humanElement = "paper";
    computerElement = elements[Math.floor(Math.random()*3)];
    console.log(humanElement,computerElement)
})
scissors.addEventListener("click",()=>{
    console.log("rock clicked")
    humanElement = "scissors";
    computerElement = elements[Math.floor(Math.random()*3)];
    console.log(humanElement,computerElement)
})