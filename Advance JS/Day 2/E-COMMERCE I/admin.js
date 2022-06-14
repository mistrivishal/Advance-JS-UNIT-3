function products(pname,category,img,price,gender,sold){
    this.ProductName = pname;
    this.category = category;
    this.imageUrL = img;
    this.price = price;
    this.gender = gender;
}

var productarr = JSON.parse(localStorage.getItem("Products")) || [];


function storeproducts(event){
    event.preventDefault();

    let form = document.querySelector("#form");
    let name = form.name.value
    let category = form.category.value
    let Image = form.img.value
    let price = form.price.value
    let gender = form.gender.value
    let sold1 = form.sold.value

    if(sold1 === false){
        sold1 === true;
    }
    else{
        sold1 === false;
    }

    let data = new products(name,category,Image,price,gender,sold1);

    productarr.push(data)

    localStorage.setItem("Products", JSON.stringify(productarr));
    console.log(productarr)
    form.name.value = "";
    form.category.value = "";
    form.img.value = "";
    form.price.value = "";
    // form.gender.value = "";
    // form.sold.value = "";

}