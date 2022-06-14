//for grtting products details from local storage 

let product_data = JSON.parse(localStorage.getItem("data"))

let showdata = document.querySelector("#products_data")


product_data.map(function (elem,index){
    let maindiv = document.createElement("div");

    let img = document.createElement("img");
    img.src = elem.ImageUrl;
    let name = document.createElement("p");
    name.innerText = elem.name;
    let brand = document.createElement("p");
    brand.innerText = elem.brand
    let price = document.createElement("p");
    price.innerText = `₹ ${elem.price}`
    let remove = document.createElement("button")
    remove.innerText = "Remove"
    remove.setAttribute("Id","remove_product")
    remove.addEventListener("click",function(){
        removeItem(elem,index)
    })

    maindiv.append(img,name,brand,price,remove)

    showdata.append(maindiv)
})

//for removing the item from Page as well as from LocalStorage
function removeItem(elem,index){
    product_data.splice(index,1)
    localStorage.setItem("data",JSON.stringify(product_data))
    window.location.reload()
}   

//Add product function which redirects to the input page
document.querySelector("#add_product").addEventListener("click",addProductpage)

function addProductpage(){
    location.href = "index.html";
}