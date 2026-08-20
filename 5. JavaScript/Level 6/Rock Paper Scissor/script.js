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

        function userWon(compChoice, userChoice) {
            let finalResult = `Comp choose ${compChoice}, User choose ${userChoice}; So User Won.`;
            document.querySelector('.para').innerText = finalResult;
        }

        function userLoose(compChoice, userChoice) {
            let finalResult = `Comp choose ${compChoice}, User choose ${userChoice}; So User Loose.`;
            document.querySelector('.para').innerText = finalResult;
        }

        function nooneWon(compChoice, userChoice) {
            let finalResult = `Comp choose ${compChoice}, User choose ${userChoice}; So it's a tie.`;
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