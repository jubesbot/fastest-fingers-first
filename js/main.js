let coinSound = document.getElementById('coin__audio')
coinSound.volume=0.2

let gameSound = document.getElementById('game__audio')

let whackSound= document.getElementById('whack__audio')

let wrongSound = document.getElementById('wrong__audio')

let state = {
    currentScore: [0, 0]
}

let ready = 5
let timeLeft = 30

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
    gameSound.play()
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

    state.currentScore[0] = 0
    state.currentScore[1] = 0
    document.getElementById('score1').innerHTML = 'POINTS: ' + state.currentScore[0].toString()
    document.getElementById('score2').innerHTML = 'POINTS: ' + state.currentScore[1].toString()
}

document.querySelector('#create__player').addEventListener('click',toCreatePlayers)
document.querySelector('#to__rules').addEventListener('click',toRules)
document.querySelector('#to__game').addEventListener('click',toGame)

//get name input and display on game screen
function getInputValues(){
    document.getElementById('player1__name').innerHTML = document.getElementById('p1name').value
    document.getElementById('player2__name').innerHTML = document.getElementById('p2name').value

    if (document.getElementById('p1name').value === ''){
        document.getElementById('player1__name').innerHTML = 'Player 1'
    }

    if (document.getElementById('p2name').value === ''){
        document.getElementById('player2__name').innerHTML = 'Player 2'
    }
}
getInputValues()

function startGame() {
    console.log('Hello')

    document.addEventListener('keyup', function (e) {
        if (e.code === 'KeyQ') {
            console.log('Pressed Q')
            if (document.getElementById('red1').getAttribute('data-current-1') === 'true') {
                console.log('Red1!')
                coinSound.play()
                document.getElementById('red1').style.visibility = 'hidden'
                document.getElementById('red1').setAttribute('data-current-1', 'false')
                state.currentScore[0]++
                document.getElementById('score1').innerHTML = 'POINTS: ' + state.currentScore[0].toString()
            }else{
                wrongSound.play()
                state.currentScore[0]--
                document.getElementById('score1').innerHTML = 'POINTS: ' + state.currentScore[0].toString()
            }
        } else if (e.code === 'KeyW') {
            console.log('Pressed W')
            if (document.getElementById('green1').getAttribute('data-current-1') === 'true') {
                console.log('Green1!')
                coinSound.play()
                document.getElementById('green1').style.visibility = 'hidden'
                document.getElementById('green1').setAttribute('data-current-1', 'false')
                state.currentScore[0]++
                document.getElementById('score1').innerHTML = 'POINTS: ' + state.currentScore[0].toString()
            }   else{
                wrongSound.play()
                state.currentScore[0]--
                document.getElementById('score1').innerHTML = 'POINTS: ' + state.currentScore[0].toString()
            }
        } else if (e.code === 'KeyE') {
            console.log('Pressed E')
            if (document.getElementById('blue1').getAttribute('data-current-1') === 'true') {
                console.log('Blue1')
                coinSound.play()
                document.getElementById('blue1').style.visibility = 'hidden'
                document.getElementById('blue1').setAttribute('data-current-1', 'false')
                state.currentScore[0]++
                document.getElementById('score1').innerHTML = 'POINTS: ' + state.currentScore[0].toString()
            }   else{
                wrongSound.play()
                state.currentScore[0]--
                document.getElementById('score1').innerHTML = 'POINTS: ' + state.currentScore[0].toString()
            }
        } else if (e.code === 'KeyR') {
            console.log('Pressed R')
            if (document.getElementById('bonus').getAttribute('data-current-3') === 'true'){
                document.getElementById('winner').setAttribute('data-current-4','true')
                document.getElementById('bonus').style.display = 'none'
                document.getElementById('score1').innerHTML = 'POINTS: ' + (state.currentScore[0]+=3).toString()
                declareWinner()
            }   else{
                state.currentScore[0]--
                document.getElementById('score1').innerHTML = 'POINTS: ' + state.currentScore[0].toString()
            }
        }
    })

    document.addEventListener('keyup', function (f) {
        if (f.code === 'ArrowLeft') {
            console.log('Pressed Left')
            if (document.getElementById('red2').getAttribute('data-current-2') === 'true') {
                console.log('Red2!')
                whackSound.play()
                document.getElementById("red2").style.visibility = 'hidden'
                document.getElementById('red2').setAttribute('data-current-2','false')
                state.currentScore[1]++
                document.getElementById('score2').innerHTML = 'POINTS: ' + state.currentScore[1].toString()
            }   else{
                wrongSound.play()
                state.currentScore[1]--
                document.getElementById('score2').innerHTML = 'POINTS: ' + state.currentScore[1].toString()
            }
        }
        else if (f.code === 'ArrowUp'){
            console.log('Pressed Up')
            if (document.getElementById('green2').getAttribute('data-current-2') === 'true') {
                console.log('Green2!')
                whackSound.play()
                document.getElementById("green2").style.visibility = 'hidden'
                document.getElementById('green2').setAttribute('data-current-2','false')
                state.currentScore[1]++
                document.getElementById('score2').innerHTML = 'POINTS: ' + state.currentScore[1].toString()
            }   else{
                wrongSound.play()
                state.currentScore[1]--
                document.getElementById('score2').innerHTML = 'POINTS: ' + state.currentScore[1].toString()
            }
        }
        else if (f.code === 'ArrowRight'){
            console.log('Pressed Right')
            if (document.getElementById('blue2').getAttribute('data-current-2') === 'true') {
                console.log('Blue2!')
                whackSound.play()
                document.getElementById("blue2").style.visibility = 'hidden'
                document.getElementById('blue2').setAttribute('data-current-2','false')
                state.currentScore[1]++
                document.getElementById('score2').innerHTML = 'POINTS: ' + state.currentScore[1].toString()
            }   else{
                wrongSound.play()
                state.currentScore[1]--
                document.getElementById('score2').innerHTML = 'POINTS: ' + state.currentScore[1].toString()
            }
        } else if (f.code === 'ArrowDown') {
            console.log('Pressed Down')
            if (document.getElementById('bonus').getAttribute('data-current-3') === 'true') {
                document.getElementById('winner').setAttribute('data-current-4', 'true')
                document.getElementById('bonus').style.display = 'none'
                document.getElementById('score2').innerHTML = 'POINTS: ' + (state.currentScore[1]+=3).toString()
                declareWinner()
            }   else{
                state.currentScore[1]--
                document.getElementById('score2').innerHTML = 'POINTS: ' + state.currentScore[1].toString()
            }
        }
    })

    state.currentScore[0] = 0
    state.currentScore[1] = 0

    document.getElementById("red1").style.visibility = 'hidden'
    document.getElementById("red2").style.visibility = 'hidden'
    document.getElementById("green1").style.visibility = 'hidden'
    document.getElementById("green2").style.visibility = 'hidden'
    document.getElementById("blue1").style.visibility = 'hidden'
    document.getElementById("blue2").style.visibility = 'hidden'


    let readyID = setInterval(()=> {
        // 5-second ready countdown
        if (ready === 0) {
            clearInterval(readyID)
            console.log('start')

            // game timer starts after the ready countdown is completed
            // show the first image
            // image stays until correct button is pressed
            // check for correct button
            let timerID = setInterval(()=> {
                if (timeLeft === -1) {
                    document.querySelector('#start__game').innerHTML = 'Game Over'
                    clearInterval(timerID)
                    console.log('stop')
                    bonus()

                } else {
                    document.querySelector('#start__game').innerHTML = `${timeLeft}`
                    timeLeft--
                    console.log(timeLeft)
                    console.log('countdown is working')
                    console.log(document.querySelector("img[data-current-1= 'true']"))
                    if (!(document.querySelector("img[data-current-1 = 'true']"))) {
                        showImage1()
                    }
                    if (!(document.querySelector("img[data-current-2 = 'true']"))) {
                        showImage2()
                    }
                }
            },1000)

        } else {
            document.querySelector('#start__game').innerHTML = `${ready}`
            ready--
        }
    },1000)
}

