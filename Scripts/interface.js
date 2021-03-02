document.addEventListener('DOMContentLoaded',()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener('click',handleClick);
    })

    let button = document.getElementById("restart");
    button.addEventListener('click',updateSquares);

});

function handleClick(event){
    console.log(event.target);

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){

        setTimeout(()=>{
            if(playerTime == 0){
                alert("Jogador "+ (playerTime + 1) + " ganhou - Símbolo: " + symbols[playerTime]);
            }else{
                alert("Jogador "+ (playerTime + 1) + " ganhou! - Símbolo: " + symbols[playerTime]);
            }  
        },100);

       
    }
    updateSquare(position);
}

function updateSquare(position){
    let squares = document.querySelectorAll(".square");
  /*let square = document.getElementById("position.toString()");*/
    let symbol = board[position];
    squares[position].innerHTML = `<div class='${symbol}'></div>`
 /* square.innerHTML = `<div class='${symbol}'></div>` */
}

function updateSquares(){
    let squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{
        square.innerHTML = `<div class=''></div>`
    })
    restart();
}

