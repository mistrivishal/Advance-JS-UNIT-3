// Store the wallet amount to your local storage with key "amount"

// let amnt = JSON.parse(localStorage.getItem("amount")) || [];

// let total ;

function addToWallet(){
    let input = document.getElementById("amount").value;

    if(JSON.parse(localStorage.getItem("amount")) === null){
        localStorage.setItem("amount",JSON.stringify(input))
    }
    else{
        let total = Number(JSON.parse(localStorage.getItem("amount")));
        total += Number(input)
        localStorage.setItem("amount",JSON.stringify(total))
    }
    // localStorage.clear()
    append()
}

function append(){
    if(JSON.parse(localStorage.getItem("amount")) === null){
        document.getElementById("wallet").innerText = 0;
    }
    else{
        document.getElementById("wallet").innerText = null;
        document.getElementById("wallet").innerText = (JSON.parse(localStorage.getItem("amount")));
    }
    
}
append()