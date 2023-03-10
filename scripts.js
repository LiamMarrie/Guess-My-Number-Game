'use strict';

const rndNum = Math.floor(Math.random() * 20 + 1);// Random number from 1-20 
let score = 20;
let highScore = 0;

const message = function(message) {
    document.querySelector('.message').textContent = message; 
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(guess === rndNum){
        message(`🎊 Correct Number!`) // change text to inform user guess is correct
        document.querySelector('.number').textContent = rndNum;// replace ? with correct number if guess is correct
        document.querySelector('body').style.backgroundColor = '#60b347'//change background color to green if guess is correct

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = score;
        }
    }
    else if(!guess){
        message(`⛔ No Number!`)// change text to inform user that they must input a number
    }
    else if(guess != rndNum){
        if(score >= 1){
            message(guess > rndNum ? '📈 Guess is too high!' : '📉 Guess is too low!');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            message('💥You lost the game!'); // when score reaches zero, message informs user that they lost the game
            document.querySelector('body').style.backgroundColor = '#ff1a1a'// when score reaches zero background color changes to red to indicate that user has lost the game
        }
    }

});
