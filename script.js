console.log("WELCOME TO MyTicTac.com")
let turn = "X"
let gameOver = false;

// function to change the turn
function changeTurn(){
    return turn === "X" ? "O" : "X";
}

//function to check for a win
function checkWin(){
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0 , 1 , 2 , 5 , 5 , 0] ,
        [3 , 4 , 5 , 5 , 15 , 0] ,
        [6 , 7 , 8 , 5 , 25 , 0] ,
        [0 , 3 , 6 , -5 , 15 , 90] ,
        [1 , 4 , 7 , 5 , 15 , 90] ,
        [2 , 5 , 8 , 15 , 15 , 90] ,
        [0 , 4 , 8 , 5 , 15 , 45] ,
        [2 , 4 , 6 , 5 , 15 , 135]
    ]

    for(let i = 0 ; i < wins.length ; i++){
        let e = wins[i];
        if(boxtexts[e[0]].innerText === boxtexts[e[1]].innerText && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText)  && boxtexts[e[0]].innerText !== ""){
            gameOver = true;
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " WON \n RESET THE GAME TO PLAY AGAIN ";
            document.querySelector(".line").style.width = "20vw"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    }


}

//GAME LOGIC
let boxes = document.getElementsByClassName("box");
console.log(boxes.length);
for(let i = 0 ; i < boxes.length ; i++){
    let boxtext = boxes[i].querySelector(".boxtext")
    boxes[i].addEventListener("click" , function(e){
        if(gameOver == true){
            document.querySelector(".line").style.width = "0vw"
            let boxtexts = document.querySelectorAll(".boxtext")
            for(let i = 0 ; i < boxtexts.length ; i++){
                boxtexts[i].innerText = "";
            }
            document.getElementsByClassName("info")[0].innerText = "RESET THE GAME TO PLAY AGAIN";
        }
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(gameOver == false){
                document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
            }
        }
    })
}

// setting everything to default if reset is pressed
    reset.addEventListener("click" , function(e){
        let boxtexts = document.querySelectorAll(".boxtext")
        for(let i = 0 ; i < boxtexts.length ; i++){
            boxtexts[i].innerText = "";
        }
        turn= "X";
        gameOver = false;
        document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
        document.querySelector(".line").style.width = "0vw"
    })
