// https://masai-api-mocker.herokuapp.com/auth/register


function help(x){
    return document.getElementById(x)
}

async function login (event){
    event.preventDefault();
    let user_data = {
        password: help("password").value,
        username: help("username").value,
    };
    user_data = JSON.stringify(user_data);

    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
        method: "POST",
        body: user_data,
        // mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

    let data = await res.json();
    
    
    let username = help("username").value;
    getUserdetails(username, data.token);

    console.log("token",data.token)
    console.log("data",data)
}

let getUserdetails = async (username, token)=>{
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,
    {   
        mode: "no-cors",
        headers: {
            Authorization: `Bearer ${token}`
        },
      }
    );
    let data = await res.json();
    console.log("user data: ", data);
}
// login()