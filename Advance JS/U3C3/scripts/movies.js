// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

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

let id;

const searchMovies = async ()=>{
    try{
        const title = help("search").value;

        const url = `https://www.omdbapi.com/?s=${title}&apikey=c2daac06`

        const res = await fetch(url);

        const {Search} = await res.json()
        console.log(Search)
        container.innerHTML = null;
        appendmovies(Search)
    }
    catch(err){
        console.log(err)
    }

}

let container = help("movies")

let movie = []

function appendmovies(Search){
    Search.map((el)=>{
        console.log("element",el)
        let box = help2("div");
        box.className = "movie_tab";

        let img = help2("img");
        img.className = "poster";
        img.src = el.Poster;

        let title = help2("h3");
        title.className = "title";
        title.innerText = el.Title;

        let button = help2("button")
        button.className = "book_now";
        button.innerText = "Book Now";
        button.addEventListener("click", ()=>{

            movie.push(el)

            localStorage.setItem("movie",JSON.stringify(movie))

            window.location.href = "checkout.html"
        })

        box.append(img,title,button)

        container.append(box)
    }) 
}


function debouncing(searchMovies,delay){

    if(id){
        clearTimeout(id)
    }
    id = setTimeout(()=>{
        searchMovies()
    },delay)
}