// console.log(this)

//Simple Function

// function obj(n,p) {
//     var obj = {}
    
//     obj.name = n;
//     obj.price = p;

//     return obj
// }
// console.log(obj("bahubali",1018))


//constructor Function

// function objCF(n,p) {
//     this.name = n;
//     this.price = p;
// }

// var p1 = new objCF("bahubali",2000)

// console.log("p1:", p1)


var arr = [];

function product(n,p,b){
    this.name = n;
    this.price = p;
    this.brand = b;
}


function storeproducts(event){
    event.preventDefault();

    let form = document.querySelector("#form");
    let name = form.name.value
    // console.log("name:",name)
    let price = form.price.value
    // console.log("price:",price)
    let brand = form.brand.value
    // console.log("brand:",brand)

    let data = new product(name,price,brand);

    arr.push(data)
    console.log(arr)

}