const item = JSON.parse(localStorage.getItem("items")) || []
const cart = document.getElementById("cart");
const cart_total = document.getElementById("cart_total");

// console.log(item)

let cartTotal = item.reduce(function(sum,el){
    return sum + +(el.price)
},0)

cart_total.innerHTML = cartTotal

item.map(function(el,i){
    let box = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.image

    let name = document.createElement("h3");
    name.innerText = el.name

    let price = document.createElement("p");
    price.innerText = el.price

    let remove = document.createElement("button");
    remove.innerText = "Remove Item"
    remove.setAttribute("id","remove")
    remove.addEventListener("click",function (){
        removefromCart(el,i)
    })

    box.append(img,name,price,remove)

    cart.append(box)
})

function removefromCart(el,i){
    item.splice(i,1)
    localStorage.setItem("items",JSON.stringify(item))
    window.location.reload()
}