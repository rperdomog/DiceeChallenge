

function throwDicee(){
    var random1 = Math.ceil(Math.random() * 6);
    var random2 = Math.ceil(Math.random() * 6);

    document.querySelector(".img1").setAttribute("src",`./images/dice${random1}.png`);
    document.querySelector(".img2").setAttribute("src",`./images/dice${random2}.png`);

    if (random1 > random2){
        document.querySelector(".container h1").innerHTML = "Player 1 wins";
    }
    else if (random1 < random2){
        document.querySelector(".container h1").innerHTML = "Player 2 wins";
    }
    else if (random1 == random2){
        document.querySelector(".container h1").innerHTML = "Draw";
    }
    else{
        document.querySelector(".container h1").innerHTML = "Game over";
    }
}
