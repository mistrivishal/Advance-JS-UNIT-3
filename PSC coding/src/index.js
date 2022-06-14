//https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=stBCbtNzhC8GhtHzrzzzTnNYyBycQ5lXIM7N91JK1gs;

import {nav} from "../components/navbar.js"

import "../styles/index.css"

import "../styles/navbar.css"

let navbar = document.getElementById("navbar")
navbar.innerHTML = nav();


import {append, getData} from "./fetch.js"


let search = (event)=>{
    if(event.key === "Enter"){
        let q = document.getElementById("query").value;
        let container = document.getElementById("container");
        getData(q).then((data)=> {
           console.log(data);
           container.innerHTML = null;
           append(data.results,container)
        });
        document.getElementById("sort").addEventListener("change",sSearch);
        function sSearch(){
            // console.log("hgfdsa",q)
            let b = document.getElementById("sort").value;
            // console.log(b)
            getData(q,b).then((data)=> {
                container.innerHTML = null;
                append(data.results,container)
            });
        }
    }
};

document.getElementById("query").addEventListener("keydown", search)


let category = document.getElementById("category").children;

let orientation = document.getElementById("filter").children;

function cSearch(){
    // console.log(this.id)
    let q = this.id
    getData(q).then((data)=> {
        console.log(data) ;
        container.innerHTML = null;
        append(data.results,container)
    });
    document.getElementById("sort").addEventListener("change",sSearch);
    function sSearch(){
        console.log("hgfdsa",q)
        let b = document.getElementById("sort").value;
        console.log(b)
        getData(q,b).then((data)=> {
            container.innerHTML = null;
            append(data.results,container)
        });
    }
}
function fSearch(){
    // console.log(this.id)
    let q = this.id
    getData(q).then((data)=> {
        console.log(data) ;
        container.innerHTML = null;
        append(data.results,container)
    });
    document.getElementById("sort").addEventListener("change",sSearch);
    function sSearch(){
        console.log("hgfdsa",q)
        let b = document.getElementById("sort").value;
        console.log(b)
        getData(q,b).then((data)=> {
            container.innerHTML = null;
            append(data.results,container)
        });
    }
}
for(let ele of category){
    ele.addEventListener("click", cSearch)
}
for(let ele of orientation){
    ele.addEventListener("click", cSearch)
}

getData("avengers").then((data)=> {
    console.log(data);
    append(data.results,container)
 });
 getData()