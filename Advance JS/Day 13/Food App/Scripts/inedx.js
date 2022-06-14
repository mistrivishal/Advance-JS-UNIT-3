import {nav,slides,get,create,getValue,footer,categories,append1} from "../Components/foodnav.js";


// --------------------Navbar Here--------------
get("nav").innerHTML = nav();

// --------------------Footer Here--------------
get("footer").innerHTML = footer();

// --------------------Background slide show Here--------------
let img = create("img")
let slide = get("slidshow")
slides(img,slide)

// --------------------Meal Categories Here--------------

const url = "https://www.themealdb.com/api/json/v1/1/categories.php"
let cat = get("meals");

categories(url).then((res)=>{
    // console.log("----------",res)
    append1(res, cat)
})


//-------------------Search Bar----------------------
let searchdish = get("search").addEventListener("input",debounce)
let id;
let list = get("list")
async function searchRec() {
    try {
        list.classList.add("list")
        let search = document.getElementById('search').value.trim();
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const data = await res.json();
        console.log(data);
        append(data)
    } catch (err) {
        console.log(err);
    }
}
function debounce(){
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(function(){
        searchRec()
    },500) 
}

const append = ({meals})=>{
    list.innerHTML = null;
    meals.forEach(({strMealThumb, strMeal, idMeal , strCategory}) => {
        let box  = create("div")
        box.classList.add("search-list")
        box.addEventListener('click',  (event)=>{
            // alert('Hi!');
            let ele = [idMeal]
            localStorage.setItem("idMeal",JSON.stringify(ele))
            window.location.href = "recipes.html"
        })
        let img = create("img")
        img.src = strMealThumb;
        
        let meal = create("p");
        meal.innerText = `${strMeal} - `;

        let cat = create("p");
        cat.innerText = strCategory;
    
        box.append(img,meal,cat)
    
        list.append(box) 
    });
}

window.addEventListener('click', (event) => {
    if(event.target.className != "search"){
        list.classList.add('hide-list');
        get("search").value = null;
    }
    else{
        list.classList.remove('hide-list')
    }
   
});

let userData = JSON.parse(localStorage.getItem("userData"));
if(userData !== null){
    let user = get("login-signup")
    user.innerHTML = null;
    get("login-signup").style.display = "grid" 
    let img = create("img");
    img.src = "./images/user.png";
    console.log(user.children);
    let name = create("h4");
    name.style.textTransform = "uppercase"
    name.style.letterSpacing = "1px"
    name.innerHTML = `Welcome ${userData.username} !`;
    user.append(img,name);
    user.style.display = "flex";
    user.style.cursor = "pointer"
    get("logout").style.display = "block"
    get("logout").addEventListener("click",()=>{
        localStorage.setItem("userData",null)
        window.location.reload()
    })
    // user.style.gap = "20px"
}