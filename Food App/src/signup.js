import {nav,slides,get,create,getValue,footer,categories,append1} from "../Components/foodnav.js";
import "../Styles/style.css";

// --------------------Navbar Here--------------
get("nav").innerHTML = nav();

// --------------------Footer Here--------------
// get("footer").innerHTML = footer();

let sreachbar = get("search-bar")
let login = get("login-signup")
sreachbar.style.display = "none"
window.addEventListener("load", ()=>{
    
    login.style.display = "none"
})

// https://masai-api-mocker.herokuapp.com/auth/register


let register = async (e) => {
    e.preventDefault();

    let form_data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      username: document.getElementById("username").value,
      mobile: document.getElementById("mobile").value,
      description: document.getElementById("description").value,
    };

    form_data = JSON.stringify(form_data);

    let res = await fetch(
      "https://masai-api-mocker.herokuapp.com/auth/register",
      {
        method: "POST",
        body: form_data,
        // mode: "no-cors"
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await res.json();
    console.log("massage",data);
    if(data.error === false){
        // alert(``)
        window.location.href = "login.html"
    }

  };

  document.getElementById("submit").addEventListener("click", register); 