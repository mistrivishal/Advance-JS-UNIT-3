const movieSearch = document.getElementById('input');
const search = document.getElementById('search');
const searchList = document.getElementById('list');
const result = document.getElementById('result');
let id;

const searchMovie = async ()=>{

    try{
        const searchTitle = movieSearch.value.trim();

        const URL = `https://omdbapi.com/?&page=1&apikey=c2daac06&s=${searchTitle}`;

        const res = await fetch(URL);
        // console.log(res)
        const data = await res.json()
        console.log(data.Search)
        let searchTitl = (movieSearch.value).trim();
        if(searchTitl.length > 0){
            searchList.classList.remove('hide-list');
            showMovie(data.Search);
            document.getElementById("slidshow").style.display = 'none';
        } else {
            searchList.classList.add('hide-list');
        }
    }
    catch(err){
        console.log(err)
    }
}

function showMovie(movies){
    // console.log("showMovie:",movies.length)
    document.getElementById("slidshow").style.display = 'none';
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
        // console.log("inside")
    }
    loadMovieDetails()
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
    document.getElementById("slidshow").style.display = 'none';
    result.innerHTML =
    `<div class="title">
    <div class="name">
        <h1 class = "movie-title">${details.Title}</h1>
        <p class = "year">${details.Year} • <span class="runtime">${details.Runtime}</span></p>
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
}


const popular = async ()=>{
    try{

        const URL = `https://api.themoviedb.org/3/movie/popular?api_key=401ee4240eeef2d5a1879ac1669677bb&language=en-US&page=1&Results=30`;

        const res = await fetch(URL);
        // console.log(res)
        const pop = await res.json()
        console.log(pop.results)
        appenpop(pop.results)
    }
    catch(err){
        console.log(err)
    }
}
popular()

let popular1 = document.getElementById('popular');
function appenpop(data){
    data.forEach(function(ele){
        // console.log(ele.poster_path)
        let box = document.createElement("div");

        let img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/original${ele.poster_path}`
        img.style.cursor = "pointer"
       
        box.append(img)

        popular1.append(box)
    })
}

function showpopular(){
    window.location.href = "trending.html"
}

const main = async ()=>{
    let data = await searchMovie();
    if(data === undefined){
        return false;
    }
}


function debouncing(func,delay){
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(function(){
        func()
        document.getElementById("slidshow").style.display = 'none';
    },delay)
    
}
window.addEventListener('click', (event) => {
    if(event.target.className != "list"){
        searchList.classList.add('hide-list');
    }
    movieSearch.value = null;
});

document.getElementById('logo').addEventListener('click', (event) => {
    window.location.reload( )
    window.location.href = 'index.html'
});


const image = [
    'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1607/1161607-h-a429a3428191',
    'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4229/1084229-h-10d18a97b0b5',
    'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1511/1161511-h-a103f5d4c916',
    'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5318/1095318-h-a89162a0c1a9',
    'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1341/1091341-h-0c4699c4630e',
    'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9382/1119382-h-18d7afad8c6c',
    'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5210/1165210-h-a72a0a95461e',
]

let slides = document.getElementById("slidshow")

let i = 0;
    // console.log(img_arr)
let img = document.createElement("img");
img.src = "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5318/1095318-h-a89162a0c1a9";

id = setInterval(function(){
    if(i === image.length){
        i = 0;
    }
    slides.innerHTML = null
    img.src = image[i];
    img.style.transition = "10ms";
    // console.log(i)
    slides.append(img);

    i++;
    
},3000) 