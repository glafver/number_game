const getRandomNumber = function() {
    return Math.ceil(Math.random() * 10);
};
const numberForm = document.querySelector('#numberForm');
const gameResult = document.querySelector('#gameResult');
const textOutput = gameResult.appendChild(document.createElement('p'));
const guessesOutput = gameResult.appendChild(document.createElement('p'));
const highOutput = gameResult.appendChild(document.createElement('p'));
const choice = document.querySelector('.choice');
const playYes = document.querySelector('#playYes');
const playNo = document.querySelector('#playNo');
const enterNum = document.querySelector('.enterNum');
const container = document.querySelector('.container');

let numberToGuess = getRandomNumber();
let highscore = false;
let guesses = 0;
// console.log(`numberToGuess: ${numberToGuess}`);

numberForm.addEventListener('submit', e => {
        e.preventDefault();

        const guess = Number(e.target.newNumber.value);
        // console.log("Guessed number:", guess, typeof guess);
        e.target.newNumber.value = "";
        if (isNaN(guess)) {
            textOutput.innerText = `You have to enter a number`
        } else {
            if (guess == 0 || guess > 10) {
                textOutput.innerText = `Enter a number between 1 and 10!`
            } else {
                textOutput.innerText = `Your number is ${guess}`
                guesses++;
                guessesOutput.innerText = `You have tried ${guesses} times`

                if (guess === numberToGuess) {
                    if (highscore) {
                        if (guesses < highscore) {
                            highOutput.innerText += `YAY NEW HIGHSCORE!`;
                            highscore = guesses;
                        } else {
                            highOutput.innerText += `Sorry, no new highscore. Your current highscore is ${highscore}.`;
                        }
                    } else {
                        highscore = guesses;
                        highOutput.innerText += `YAY NEW HIGHSCORE!`;
                    }
                    guessesOutput.innerText = `Great success! You guessed the correct answer in ${guesses} guesses 🥳`
                    choice.style.display = 'flex';
                    enterNum.style.display = 'none';


                } else if (guess < numberToGuess) {
                    textOutput.innerText += ` is too low.`

                } else if (guess > numberToGuess) {
                    textOutput.innerText += ` is too high.`
                }
            }
        }


    }

)

playYes.addEventListener('click', () => {
    gameResult.classList.remove('again');
    gameResult.style.display = 'block';
    enterNum.style.display = 'block';
    numberToGuess = getRandomNumber();
    // console.log(`numberToGuess: ${numberToGuess}`);
    guesses = 0;
    choice.style.display = 'none';
    guessesOutput.innerText = '';
    highOutput.innerText = '';
    textOutput.innerText = '';
})

playNo.addEventListener('click', () => {
    gameResult.classList.add('again');
    guessesOutput.innerText = '';
    highOutput.innerText = '';
    textOutput.innerText = '';
    gameResult.innerText = '';
    enterNum.style.display = 'none';
    highscore = false;
})