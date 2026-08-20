let finalResult = ``;
document.querySelector('.para').innerText = finalResult;

function generateComputerChoice() {
    let randomVal = Math.round(Math.random()*3);
    if(randomVal == 0) {
        return `Rock`;
    } else if(randomVal == 1) {
        return `Paper`;
    } else {
        return `Scissor`;
    }
}

let showResultObj = {
    Won : 0,
    Loose : 0,
    Tie : 0,
};

function userWon(compChoice, userChoice) {
    showResultObj.Won++;
    let finalResult = `User Won. \n Now score is : Won-${showResultObj.Won}, Loose-${showResultObj.Loose}, Tie-${showResultObj.Tie}`;
    document.querySelector('.para').innerText = finalResult;
}

function userLoose(compChoice, userChoice) {
    showResultObj.Loose++;
    let finalResult = `User Loose. \n Now score is : Won-${showResultObj.Won}, Loose-${showResultObj.Loose}, Tie-${showResultObj.Tie}`;
    document.querySelector('.para').innerText = finalResult;
}

function nooneWon(compChoice, userChoice) {
    showResultObj.Tie++;
    let finalResult = `It's a tie. \n Now score is : Won-${showResultObj.Won}, Loose-${showResultObj.Loose}, Tie-${showResultObj.Tie}`;
    document.querySelector('.para').innerText = finalResult;
}

function findWhoWon(compChoice, userChoice) {
    if(compChoice == `Rock`) {
        if(userChoice == `Rock`) {
            nooneWon(compChoice, userChoice);
        } else if(userChoice == `Paper`) {
            userWon(compChoice, userChoice);
        } else {
            userLoose(compChoice, userChoice);
        }
    } 
    else if(compChoice == `Paper`) {
        if(userChoice == `Rock`) {
            userLoose(compChoice, userChoice);
        } else if(userChoice == `Paper`) {
            nooneWon(compChoice, userChoice);
        } else {
            userWon(compChoice, userChoice);
        }
    } 
    else if(compChoice == `Scissor`) {
        if(userChoice == `Rock`) {
            userWon(compChoice, userChoice);
        } else if(userChoice == `Paper`) {
            userLoose(compChoice, userChoice);
        } else {
            nooneWon(compChoice, userChoice);
        }
    }
}