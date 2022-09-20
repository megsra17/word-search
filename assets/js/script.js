//select element from the dom 
var startBtn = document.querySelector('.start-button');
var wordBlanksEl = document.querySelector('.word-blanks');
var scoreEl =document.querySelector('.score')
var timerCount = document.querySelector('.timer-count')


var validChar = 'abcdefghijklmnopqrstuvwxyz'
var words = ['birthday', 'javascript', 'object', 'function', 'variable', 'localstorage', 'eventlister', 'timeout'];
var word ;
var guessChar = [];
var score = 0;
var timeleft = 10
var intervalId 

function startCountDown(){
    clearInterval(intervalId)
    intervalId = setInterval(function(){
        timeleft --
        timerCount.textContent = timeleft
        if (timeleft === 0){
            clearInterval(intervalId)
            wordBlanksEl.innerText = "Game over! Your score is " + score;
        }
            // stop game
    }, 1000)
}


function checkWord(){
    //compare word and wordblanks text content
    var wordDom =wordBlanksEl.textContent.split(' ').join('');
    if (word === wordDom){
        score ++
        scoreEl.textContent = score;
        startRound();
    }
}

function handleKeyDown(event){
    console.log(event);
    //validate the key
    if (validChar.includes(event.key)){
        //keep track of the character that was guessed
        guessChar.push(event.key)
        //rerender the word
        renderChars()
    }
}

function renderChars(){
    var str = ''
    for(var i = 0; i < word.length; i++){
        var letter = word[i];
        if(guessChar.includes(letter) ){
            str += letter
        }else{
            str += '_ '
        }       
    }
    wordBlanksEl.textContent = str.trim();
    checkWord();
}

function startRound(){
    guessChar = [];
    var randomIndex = Math.floor(Math.random() * words.length);
    word = words[randomIndex];
    renderChars()
    startCountDown()
    
    //get random words from word array  
}

startBtn.addEventListener('click', startRound)
    
document.addEventListener('keydown', handleKeyDown)