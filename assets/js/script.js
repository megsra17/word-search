//select element from the dom 
var startBtn = document.querySelector('.start-button');
var wordBlanksEl = document.querySelector('.word-blanks');

var words = ['birthday', 'javascript', 'object', 'function', 'variable', 'localstorage', 'eventlister', 'timeout'];
var word 
//socre variable
//timeleft variable

function renderChars(){
//word-blanks would reset _ for each letter of the new word
}

function startRound(){
    var randomIndex = Math.floor(Math.random() * words.length);
    word = words[randomIndex];
    renderChars()
    
    //get random words from word array  
}

startBtn.addEventListener('click', startRound)
    
