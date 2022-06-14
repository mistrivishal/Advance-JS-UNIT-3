// IW


// var studentdata = {
//     batch: "Web-17",
//     Instructor:"SK",
//     Unit: 3,
// }

// var xyz = Object.create(studentdata)
// console.log(xyz)


// function shoes(name,price,brand){
//     this.name = name;
//     this.price = price;
//     this.brand = brand;
// }

// shoes.prototype.coupon = function (){
//     console.log("20% discount on this products")
// }

// var s1 = new shoes(Nike,400)

// console.log("s1:",s1)

// s1.coupon()


function myArr(){
    this.length = arguments.length

    for(let i=0;i<this.length;i++)
    this[i] = arguments[i];
}

let a2 = new myArr(1,2,3)

console.log("a2:" )