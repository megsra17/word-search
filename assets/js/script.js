//select element from the dom 
var startBtn = document.querySelector('.start-button');
var wordBlanksEl = document.querySelector('.word-blanks');

var words = ['birthday', 'javascript', 'object', 'function', 'variable', 'localstorage', 'eventlister', 'timeout'];
var word 
//socre variable
//timeleft variable

function renderChars(){
    var str = ''
    for(var i = 0; i < word.length; i++){
        //if right 
            //push charcter into our str
        //else 
            //addh an _ into str
       str += '_ '
       

    }
    //set textContent of wordBlanksEl to be str
    wordBlanksEl.textContent = str.trim();
}

function startRound(){
    var randomIndex = Math.floor(Math.random() * words.length);
    word = words[randomIndex];
    renderChars()
    
    //get random words from word array  
}

startBtn.addEventListener('click', startRound)
    
