//store the products array in localstorage as "data"

//cunstructor function for new objects
function products(brand,name,price,img){
    this.brand = brand;
    this.name = name;
    this.price = price;
    this.ImageUrl = img;
}

let products_data = JSON.parse(localStorage.getItem("data")) || [];


//on submit function which stores the data into localStorage
function storedata(event){
    event.preventDefault()
    let form = document.querySelector("#product_form");

    let brand = form.product_brand.value;
    // console.log(brand)
    let name = form.product_name.value;
    let price = form.product_price.value;
    let image = form.product_image.value;

    let product = new products(brand,name,price,image);

    products_data.push(product);

    localStorage.setItem("data",JSON.stringify(products_data));

    form.product_brand.value = "";
    form.product_name.value = "";
    form.product_price.value = "";
    form.product_image.value = "";
    // localStorage.clear()
}


//Show product function which redirects to the Products page
document.querySelector("#show_products").addEventListener("click",showproducts)

function showproducts(){
    location.href = "inventory.html";
}