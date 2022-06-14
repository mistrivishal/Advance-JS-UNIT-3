import {nav,slides,get,create,getValue,footer,categories,append1} from "../Components/foodnav.js";


// --------------------Navbar Here--------------
get("nav").innerHTML = nav();

// --------------------Footer Here--------------
// get("footer").innerHTML = footer();

let sreachbar = get("search-bar")
let login = get("login-signup")
window.addEventListener("load", ()=>{
    sreachbar.style.display = "none"
    login.style.display = "none"
})

// https://masai-api-mocker.herokuapp.com/auth/register


let register = async (e) => {
    e.preventDefault();

    let form_data = {
      name: get("name").value,
      email: get("email").value,
      password: get("password").value,
      username: get("username").value,
      mobile: get("mobile").value,
      description: get("description").value,
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
    // console.log("massage",data);
    if(data.error === false){
        alert(`Signup Successfull, Welcome ${get("name").value}..!`)
        window.location.href = "login.html"
    }else{
      alert(`Signup Failed.`)
    }

  };

  document.getElementById("submit").addEventListener("click", register); 