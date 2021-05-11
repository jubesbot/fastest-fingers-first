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


let state = {
    currentScore: [0, 0]
}

let timeLeft = 30

function startGame() {
    console.log('Hello')

    state.currentScore[0] = 0
    state.currentScore[1] = 0

    document.getElementById("red1").style.visibility = 'hidden'
    document.getElementById("red2").style.visibility = 'hidden'
    document.getElementById("green1").style.visibility = 'hidden'
    document.getElementById("green2").style.visibility = 'hidden'
    document.getElementById("blue1").style.visibility = 'hidden'
    document.getElementById("blue2").style.visibility = 'hidden'

    // countdown starts
    // show the first image
    // image stays until correct button is pressed
    // check for correct button
    let timerID = setInterval(()=> {
        if (timeLeft === -1) {
            document.querySelector('#start__game').innerHTML = 'Game Over'
            clearInterval(timerID)
            console.log('stop')
        } else {
            document.querySelector('#start__game').innerHTML = `${timeLeft}s`
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

document.addEventListener('keyup', function (e) {
    if (e.code === 'KeyQ') {
        console.log('Pressed Q')
        if (document.getElementById('red1').getAttribute('data-current-1') === 'true') {
            console.log('Red1!')
            document.getElementById('red1').style.visibility = 'hidden'
            document.getElementById('red1').setAttribute('data-current-1', 'false')
            state.currentScore[0]++
            document.getElementById('score1').innerHTML = 'POINTS: ' + state.currentScore[0].toString()
        }
    } else if (e.code === 'KeyW') {
        console.log('Pressed W')
        if (document.getElementById('green1').getAttribute('data-current-1') === 'true') {
            console.log('Green1!')
            document.getElementById('green1').style.visibility = 'hidden'
            document.getElementById('green1').setAttribute('data-current-1', 'false')
            state.currentScore[0]++
            document.getElementById('score1').innerHTML = 'POINTS: ' + state.currentScore[0].toString()
        }
    } else if (e.code === 'KeyE') {
        console.log('Pressed E')
        if (document.getElementById('blue1').getAttribute('data-current-1') === 'true') {
            console.log('Blue1')
            document.getElementById('blue1').style.visibility = 'hidden'
            document.getElementById('blue1').setAttribute('data-current-1', 'false')
            state.currentScore[0]++
            document.getElementById('score1').innerHTML = 'POINTS: ' + state.currentScore[0].toString()
        }
    }
})

    document.addEventListener('keyup', function (f) {
    if (f.code === 'ArrowLeft') {
        console.log('Pressed Left')
        if (document.getElementById('red2').getAttribute('data-current-2') === 'true') {
            console.log('Red2!')
            document.getElementById("red2").style.visibility = 'hidden'
            document.getElementById('red2').setAttribute('data-current-2','false')
            state.currentScore[1]++
            document.getElementById('score2').innerHTML = 'POINTS: ' + state.currentScore[1].toString()
        }
    }

    else if (f.code === 'ArrowUp'){
        console.log('Pressed Up')
        if (document.getElementById('green2').getAttribute('data-current-2') === 'true') {
            console.log('Green2!')
            document.getElementById("green2").style.visibility = 'hidden'
            document.getElementById('green2').setAttribute('data-current-2','false')
            state.currentScore[1]++
            document.getElementById('score2').innerHTML = 'POINTS: ' + state.currentScore[1].toString()
        }
    }

    else if (f.code === 'ArrowRight'){
        console.log('Pressed Right')
        if (document.getElementById('blue2').getAttribute('data-current-2') === 'true') {
            console.log('Blue2!')
            document.getElementById("blue2").style.visibility = 'hidden'
            document.getElementById('blue2').setAttribute('data-current-2','false')
            state.currentScore[1]++
            document.getElementById('score2').innerHTML = 'POINTS: ' + state.currentScore[1].toString()
        }
    }
})

// function generateImg1() {
//     let randomImgP1 = Math.floor(Math.random() * 3)
//     console.log(randomImgP1)
//
//     switch (randomImgP1) {
//         case 1:
//                 document.getElementById("red1").style.visibility = 'visible'
//                 document.addEventListener('keyup', function (e) {
//                     if (e.code === 'KeyQ') {
//                         console.log("Player1 pressed red")
//                         document.getElementById("red1").style.visibility = 'hidden'
//                         state.currentScore[0]++
//                         document.getElementById('score1').innerHTML = 'POINTS: ' + state.currentScore[0].toString()
//                     }
//                 })
//             break;

        // case 2:
        //         document.getElementById("green1").style.visibility = 'visible'
        //         document.addEventListener('keyup', function (e) {
        //             if (e.code === 'KeyW') {
        //                 console.log("Player1 pressed green")
        //                 document.getElementById("green1").style.visibility = 'hidden'
        //                 state.currentScore[0]++
        //                 document.getElementById('score1').innerHTML = 'POINTS: ' + state.currentScore[0].toString()
        //             }
        //         })
        //     break;
        //
        // case 3:
        //         document.getElementById("blue1").style.visibility = 'visible'
        //         document.addEventListener('keyup', function (e) {
        //             if (e.code === 'KeyE') {
        //                 console.log("Player1 pressed blue")
        //                 document.getElementById("blue1").style.visibility = 'hidden'
        //                 state.currentScore[0]++
        //                 document.getElementById('score1').innerHTML = 'POINTS: ' + state.currentScore[0].toString()
        //             }
        //         })
        //     break;
//     }
//     console.log(`Player1 scored ${state.currentScore[0]}`)
// }

// function generateImg2() {
//     let randomImgP2 = Math.floor(Math.random() * 3) + 1
//     console.log(randomImgP2)
//
//     switch (randomImgP2) {
//         case 1:
//             document.getElementById("red2").style.visibility = 'visible'
//             document.addEventListener('keyup', function (e) {
//                 if (e.code === 'ArrowLeft') {
//                     console.log("Player2 pressed red")
//                     document.getElementById("red2").style.visibility = 'hidden'
//                     state.currentScore[1]++
//                     document.getElementById('score2').innerHTML = 'POINTS: ' + state.currentScore[1].toString()
//                 }
//             })
//             break;
//
//         case 2:
//             document.getElementById("green2").style.visibility = 'visible'
//             document.addEventListener('keyup', function (e) {
//                 if (e.code === 'ArrowUp') {
//                     console.log("Player2 pressed green")
//                     document.getElementById("green2").style.visibility = 'hidden'
//                     state.currentScore[1]++
//                     document.getElementById('score2').innerHTML = 'POINTS: ' + state.currentScore[1].toString()
//                 }
//             })
//             break;
//
//         case 3:
//             document.getElementById("blue2").style.visibility = 'visible'
//             document.addEventListener('keyup', function (e) {
//                 if (e.code === 'ArrowRight') {
//                     console.log("Player2 pressed blue")
//                     document.getElementById("blue2").style.visibility = 'hidden'
//                     state.currentScore[1]++
//                     document.getElementById('score2').innerHTML = 'POINTS: ' + state.currentScore[1].toString()
//                 }
//             })
//             break;
//     }
//     console.log(`Player2 scored ${state.currentScore[1]}`)
// }

// function generateImg1() {
//     let randomImgP1 = Math.floor(Math.random() * 3) + 1
//     console.log(randomImgP1)
//     if (randomImgP1 === 1) {
//         document.getElementById("red1").style.visibility = 'visible'
//         // document.querySelector('#red1').style.display = 'flex'
//         document.addEventListener('keyup', function (e) {
//             if (e.code === 'KeyQ') {
//                 console.log("Player1 pressed red")
//                 document.getElementById("red1").style.visibility = 'hidden'
//                 state.currentScore[0]++
//                 document.getElementById('score1').innerHTML = state.currentScore[0].toString()
//                 generateImg1()
//             }
//         })
//     } else if (randomImgP1 === 2) {
//         document.getElementById("green1").style.visibility = 'visible'
//         // document.querySelector('#green1').style.display = 'flex'
//         document.addEventListener('keyup', function (e) {
//             if (e.code === 'KeyW') {
//                 console.log("Player1 pressed green")
//                 document.getElementById("green1").style.visibility = 'hidden'
//                 state.currentScore[0]++
//                 document.getElementById('score1').innerHTML = state.currentScore[0].toString()
//                 generateImg1()
//             }
//         })
//     } else if (randomImgP1 === 3) {
//         document.getElementById("blue1").style.visibility = 'visible'
//         // document.querySelector('#blue1').style.display = 'flex'
//         document.addEventListener('keyup', function (e) {
//             if (e.code === 'KeyE') {
//                 console.log("Player1 pressed blue")
//                 document.getElementById("blue1").style.visibility = 'hidden'
//                 state.currentScore[0]++
//                 document.getElementById('score1').innerHTML = state.currentScore[0].toString()
//                 generateImg1()
//             }
//         })
//     }
//     console.log(`Player1 scored ${state.currentScore[0]}`)
// }
//
// function generateImg2() {
//     let randomImgP2 = Math.floor(Math.random() * 3) + 1
//     console.log(randomImgP2)
//     if (randomImgP2 === 1) {
//         document.getElementById("red2").style.visibility = 'visible'
//         // document.querySelector('#red2').style.display = 'flex'
//         document.addEventListener('keyup', function (f) {
//             if (f.code === 'ArrowLeft') {
//                 console.log("Player2 pressed red")
//                 document.getElementById("red2").style.visibility = 'hidden'
//                 state.currentScore[1]++
//                 document.getElementById('score2').innerHTML = state.currentScore[1].toString()
//                 generateImg2()
//             }
//         })
//     } else if (randomImgP2 === 2) {
//         document.getElementById("green2").style.visibility = 'visible'
//         // document.querySelector('#green2').style.display = 'flex'
//         document.addEventListener('keyup', function (f) {
//             if (f.code === 'ArrowUp') {
//                 console.log("Player2 pressed green")
//                 document.getElementById("green2").style.visibility = 'hidden'
//                 state.currentScore[1]++
//                 document.getElementById('score2').innerHTML = state.currentScore[1].toString()
//                 generateImg2()
//             }
//         })
//     } else if (randomImgP2 === 3) {
//         document.getElementById("blue2").style.visibility = 'visible'
//         // document.querySelector('#blue2').style.display = 'flex'
//         document.addEventListener('keyup', function (f) {
//             if (f.code === 'ArrowRight') {
//                 console.log("Player2 pressed blue")
//                 document.getElementById("blue2").style.visibility = 'hidden'
//                 state.currentScore[1]++
//                 document.getElementById('score2').innerHTML = state.currentScore[1].toString()
//                 generateImg2()
//             }
//         })
//     }
//     console.log(`Player2 scored ${state.currentScore[1]}`)
// }






