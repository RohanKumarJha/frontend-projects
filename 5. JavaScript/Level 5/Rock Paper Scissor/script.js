let finalResult = ``;
document.querySelector('.para').innerText = finalResult;

let randomVal = Math.round(Math.random()*3);
let compChoice = ``;
if(randomVal == 0) {
    compChoice = `Rock`;
} else if(randomVal == 1) {
    compChoice = `Paper`;
} else {
    compChoice = `Scissor`;
}