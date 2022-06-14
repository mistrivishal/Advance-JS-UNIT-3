import {nav,slides,get,create,getValue,footer,categories,append1} from "../Components/foodnav.js";
import "../Styles/style.css";

// --------------------Navbar Here--------------
get("nav").innerHTML = nav();

// --------------------Footer Here--------------
get("footer").innerHTML = footer();

let sreachbar = get("search-bar")
let login = get("login-signup")
login.style.display = "none"
window.addEventListener("load", ()=>{
    sreachbar.style.display = "none"
})

let mealId = JSON.parse(localStorage.getItem("idMeal"))

const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`

async function recipe() {
    try {
        const res = await fetch(`${url} + ${mealId}`);
        const data = await res.json();
        console.log(data.meals[0]);
        append(data.meals[0])
    } catch (err) {
        console.log(err);
    }
}
recipe()



const append = (meal)=>{
    // console.log(meal)
    let Smeal = get("recipe")
    const ingridients = [];
    for(let i=1;i<=20;i++){
       if(meal[`strIngredient${i}`]){
        ingridients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
        // console.log(meal[`strIngredient${i}`]);
       }else{
           break;
       }
    }
    Smeal.innerHTML = `
    <div class="meal">
    <h1>${meal.strMeal}</h1>
    <img src="${meal.strMealThumb}" alt="">
    </div>
    <div class="meal-info">
        ${meal.strCategory ? `<p>Category : ${meal.strCategory}</p>` : ''}
        ${meal.strArea ? `<p>Origin : ${meal.strArea}</p>` : ''}            
    </div>
    <div class="instruction">
        <h2>Instructions:</h2>
        <p>${meal.strInstructions}</p>
        <h2>Ingredients:</h2>
        <ul>
            ${ingridients.map(el => `<li>${el}</li>`).join("")}
        </ul>
    </div>
    <div class="meal-video">
     <p>Find the Youtube video here for the recipe :</p>
     <img src="./images/icons8-youtube-48.png" alt=""> 
     <a href="${meal.strYoutube}" target="_blank">${meal.strYoutube}</a>
    </div>
    `
};


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