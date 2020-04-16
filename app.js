const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('form');
const difficultySelect = document.getElementById('difficulty');
const container = document.querySelector('.container')


let words = [     
    'flaticon',
    'fivers',
    'winners',
    'ultras',
    'finnear',
    'green',
    'greenboys',
    'stadium',
    'soccer',
    'basketball',
    'premier league',
    'ronaldo',
    'messi',
    'barcelona'
]

let score = 0;
let randomWord;
let time = 10;
text.focus()

const startInterval = setInterval(UpdateTime,1000)

function UpdateTime(){
    time--;
    timeEl.innerHTML = time + 's';
    if(time === 0){
        clearInterval(startInterval)
        gameOver()
    }
    
}

function gameOver(){
    endgameEl.innerHTML = `
    <h1>You Lost It My Friend</h1>
    <button onclick="location.reload()">Try Again</button>
    <p>Your score is ${score}</p>
    `;
    endgameEl.style.display = 'flex';

    
}

function MasteryGamer(error){
    const endGame = document.querySelector('.end-game-container');
    const giveit = document.createElement('div');
    giveit.className = 'giveit';
    giveit.appendChild(document.createTextNode(error));
    container.insertBefore(giveit,endGame)

}

function getRandom(){
    return words[Math.floor(Math.random() * words.length)]
}

function addWordToDom(){
    randomWord = getRandom();
    word.innerHTML = randomWord
}
addWordToDom()

function updateScore(){
    score++;
    scoreEl.innerHTML = score
    if(score === 5){
        MasteryGamer('Just Keep Going');

        setTimeout(clear,8000)

        function clear(){
        document.querySelector('.giveit').remove()
    }
    }
}


text.addEventListener('input', (e) => {
    
    const insertedText = e.target.value;
    if(insertedText === randomWord){
        addWordToDom()
        updateScore()
        e.target.value = ''
        time += 2;
    }

    
})


settingsBtn.addEventListener('click',(e) => {
  settings.classList.toggle('hide')
})