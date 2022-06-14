import navbar from "../Components/navbar.js";

function help(x){
    return document.getElementById(x)
}

function help2(x){
    return document.createElement(x)
}

help("navbar").innerHTML = navbar();


// const getData = async ()=>{
//     try{
//         const res = await fetch("https://fakestoreapi.com/products/category/jewelery") 
//         const data = await res.json()
//         console.log(data)
//         append(data)
//     }catch(err){
//         console.log(err)
//     }
// }
// getData()

// const append = (data)=>{
//     let container = help("jewelery")

//     data.forEach(({title , image}) => {
//         let p = help2("p");
//         p.innerText = title;

//         let img = help2("img");
//         img.src = image

//         container.append(img,p)
//     });
// }

const url = 'https://fakestoreapi.com/products/category/jewelery'
let container = help('jewelery')

import { getData , append } from "./fetch.js";

getData(url).then((res)=>{
    append(res, container)
})