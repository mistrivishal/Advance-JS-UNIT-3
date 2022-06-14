//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.


var scope = [{
    GlobalScope: " 1. Gobal Scope : Any variable that’s not inside any function or block (a pair of curly braces), is inside the global scope.", 
    GlobalScope1: " 2. The variables in global scope can be accessed from anywhere in the javaScript Program",
    LocalScope: "3. Local Scope or Function Scope: Variables declared inside a function is inside the local scope. They can only be accessed from within that function, that means they can’t be accessed from the outside code.",
    BlockScope: "4. Block Scope : let and const variables, they are not like 'var' variables, they can be scoped to the  curly braces. That means, they can’t be accessed from outside that pair of curly braces"  ,
    video: "JS Works.mp4",
}]

var hoisting = [{
                    Delclaration: " 1. Delclaration : JavaScript declare or interpret the variables,function before the actual execution of the code i.e. it checks for all the variable present in the program gives the memory to the varibale",
                    Assignment: " 2. Assignment : After dlcaring the memory to the variables JS assign the actual values given to the varibles bfore the execution",
                    Execution: " 3. Execution : Atfer above two-steps JavaSript program gets executed in the scope and gives the output required",
                    video: "JS Works.mp4",
               }]

var constructor = [{
                    constructorF: " 1. Sometimes we need a 'blueprint' for creating many objects of the same 'type'. so for that purpose we use 'Constructor function'",
                    this: " 2. 'this' key word is use to create the constructor function which is always point to the object/owner object",
                    this2: " 3. in this case function is owner of 'this'",
                    video: "JS Works.mp4",
                  }]

// var hoistingdata = localStorage.setItem("hoisting",hoisting)
// var constructordata = localStorage.setItem("constructor",constructor)

document.querySelector("#scope").addEventListener("click",showscope)



function showscope(){
    localStorage.setItem("scope",JSON.stringify(scope));
    localStorage.setItem("hoisting",JSON.stringify(hoisting));    
    localStorage.setItem("constructor",JSON.stringify(constructor));
    
    // console.log("inside")

    if (scope1.style.display === "none") {
        scope1.style.display = "block";
      } else {
        scope1.style.display = "none";
        document.querySelector(".video").pause()
      }
}
var show = JSON.parse(localStorage.getItem("scope"))
var scope1 = document.querySelector("#scopeinfo")

show.map( function(elem){
    var p1 = document.createElement("p")
    p1.innerText = elem.GlobalScope
    var p4 = document.createElement("p")
    p4.innerText = elem.GlobalScope1
    var p2 = document.createElement("p")
    p2.innerText = elem.LocalScope
    var p3 = document.createElement("p")
    p3.innerText = elem.BlockScope
    var video = document.createElement("video")
    video.src = elem.video
    video.setAttribute("class","video")
    video.setAttribute("data-preload","auto")
    video.setAttribute("data-mute","mute")
    video.setAttribute("controls","controls")
    video.setAttribute("onclick","this.paused ? this.play() : this.pause()")

    scope1.append(p1,p4,p2,p3,video)
})



document.querySelector("#hoisting").addEventListener("click",showhoisting)



function showhoisting(){

    // console.log("inside")

    if (hoisting1.style.display === "none") {
        hoisting1.style.display = "block";
      } else {
        hoisting1.style.display = "none";
        document.querySelector(".video").pause()
      }
}

var show2 = JSON.parse(localStorage.getItem("hoisting"))
var hoisting1 = document.querySelector("#hoistinginfo")

show2.map( function(elem){
    var p1 = document.createElement("p")
    p1.innerText = elem.Delclaration
    var p2 = document.createElement("p")
    p2.innerText = elem.Assignment
    var p3 = document.createElement("p")
    p3.innerText = elem.Execution
    var video = document.createElement("video")
    video.src = elem.video
    video.setAttribute("class","video")
    video.setAttribute("data-preload","auto")
    video.setAttribute("data-mute","mute")
    video.setAttribute("controls","controls")
    video.setAttribute("onclick","this.paused ? this.play() : this.pause()")

    hoisting1.append(p1,p2,p3,video)
})



document.querySelector("#constructorFunctions").addEventListener("click",showconstructorFunctions)



function showconstructorFunctions(){
    // console.log("inside")

    if (constructor1.style.display === "none") {
        constructor1.style.display = "block";
      } else {
        constructor1.style.display = "none";
        document.querySelector(".video").pause()
      }
}

var show3 = JSON.parse(localStorage.getItem("constructor"))
var constructor1 = document.querySelector("#constructorinfo")

show3.map( function(elem){
    var p1 = document.createElement("p")
    p1.innerText = elem.constructorF
    var p2 = document.createElement("p")
    p2.innerText = elem.this
    var p3 = document.createElement("p")
    p3.innerText = elem.this2
    var video = document.createElement("video")
    video.src = elem.video
    video.setAttribute("class","video")
    video.setAttribute("data-preload","auto")
    video.setAttribute("data-mute","mute")
    video.setAttribute("controls","controls")
    video.setAttribute("onclick","this.paused ? this.play() : this.pause()")
    
    constructor1.append(p1,p2,p3,video)
})