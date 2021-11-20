debugger
let i = 0;
let winner = false;
function f(div) {
    if (document.getElementById(div).innerHTML == '') {
        if (i % 2 == 0) {
            document.getElementById(div).innerHTML = '<img src="X.png">';
            i++;
        } else {
            document.getElementById(div).innerHTML = '<img src="O.png">';
            i++;
        }
    }
    win();
    if (i == 9 && winner == false) {
        i = 0;
        return draw()
    }
}
var winindex = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [0, 3, 6],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function win() {
    let div = document.getElementsByClassName("div")
    let board = document.getElementById("board")
    let xpng = document.getElementById("xpng")
    let xWins = document.getElementById("xWins")
    let opng = document.getElementById("opng")
    let oWins = document.getElementById("oWins")
    let winres = document.getElementById("winres")
    let winrest = document.getElementById("winrestext")
    for (let j = 0; j < winindex.length; j++) {
        if (div[winindex[j][0]].innerHTML === '<img src="X.png">' && div[winindex[j][1]].innerHTML === '<img src="X.png">' && div[winindex[j][2]].innerHTML === '<img src="X.png">') {
            winner = true;
            board.style.opacity = '0.5'
            board.style.transition = "1s"
            xpng.style.display = 'block'
            xWins.style.display = 'block'
            winres.style.display = 'block'
            winres.onmouseover = function () {
                winres.style.backgroundColor = 'black'
                winres.style.border = 'solid 5px white'
                winrest.style.color = 'white'
                winres.style.transition = '0.2s'
                winrest.style.transition = '0.2s'
            }
            winres.onmouseleave = function () {
                winres.style.backgroundColor = 'white'
                winres.style.border = 'solid 5px black'
                winrest.style.color = 'black'
                winres.style.transition = '0.2s'
                winrest.style.transition = '0.2s'
            }
            winres.onclick = function () {
                winres.style.display = 'none'
                winrest.style.display = 'block'
                xpng.style.display = 'none'
                xWins.style.display = 'none'
                board.style.opacity = '1'
                return restart()
            }
            function restart() {
                let div = document.getElementsByClassName("div")
                for (let z = 0; z < div.length; z++) {
                    div[z].innerHTML = '';
                    i = 0
                }
            }
        } else if (div[winindex[j][0]].innerHTML === '<img src="O.png">' && div[winindex[j][1]].innerHTML === '<img src="O.png">' && div[winindex[j][2]].innerHTML === '<img src="O.png">') {
            winner = true;
            board.style.opacity = '0.5'
            board.style.transition = "1s"
            opng.style.display = 'block'
            oWins.style.display = 'block'
            winres.style.display = 'block'
            winres.onmouseover = function () {
                winres.style.backgroundColor = 'black'
                winres.style.border = 'solid 5px white'
                winrest.style.color = 'white'
                winres.style.transition = '0.2s'
                winrest.style.transition = '0.2s'
            }
            winres.onmouseleave = function () {
                winres.style.backgroundColor = 'white'
                winres.style.border = 'solid 5px black'
                winrest.style.color = 'black'
                winres.style.transition = '0.2s'
                winrest.style.transition = '0.2s'
            }
            winres.onclick = function () {
                winres.style.display = 'none'
                winrest.style.display = 'block'
                opng.style.display = 'none'
                oWins.style.display = 'none'
                board.style.opacity = '1'
                return restart()
            }
            function restart() {
                let div = document.getElementsByClassName("div")
                for (let z = 0; z < div.length; z++) {
                    div[z].innerHTML = '';
                    i = 0
                }
            }
        } else if (i == 9 && winner == false) {
            i = 0;
            return draw()
        }
    }
}
function draw() {
    let res = document.getElementById("restart")
    let wr = document.getElementById("winres")
    let wrt = document.getElementById("winrestext")
    let draw = document.getElementById("draw")
    let board = document.getElementById('board')
    board.style.opacity = '0.5'
    board.style.transition = '1s'
    draw.style.display = 'block'
    draw.style.transition = '1s'
    res.style.display = 'block'
    res.style.transition = '1s'
    wr.style.transition = '1s'
    wr.style.display = 'block'
    wr.onmouseover = function () {
        wrt.style.color = "white"
        wr.style.backgroundColor = "black"
        wr.style.border = "solid 5px white"
        wr.style.transition = '0.2s'
        wrt.style.transition = '0.2s'
        winres.style.display = 'block'
    }
    wr.onmouseout = function () {
        wrt.style.color = "black"
        wr.style.backgroundColor = "white"
        wr.style.border = "solid 5px black"
        wr.style.transition = '0.2s'
        wrt.style.transition = '0.2s'
    }

    wr.onclick = function () {
        wr.style.display = 'none'
        wrt.style.display = 'block'
        res.style.display = 'none'
        draw.style.display = 'none'
        board.style.opacity = '1'
        return restart()
    }
    function restart() {
        let div = document.getElementsByClassName("div")
        for (let z = 0; z < div.length; z++) {
            div[z].innerHTML = '';
            i = 0
        }
    }
}
