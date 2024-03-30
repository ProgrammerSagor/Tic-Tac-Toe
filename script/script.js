let playerText = document.getElementById('playyerText')
let restartBtn = document.getElementById('restartBtn') 
let boxes = Array.from(document.getElementsByClassName('box'))
let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--wining-block')


const O_TEXT = 'o'
const X_TEXT = 'x'

let currentplayer = X_TEXT

let speces = Array(9).fill(null)


const startGame = ()=> {
    boxes.forEach(box => box.addEventListener('click', boxclicked))

}

function boxclicked(e) {
    const id = e.target.id

    if(!speces[id]){
        speces[id] = currentplayer
        e.target.innerText = currentplayer

        if(playerHaswon() !==false){
            playerText = `${currentplayer} has won!`
            let winning_blocks = playerHaswon();
            
            winning_blocks.map(box => boxes[box].style.backgroundColor=winnerIndicator)
            return
        }

        currentplayer = currentplayer == X_TEXT ? O_TEXT: X_TEXT
    }
}

const winningCombos = [
    [0,1,2,],
    [3,4,5,],
    [6,7,8,],
    [0,4,6,],
    [1,4,7,],
    [2,5,8,],
    [0,4,8,],
    [2,4,6,]
]

function playerHaswon(){
    for (const condition of winningCombos) {
        let [a,b,c] = condition

        if(speces[a] && (speces[a] == speces[b] && speces[a] == [c])) {
            return [a,b,c]
        }
    }
    return false
}







restartBtn.addEventListener('click', restart)
function restart(){
    speces.fill(null)

    boxes.forEach( box => {
        box.innerText = ''
        box.style.backgroundColor=''
    })

    playerText = 'tic tac toe'
    
    currentplayer= X_TEXT
}

startGame()