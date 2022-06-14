import {nav,slides,get,create,getValue,footer,categories,append1} from "../Components/foodnav.js";


// --------------------Navbar Here--------------
get("nav").innerHTML = nav();

// --------------------Footer Here--------------
// get("footer").innerHTML = footer();

let sreachbar = get("search-bar")
let logi = get("login-signup")
logi.style.display = "none"
window.addEventListener("load", ()=>{
    sreachbar.style.display = "none"
})

let login = async () => {
  event.preventDefault()
  let user_data = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  user_data = JSON.stringify(user_data);

  let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
    method: "POST",
    body: user_data,

    headers: {
      "Content-Type": "application/json",
    },
  });
  // console.log(res)
  let data = await res.json();

  let username = document.getElementById('username').value;
  getUserDetail(username, data.token,data.error);
  console.log("edjfcdnm,ncklsan",data);
  if(data.error === false){
    alert(`Login Successful, Welcome ${username}..!`)
    let user = get("login-signup")
    get("login-signup").style.display = "grid" 
    let img = create("img");
    img.src = "./images/user.png";
    user.innerHTML = null;
    let name = create("h4");
    name.style.textTransform = "uppercase"
    name.style.letterSpacing = "1px"
    name.innerHTML = `Welcome ${username} !`;
    user.append(img,name);
    user.style.display = "flex";
    window.location.href = "index.html"
    // user.style.gap = "20px"
  }
};

document.getElementById("submit").addEventListener("click", login);

let getUserDetail = async (username, token, error) => {
    // console.log("here");
  let res = await fetch(
    `https://masai-api-mocker.herokuapp.com/user/${username}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  let data = await res.json();
  // console.log("user data: ", data);
  localStorage.setItem("userData",JSON.stringify(data))
};