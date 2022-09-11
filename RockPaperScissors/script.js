const perResult = document.querySelector('.perResult');
const perResultDetail = document.querySelector('.perResultDetail')
const pScore = document.querySelector('.playerScore');
const cScore = document.querySelector('.compScore');
const showResult = document.querySelector('.showResult');
const finalResult = document.querySelector('.finalResult');
const actualContent = document.querySelector('.content');

var compChoice = {Value: ""};
var compChoiceInt;
var playerChoiceInt;
var playerChoice;
var playerScore = 0;
var compScore = 0;

const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissor = document.querySelector('.scissor');


function computerPlay(compChoice){
    let choiceNum = Math.floor(Math.random() * 3);
    if (choiceNum == 0){
        compChoice.Value = "rock";
    }
    else if (choiceNum == 1){
        compChoice.Value = "paper";
    }
    else if(choiceNum == 2){
        compChoice.Value = "scissors";
    }
    console.log(choiceNum);
    return choiceNum;
}

function playRound(playerChoiceInt, compChoiceInt, compChoice, playerChoice){
    /* 0 == rock
       1 == paper
       2 == scissor
     */
    let win_array = [[0, 2, 1], 
                     [1, 0, 2], 
                     [2, 1, 0]];
    let result = win_array[playerChoiceInt][compChoiceInt];
    if (result == 0){
        finalResult.textContent = 'Its a tie!';
        finalResult.classList.add('tie');
        finalResult.classList.remove('lose', 'won')
        perResultDetail.innerHTML =`You chose <b>${playerChoice}</b> and The computer chose <b>${compChoice.Value}</b>`;
        console.log(`Its a tie! You chose ${playerChoice} and The computer chose ${compChoice.Value}`);
    }
    else if (result == 1){
        finalResult.textContent = 'You won!';
        finalResult.classList.add('won');
        finalResult.classList.remove('lose', 'tie')
        perResultDetail.innerHTML = `You chose <b>${playerChoice}</b> and The computer chose <b>${compChoice.Value}</b>`;

        console.log(`You won! You chose ${playerChoice} and The computer chose ${compChoice.Value}`);
        playerScore+=1;
    }
    else if (result == 2){
        finalResult.textContent = 'You lost!';
        finalResult.classList.add('lose')
        finalResult.classList.remove('won', 'tie');
        perResultDetail.innerHTML = `You chose <b>${playerChoice}</b> and The computer chose <b>${compChoice.Value}</b>`;
        console.log(`You lost! You chose ${playerChoice} and The computer chose ${compChoice.Value}`);
        compScore+=1;
    }
}

function getPlayerChoice(e){
    playerChoice = e.target.className;
    const startMethod = document.querySelector('.startMethod');
    startMethod.style.display = 'none';

    if (e.target.className == "rock"){
            playerChoiceInt = 0;
        }
        else if (e.target.className == "paper"){
            playerChoiceInt = 1;
        }
        else if (e.target.className == "scissors")
        {
            playerChoiceInt = 2;
        }
        compChoiceInt = computerPlay(compChoice);
        playRound(playerChoiceInt, compChoiceInt, compChoice, playerChoice);
    
pScore.textContent = playerScore;
cScore.textContent = compScore;

}

btnRock.addEventListener('click',getPlayerChoice);
btnPaper.addEventListener('click', getPlayerChoice);
btnScissor.addEventListener('click', getPlayerChoice);

finalWinner();