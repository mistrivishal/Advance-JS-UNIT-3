function products(pname,category,img,price,gender,sold){
    this.ProductName = pname;
    this.category = category;
    this.imageUrL = img;
    this.price = price;
    this.gender = gender;
    this.sold = sold;
    window.location.reload()
}

var productarr = JSON.parse(localStorage.getItem("Products")) || [];


function storeproducts(event){
    event.preventDefault();
    // window.location.reload()

    let form = document.querySelector("#form");
    let name = form.name.value
    let category = form.category.value
    let Image = form.img.value
    let price = form.price.value
    let gender = form.gender.value
    let status = form.sold.value

    let data = new products(name,category,Image,price,gender,status);

    productarr.push(data)

    localStorage.setItem("Products", JSON.stringify(productarr));
    
    // console.log(productarr)
    form.name.value = "";
    form.category.value = "";
    form.img.value = "";
    form.price.value = "";
    // form.gender.value = "";
    // form.sold.value = "";

}