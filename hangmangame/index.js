const programminglanguages=[
    "python",
    "sql",
    "java",
    "mongodb",
    "javascript",
    "json",
    "html",
    "css",
    "c",
    "csharp",
    "kotlin",
    "php",
    "ruby"
];
let answer="";
let maxwrong=6;
let mistakes=0;
let guessed=[];
let wordStatus=null;

//calling random words from programminglanguage variable
function randomword(){
    answer=programminglanguages[Math.floor(Math.random()*programminglanguages.length)];
    // alert(answer);
}

function generatebutton(){
    let buttonsHTML='abcdefghijklmnopqrstuvwxyz'.split('').map(letter=>
        `<button 
        class="btn btn-lg btn-primary m-2" 
        id='`+ letter +`'
        onClick="handleGuess('`+ letter +`')"
        >
            `+ letter +`

    </button>
    
    `).join("");
    document.getElementById('keyboard').innerHTML=buttonsHTML;
}



function handleGuess(chosenletter){
    guessed.indexOf(chosenletter) === -1 ? guessed.push(chosenletter) : null;
    document.getElementById(chosenletter).setAttribute('disabled',true);
    if (answer.indexOf(chosenletter)>=0) {
        getGuessedWord();
        checkIfGameWon();
    }
    else if(answer.indexOf(chosenletter)===-1){
        mistakes++;
        updatemistakes();
        checkIfGameLost();
        updatehangmanpic();
    }
}


function updatehangmanpic(){
    document.getElementById('hangmanpic').src='./images/'+mistakes+'.jpg'
}
function updatemistakes(){
    document.getElementById("mistakes").innerHTML=mistakes;
}

function checkIfGameLost(){
    if (mistakes===maxwrong) {
        document.getElementById("wordlight").innerHTML='The answer was : '+answer;
        document.getElementById("keyboard").innerHTML="You Lost!!"
    }
}

function checkIfGameWon(){
    if (wordStatus===answer) {
        document.getElementById("keyboard").innerHTML="You Won!!"
    }
}

function getGuessedWord(){
    wordStatus=answer.split('').map(letter=>(guessed.indexOf(letter) >= 0 ? letter : " _ ")).join("");
    document.getElementById("wordlight").innerHTML=wordStatus;
}
document.getElementById('maxwrong').innerHTML=maxwrong;


function reset(){
    mistakes=0;
    guessed=[];
    document.getElementById("hangmanpic").src="./images/0.jpg";
    randomword();
    getGuessedWord();
    updatemistakes();
    generatebutton();
}

randomword();
generatebutton();
getGuessedWord();