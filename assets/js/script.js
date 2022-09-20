//select element from the dom 
var startBtn = document.querySelector('.start-button');
var wordBlanksEl = document.querySelector('.word-blanks');
var scoreEl =document.querySelector('.score')


var validChar = 'abcdefghijklmnopqrstuvwxyz'
var words = ['birthday', 'javascript', 'object', 'function', 'variable', 'localstorage', 'eventlister', 'timeout'];
var word ;
var guessChar = [];
var score = 0;

//timeleft variable


function checkWord(){
    //compare word and wordblanks text content
    var wordDom =wordBlanksEl.textContent.split(' ').join('');
    if (word === wordDom){
        score ++
        scoreEl.textContent = score;
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
    
    //get random words from word array  
}

startBtn.addEventListener('click', startRound)
    
document.addEventListener('keydown', handleKeyDown)