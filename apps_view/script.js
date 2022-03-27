const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
//to pickout all the 3 possible buttons
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result


//to grab the buttons
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))
 

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
   
    if (randomNumber === 1){
        computerChoice = 'orange'
    }
    if (randomNumber === 2){
        computerChoice = 'red'
    }
    if (randomNumber === 3){
        computerChoice = 'green'
    }
    computerChoiceDisplay.innerHTML = computerChoice

    function getResult() {
        if (computerChoice === userChoice){
            result = "Draw"
        }
      
    }
    if (computerChoice === 'orange' && userChoice === "red"){
        result = "Win"
    }
    if (computerChoice === 'orange' && userChoice === "green"){
        result = "lose"
    }

    if (computerChoice === 'red' && userChoice === "green"){
        result = "Win"
    }

    if (computerChoice === 'red' && userChoice === "orange"){
        result = "Win"
    }

    if (computerChoice === 'green' && userChoice === "oarange"){
        result = "lose"
    }
    if (computerChoice === 'green' && userChoice === "red"){
        result = "lose"
    }
    resultDisplay.innerHTML = result



}

