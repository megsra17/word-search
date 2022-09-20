//select element from the dom 
var startBtn = document.querySelector('.start-button');
var wordBlanksEl = document.querySelector('.word-blanks');


var validChar = 'abcdefghijklmnopqrstuvwxyz'
var words = ['birthday', 'javascript', 'object', 'function', 'variable', 'localstorage', 'eventlister', 'timeout'];
var word ;
var guessChar = [];
//socre variable
//timeleft variable

function handleKeyUp(event){
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
            //push charcter into our str
        }else{
            //addh an _ into str
        }
            
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
    
document.addEventListener('keyup', handleKeyUp)