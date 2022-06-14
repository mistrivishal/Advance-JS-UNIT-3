// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

function append(){
    if(JSON.parse(localStorage.getItem("amount")) === null){
        document.getElementById("wallet").innerText = 0;
    }
    else{
        document.getElementById("wallet").innerText = null;
        document.getElementById("wallet").innerText = (JSON.parse(localStorage.getItem("amount")));
    }
    
}
append();

function help(x){
    return document.getElementById(x)
}

function help2(x){
    return document.createElement(x)
}

let movie = JSON.parse(localStorage.getItem("movie"))

let container = help("movie")

movie.map((el)=>{
    console.log("element",el)
    let box = help2("div");
    box.className = "movie_tab";

    let img = help2("img");
    img.className = "poster";
    img.src = el.Poster;

    let title = help2("h2");
    title.className = "title";
    title.innerText = el.Title;

    box.append(title,img)

    container.append(box)
}) 



function confirm(){
    let seat = help("number_of_seats").value
    Number(seat)

    let bal = JSON.parse(localStorage.getItem("amount"))
    Number(bal)

    bookingAmt = (seat*100)


    if(bookingAmt > bal){
        alert("Insufficient Balance!")
    }
    else{
        bal -= Number(bookingAmt)
        localStorage.setItem("amount",JSON.stringify(bal))
        alert("Booking successful!")
    }
    // localStorage.clear()
    append()
}