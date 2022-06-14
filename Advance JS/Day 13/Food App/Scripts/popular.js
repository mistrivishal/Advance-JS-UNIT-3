import {nav,get,create,getValue,footer} from "../Components/foodnav.js";


// --------------------Navbar Here--------------
get("nav").innerHTML = nav();

// --------------------Footer Here--------------
get("footer").innerHTML = footer();

let sreachbar = get("search-bar")
let login = get("login-signup")
window.addEventListener("load", ()=>{
    sreachbar.style.display = "none"
    login.style.display = "none"
})

let cath1 = document.querySelector(".cat-h1")

const categories = async ()=>{
    try{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category[0]}`) 
        const data = await res.json()
        console.log(data);
        cath1.innerText = `${category[0]} Dishes:`
        append(data)
    }catch(err){
        console.log(err)
    }
}
categories();

let container = get("cat-menu")
const append = ({meals})=>{
    meals.forEach(({strMeal,strMealThumb,idMeal}) => {
        let box  = create("div")
        box.addEventListener('click',  (event)=>{
            // alert('Hi!');
            let ele = [idMeal]
            localStorage.setItem("idMeal",JSON.stringify(ele))
            window.location.href = "recipes.html"
        })

        let img = create("img")
        img.src = strMealThumb;
        
        let category = create("h3");
        category.innerText = strMeal;

        box.append(img,category)

        container.append(box)
    });
}

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