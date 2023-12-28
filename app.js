// variable declaration
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

// function starts
let userChoice = '';
let randomNumber = '';

buttons.forEach((button) =>
    button.addEventListener('click', (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;

        matchScript();
        getResult();
    })
);

const matchScript = () => {
    randomNumber = Math.floor(Math.random() * buttons.length + 1);
    if (randomNumber === 1) {
        computerChoice = 'Rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'Book';
    }
    if (randomNumber === 3) {
        computerChoice = 'Scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
};

function getResult() {
    let resultShow;
    if (computerChoice === userChoice) {
        resultShow = 'You are won!';
    }
    if (computerChoice !== userChoice) {
        resultShow = 'You are lose!';
    }
    result.innerHTML = resultShow;
}
