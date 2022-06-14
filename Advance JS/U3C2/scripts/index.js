// Store cart items in local storage with key: "items"

const URL = `https://grocery-masai.herokuapp.com/items`

fetch(URL)
.then(function(res){
    return res.json()
})
.then(function(res){
    console.log(res.data)
    showData(res.data)
})
.catch(function(err){
    console.log(err)
})

const cart = JSON.parse(localStorage.getItem("items")) || []
const item = document.getElementById("items");
const count = document.getElementById("item_count")

function showData(data){
    data.map(function(el,i){
        let box = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.image

        let name = document.createElement("h3");
        name.innerText = el.name

        let price = document.createElement("p");
        price.innerText = el.price

        let addtoCart = document.createElement("button");
        addtoCart.innerText = "Add to cart"
        addtoCart.setAttribute("id","add_to_cart")
        addtoCart.addEventListener("click",function (){
            addCart(el)
        })

        box.append(img,name,price,addtoCart)

        item.append(box)
    })
    count.innerHTML = data.length
}

function addCart(el){
    cart.push(el);
    localStorage.setItem("items",JSON.stringify(cart));
    window.location.reload();
    // localStorage.clear()
}