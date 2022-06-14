// https://masai-api-mocker.herokuapp.com/auth/register

function help(x){
    return document.getElementById(x).value
}

function help2(x){
    return document.createElement(x)
}


// help("submit").addEventListener("submit",register)
// console.log("inside")
async function reg(event){
    event.preventDefault(); 
    
    let form_data = {
        name: help("name"),
        email: help("email"),
        password: help("password"),
        username: help("username"),
        mobile: help("number"),
        description: help("description"),
    }
    // console.log(form_data)
    form_data = JSON.stringify(form_data); 

    let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/register',
    {
        method: "POST",
        body: form_data,
        // mode: "no-cors",
        headers:{
            "Content-Type": "application/json"
        },
    });

    let data  = await res.json()
    console.log(data)

}   
// reg()