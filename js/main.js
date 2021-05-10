// don't display the next pages
document.querySelector('#intro__area').style.display='block'
document.querySelector('#rule__area').style.display='none'
document.querySelector('#game__area').style.display='none'
document.querySelector('#player__area').style.display='none'

//starting page
function toCreatePlayers(){
    document.querySelector('#intro__area').style.display='none'
    document.querySelector('#rule__area').style.display='none'
    document.querySelector('#game__area').style.display='none'
    document.querySelector('#player__area').style.display='block'
}

function toRules(){
    document.querySelector('#intro__area').style.display='none'
    document.querySelector('#rule__area').style.display='block'
    document.querySelector('#game__area').style.display='none'
    document.querySelector('#player__area').style.display='none'
}

function toGame(){
    document.querySelector('#intro__area').style.display='none'
    document.querySelector('#rule__area').style.display='none'
    document.querySelector('#game__area').style.display='flex'
    document.querySelector('#player__area').style.display='none'
}

document.querySelector('#create__player').addEventListener('click',toCreatePlayers)
document.querySelector('#to__rules').addEventListener('click',toRules)
document.querySelector('#to__game').addEventListener('click',toGame)


//get name input and display on game screen
function getInputValues(){
    document.getElementById('player1__name').innerHTML = document.getElementById('p1name').value
    document.getElementById('player2__name').innerHTML = document.getElementById('p2name').value
}
getInputValues()

let score1 = document.getElementById('score1')
let score2 = document.getElementById('score2')


let state = {
    currentScore: [0, 0],
    status: false
}

score1.innerHTML = state.currentScore[0]
score2.innerHTML = state.currentScore[1]

function startGame() {
    let timeLeft = 30
    let timerID = setInterval(countdown, 1000)
    function countdown(){
        if (timeLeft === -1){
            clearTimeout(timerID)
            document.querySelector('#start__game').innerHTML = `Game Over`
        } else {
            document.querySelector('#start__game').innerHTML = `${timeLeft}s`
            timeLeft--
        }
    }
    state.currentScore[0] = 0
    state.currentScore[1] = 0
    document.getElementById("red1").style.visibility = 'hidden'
    document.getElementById("red2").style.visibility = 'hidden'
    document.getElementById("green1").style.visibility = 'hidden'
    document.getElementById("green2").style.visibility = 'hidden'
    document.getElementById("blue1").style.visibility = 'hidden'
    document.getElementById("blue2").style.visibility = 'hidden'
    generateImg1()
    generateImg2()
    countdown()
}

function generateImg1() {
    let randomImgP1 = Math.floor(Math.random() * 3) + 1
    console.log(randomImgP1)
    if (randomImgP1 === 1) {
        document.getElementById("red1").style.visibility = 'visible'
        // document.querySelector('#red1').style.display = 'flex'
        document.addEventListener('keyup', function (e) {
            if (e.code === 'KeyQ') {
                console.log("Player1 pressed red")
                document.getElementById("red1").style.visibility = 'hidden'
                return generateImg1()
                return state.currentScore[0]++
            }
        })
    } else if (randomImgP1 === 2) {
        document.getElementById("green1").style.visibility = 'visible'
        // document.querySelector('#green1').style.display = 'flex'
        document.addEventListener('keyup', function (e) {
            if (e.code === 'KeyW') {
                console.log("Player1 pressed green")
                document.getElementById("green1").style.visibility = 'hidden'
                return generateImg1()
                return state.currentScore[0]++
            }
        })
    } else if (randomImgP1 === 3) {
        document.getElementById("blue1").style.visibility = 'visible'
        // document.querySelector('#blue1').style.display = 'flex'
        document.addEventListener('keyup', function (e) {
            if (e.code === 'KeyE') {
                console.log("Player1 pressed blue")
                document.getElementById("blue1").style.visibility = 'hidden'
                return generateImg1()
                return state.currentScore[0]++
            }
        })
    }
    console.log(`Player1 scored ${state.currentScore[0]}`)
}

function generateImg2() {
    let randomImgP2 = Math.floor(Math.random() * 3) + 1
    console.log(randomImgP2)
    if (randomImgP2 === 1) {
        document.getElementById("red2").style.visibility = 'visible'
        // document.querySelector('#red2').style.display = 'flex'
        document.addEventListener('keyup', function (f) {
            if (f.code === 'ArrowLeft') {
                console.log("Player2 pressed red")
                document.getElementById("red2").style.visibility = 'hidden'
                return generateImg2()
                return state.currentScore[1]++
            }
        })
    } else if (randomImgP2 === 2) {
        document.getElementById("green2").style.visibility = 'visible'
        // document.querySelector('#green2').style.display = 'flex'
        document.addEventListener('keyup', function (f) {
            if (f.code === 'ArrowUp') {
                console.log("Player2 pressed green")
                document.getElementById("green2").style.visibility = 'hidden'
                return generateImg2()
                return state.currentScore[1]++
            }
        })
    } else if (randomImgP2 === 3) {
        document.getElementById("blue2").style.visibility = 'visible'
        // document.querySelector('#blue2').style.display = 'flex'
        document.addEventListener('keyup', function (f) {
            if (f.code === 'ArrowRight') {
                console.log("Player2 pressed blue")
                document.getElementById("blue2").style.visibility = 'hidden'
                return generateImg2()
                return state.currentScore[1]++
            }
        })
    }
    console.log(`Player2 scored ${state.currentScore[1]}`)
}




document.querySelector('#start__game').addEventListener('click',startGame)






