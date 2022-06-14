document.querySelector("#roll").addEventListener("click",rollthedice)
var winner = document.querySelector("#winner")

function rollthedice(){
    
    var dice1 = Math.floor((Math.random()*6)+ 1);
    var dice2 = Math.floor((Math.random()*6)+ 1);
    var dice3 = Math.floor((Math.random()*6)+ 1);

    let m1 = document.querySelector("#member-1")
    m1.innerHTML = dice1;
    let m2 = document.querySelector("#member-2")
    m2.innerHTML = dice2;
    let m3 = document.querySelector("#member-3")
    m3.innerHTML = dice3;

    if(dice1 > dice2 && dice1 > dice3){
        winner.innerHTML = "Member A wins"
        m1.style.backgroundColor = "green"
        if(dice2<dice3){
            m2.style.backgroundColor = "red"
            m3.style.backgroundColor = "yellow"
        }
        else if(dice2>dice3){
            m2.style.backgroundColor = "yellow"
            m3.style.backgroundColor = "red"
        }
        else if(dice2==dice3){
            m2.style.backgroundColor = "blue"
            m3.style.backgroundColor = "blue"
        }
    }
    else if(dice1 < dice2 && dice2 > dice3){
        winner.innerHTML = "Member B wins"
        m2.style.backgroundColor = "green"
        if(dice1<dice3){
            m1.style.backgroundColor = "red"
            m3.style.backgroundColor = "yellow"
        }
        else if(dice1>dice3){
            m1.style.backgroundColor = "yellow"
            m3.style.backgroundColor = "red"
        }
        else if(dice1==dice3){
            m1.style.backgroundColor = "blue"
            m3.style.backgroundColor = "blue"
        }
    }
    else if(dice1 < dice3 && dice2 < dice3){
        winner.innerHTML = "Member C wins"
        m3.style.backgroundColor = "green"
        if(dice1<dice2){
            m1.style.backgroundColor = "red"
            m2.style.backgroundColor = "yellow"
        }
        else if(dice1>dice2){
            m1.style.backgroundColor = "yellow"
            m2.style.backgroundColor = "red"
        }
        else if(dice1==dice2){
            m1.style.backgroundColor = "blue"
            m2.style.backgroundColor = "blue"
        }
    }
    else if(dice1 == dice3 && dice2 < dice3){
        winner.innerHTML = "Tie between member A and Member C"
        m1.style.backgroundColor = "blue"
        m3.style.backgroundColor = "blue"
        m2.style.backgroundColor = "red"
    }
    else if(dice1 == dice2 && dice2 > dice3){
        winner.innerHTML = "Tie between member A and Member B"
        m1.style.backgroundColor = "blue"
        m3.style.backgroundColor = "red"
        m2.style.backgroundColor = "blue"
    }
    else if(dice3 == dice2 && dice2 > dice1){
        winner.innerHTML = "Tie between member B and Member C"
        m1.style.backgroundColor = "red"
        m3.style.backgroundColor = "blue"
        m2.style.backgroundColor = "blue"
    }
    else if(dice3 == dice2 && dice2 == dice1){
        winner.innerHTML = "Its a Tie"
        m1.style.backgroundColor = "blue"
        m3.style.backgroundColor = "blue"
        m2.style.backgroundColor = "blue"
    }
}