document.querySelector('#start__game').addEventListener('click',startGame)

function showImage1(){
    let randomImgP1 = Math.floor(Math.random() * 3)
    // console.log(randomImgP1)
    let p1Arr = ['red1', 'green1','blue1']
    document.getElementById(p1Arr[randomImgP1]).style.visibility = 'visible'
    document.getElementById(p1Arr[randomImgP1]).setAttribute('data-current-1','true')
}

function showImage2(){
    let randomImgP2 = Math.floor(Math.random() * 3)
    // console.log(randomImgP2)
    let p2Arr = ['red2', 'green2','blue2']
    document.getElementById(p2Arr[randomImgP2]).style.visibility = 'visible'
    document.getElementById(p2Arr[randomImgP2]).setAttribute('data-current-2','true')
}



let modal1 = document.getElementById('bonus')
let modal2 = document.getElementById('winner')

function bonus() {
    modal1.style.display = 'block'
    document.getElementById('bonus').setAttribute('data-current-3','true')
    document.getElementById('winner').setAttribute('data-current-4','false')
}

function declareWinner() {
    modal2.style.display = 'block'
    if (state.currentScore[0] > state.currentScore[1]) {
        if (document.getElementById('p1name').value === ''){
            document.getElementById('declare').innerHTML = 'Player 1 wins'
            document.getElementById('you__win').play()
        } else {
            document.getElementById('declare').innerHTML = document.getElementById('p1name').value + ' wins!'
            document.getElementById('you__win').play()
        }
    } else if (state.currentScore[0] < state.currentScore[1]) {
        if (document.getElementById('p2name').value === ''){
            document.getElementById('declare').innerHTML = 'Player 2 wins'
            document.getElementById('you__win').play()
        } else {
            document.getElementById('declare').innerHTML = document.getElementById('p2name').value + ' wins!'
            document.getElementById('you__win').play()
        }
    } else {
        document.getElementById('declare').innerHTML = 'It\'s a draw!'
        document.getElementById('draw__audio').play()
    }
}

let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal2.style.display = "none";
    location.reload()
}



