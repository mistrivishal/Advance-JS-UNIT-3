


var Products1 = JSON.parse(localStorage.getItem("Products")) || []

var count = Products1.length
var totalItems = document.querySelector("h1")
totalItems.innerText = `Items available: ${count}`
totalItems.style.color="teal"
totalItems.style.textAlign="center"

// window.addEventListener("load", function () {
//   showdata(Products1);
// });

  // function showdata(){
if(count!==0){
  document.querySelector(".products").style.display = "grid"
  document.querySelector("i").style.display = "none"
  
  Products1.map(function (elem,index) {

    var box = document.createElement("div");

    var img = document.createElement("img");
    img.src = elem.imageUrL;

    var name = document.createElement("p");
    name.textContent = elem.ProductName;

    var price = document.createElement("p");
    price.innerText = `₹ ${elem.price}`;

    var btn1 = document.createElement("button");
    btn1.innerText = "Remove";
    btn1.setAttribute("Id", "remove")
    btn1.addEventListener("click", function () {
      remove(elem,index);
    });

    
    var btn2 = document.createElement("button");
    btn2.innerText = "Sell";
    btn2.style.backgroundColor = "green"; 
    btn2.value = elem.sold
    // btn2.style.backgroundColor = "green"
    btn2.setAttribute("Id", "sold")
    btn2.addEventListener("click", function () {

        if(btn2.style.backgroundColor == "red"){
            btn2.style.backgroundColor = "green"; 
            btn2.innerText = "Sell";
            btn2.value = false; 
        }
        else{
            btn2.style.backgroundColor = "red";
            btn2.innerText = "Sold"; 
            btn2.value = true;
            // soldout(elem,index)  
        }
    });

    box.append(img, name, price, btn1, btn2);

    document.querySelector(".products").append(box);
  });
// console.log(JSON.parse(localStorage.getItem("Products")))

function remove(elem,index) {
  // console.log(elem);
  Products1.splice(index,1);
  localStorage.setItem("Products", JSON.stringify(Products1));
  window.location.reload()
}
// function soldout(elem,index) {
//   // console.log(elem);
//   Products1.splice(index,1);
//   localStorage.setItem("Products", JSON.stringify(Products1));
//   // count = Products1.length
//   window.location.replace()
// }
}
// if(Products != null || Products!= []){
//   document.querySelector("#products").style.display = "grid"
// }
else{
  // console.log("inside")
  document.querySelector(".products").style.display = "none"

  var h1 = document.querySelector("h1")
  h1.innerText = "It's Empty! , Please Add your Products"

  var a = document.querySelector("a")
  a.innerText = "To add product click here"
  // a.style.cursor = "pointer"
}



