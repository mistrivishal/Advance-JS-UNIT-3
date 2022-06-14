// Titles: https://omdbapi.com/?s=avengers&page=1&apikey=c2daac06
// details: https://www.omdbapi.com/?i=tt3896198&apikey=c2daac06

const movieSearch = document.getElementById('movie-search');
const searchList = document.getElementById('list');
const result = document.getElementById('result');


// load movies from API
function loadMovies(searchTitle){
    const URL = `https://omdbapi.com/?s=${searchTitle}&page=1&apikey=c2daac06`;
    fetch(URL)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        if(res.Response == "True") showMovie(res.Search);
        // console.log(res.Search)
    })
    .catch(function(err){
        return err
    })
    
}

function findMovies(){
    let searchTitle = (movieSearch.value).trim();
    if(searchTitle.length > 0){
        searchList.classList.remove('hide-list');
        loadMovies(searchTitle);
    } else {
        searchList.classList.add('hide-list');
    }
}

function showMovie(movies){
    // console.log("showMovie:",movies.length)
    searchList.innerHTML = "";
    for(let idx = 0; idx < movies.length; idx++){
        let movieListItem = document.createElement('div');
        movieListItem.dataset.id = movies[idx].imdbID; // setting movie id in  data-id
        movieListItem.classList.add('list-item');
        if(movies[idx].Poster != "N/A")
            moviePoster = movies[idx].Poster;
        else 
            moviePoster = "image_not_found.png";

        movieListItem.innerHTML = `
        <div class = "search-item-thumbnail">
            <img src = "${moviePoster}">
        </div>
        <div class = "search-item-info">
            <h3>${movies[idx].Title}</h3>
            <p>${movies[idx].Year}</p>
        </div>
        `;
        searchList.append(movieListItem);
    }
    loadMovieDetails();
}

function loadMovieDetails(){
    const searchListMovies = searchList.querySelectorAll('.list-item');
    searchListMovies.forEach(function(movie) {
        // console.log("movies:",movie)
        movie.addEventListener('click', function() {
            // console.log(movie.dataset.id);
            searchList.classList.add('hide-list');
            movieSearch.value = "";
            fetch(`https://www.omdbapi.com/?i=${movie.dataset.id}&apikey=c2daac06`)
            .then(function(res){
                return res.json()
            }).then(function(res){
                console.log("loadMovieDetails",res)
                displayMovieDetails(res);
            })
            .catch(function(err){
                // console.log(err)
                return err
            })            
        });
    });
}

function displayMovieDetails(details){
    document.querySelector("#movies").innerHTML = null;
    document.querySelector("#sort").innerHTML = null;
    result.innerHTML =
    `<div class="title">
    <div class="name">
        <h1 class = "movie-title">${details.Title}</h1>
        <p class = "year">${details.Year} • <span class="runtime">${details.Runtime}</span></p>
    </div>
    <div>
        <h2 class = "recom"></h2>
    </div>
    <div class="rate">
        <div class="imdbRating">
            <p>IMDb Rating</p>
            <p><span>⭐  ${details.imdbRating}</span>/10</p>
            <p>${details.imdbVotes} votes</p>
        </div>
        <div class="yourRate">
            <p>Your Rating</p>
            <p><span>✰</span> Rate</p>
        </div>
    </div>
</div>
<div class="details">
    <div class = "movie-poster">
        <img src = "${(details.Poster != "N/A") ? details.Poster : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png"}" alt = "">
    </div>
    <div class = "movie-info">
        <p class = "genre"><b>Genre:</b> <span>${details.Genre}</span></p>
        <p class = "released">Released: ${details.Released}</p>
        <p class = "plot"><b>Plot:</b> <br> ${details.Plot}</p>
        <p class = "director"><b>Director:</b> ${details.Director}</p>
        <p class = "writer"><b>Writer:</b> ${details.Writer}</p>
        <p class = "actors"><b>Actors: </b><span>${details.Actors}</span></p>
        <p class = "language"><b>Language:</b> ${details.Language}</p>
        <p class = "awards"><b><i class = "fas fa-award"></i></b> ${details.Awards}</p>
    </div>
</div>`

    if(details.imdbRating>8.5){
        h2 = document.querySelector(".recom")
        h2.innerText = "✅ Masai_Movie.Search Recommened"
        console.log(movieDetails.imdbRating)
    }
}


window.addEventListener('click', (event) => {
    if(event.target.className != "list"){
        searchList.classList.add('hide-list');
    }
});


const url = `https://api.themoviedb.org/3/search/movie?api_key=401ee4240eeef2d5a1879ac1669677bb&language=en-US&page=1&include_adult=false&query=the`;
// https://omdbapi.com/?s=type&apikey=c2daac06;
fetch(url)
.then(function(res){
    return res.json()
})
.then(function(res){
    // console.log(res.results)
    ShowData(res.results)
})
.catch(function(err){
    return err
})
let movies = document.querySelector("#movies");
function ShowData(data){
    document.querySelector("#movies").innerHTML = null;
    data.map(function (elem){
        let box = document.createElement("div");

        let name = document.createElement("h2");
        name.innerText = elem.original_title;

        let date = document.createElement("p");
        date.innerText = `${elem.release_date}`;

        let img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/original${elem.poster_path}`;

        let rating = document.createElement("p");
        rating.innerText = `⭐ ${elem.vote_average}/10`;

        let box1 = document.createElement("div");
        box1.style.display = "flex"
        box1.style.justifyContent = "space-between"
        box1.style.padding = "0px 10px"

        box1.append(date,rating)

        box.append(img,name,box1)

        movies.append(box)
    })

    
    
    btn1.addEventListener("click",function(){
        data.sort(function (a, b) {
        return a.vote_average - b.vote_average;
        });
        ShowData(data);
    })
    
    
    btn2.addEventListener("click",function(){
        data.sort(function (a, b) {
        return b.vote_average - a.vote_average;
        });
        ShowData(data);
    })

    
}

let sort = document.querySelector("#sort")
let btn1 = document.createElement("button")
btn1.innerText = "Low to High"
let btn2 = document.createElement("button")
btn2.innerText = "High to Low"
let p = document.createElement("p")
p.innerText = "Sort by Rating : "
sort.append(p,btn1,btn2)

