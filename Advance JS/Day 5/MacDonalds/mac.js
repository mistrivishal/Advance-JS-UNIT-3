function newFood(img,v,n,d,p){
    this.image = img;
    this.cat = v;
    this.name = n;
    this.detail = d;
    this.price = p;
}
function trendFood(img,v,n,d,p){
    this.image = img;
    this.cat = v;
    this.name = n;
    this.detail = d;
    this.price = p;
}
function timeFood(img,v,n,d,p){
    this.image = img;
    this.cat = v;
    this.name = n;
    this.detail = d;
    this.price = p;
}


let newfood = [];
let trendfood = [];
let timefood = [];


let Newfood1 = new newFood ("https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1648698127/Item/5276D.png",
                            "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/v1591261933/NewWebsiteResource2020/Assets/Img/Veg.svg",
                            "Triple Cheese American Veg Burger",
                            "A crunchy Corn patty filled with Cheese, topped with Jalapenos, shredded Lettuce and more cheese, layered between the goodness of whole wheat buns.",
                            "195"
)
let Newfood2 = new newFood ("https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1626242155/Item/5294.png",
                            "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/v1591261933/NewWebsiteResource2020/Assets/Img/Veg.svg",
                            "McSpicy Premium Veg Burger",
                            "A spicy Paneer patty, shredded Lettuce topped with Jalapenos and Cheese slice, Spicy Cocktail sauce & Cheese sauce layered between toasted Whole Wheat Buns.",
                            "210",
)
let Newfood3 = new newFood ("https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1648698126/Item/5275D.png",
                            "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/v1591261933/NewWebsiteResource2020/Assets/Img/nonveg.svg",
                            "Triple Cheese American Chicken Burger",
                            "A flame-grilled Chicken patty filled with Cheese, topped with Jalapenos, shredded Lettuce and more Cheese, layered between the goodness of whole wheat buns.",
                            "220",
)
let Newfood4 = new newFood ("https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1626242194/Item/5293.png",
                              "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/v1591261933/NewWebsiteResource2020/Assets/Img/nonveg.svg",
                              "McSpicy Premium Chicken Burger",
                              "A spicy Chicken patty, shredded Lettuce topped with Jalapenos and Cheese slice, Spicy Habanero sauce & Cheese sauce layered between toasted Whole Wheat Buns.",
                              "249",
)


let food = [];

newfood.push(Newfood1,Newfood2,Newfood3,Newfood4);

food.push(newfood);

localStorage.setItem("foodData",JSON.stringify(food));

const data = JSON.parse(localStorage.getItem("foodData"));

// let x = document.getElementById("food")
// console.log(x)

let a = 1;

let id = 0;
    
for(let i=0;i<data.length;i++){
    let foodItems = document.getElementById(`foodlist`)
    // console.log(foodItems)
    let submit = document.createElement("input")
        submit.type = "submit"
        submit.id = "submit"
        submit.value = "Order Food"
        foodItems.append(submit)
    let data1 = data[i]
    data1.map(function(elem){
        let input = document.createElement("input")
        input.type = "checkbox"
        input.id = `item`
        // console.log(`item${id}`)
        let label = document.createElement("label")
        label.htmlFor = "box"

        let img1 = document.createElement("img")
        img1.src = elem.image
        img1.id = "itemimg"

        let img2 = document.createElement("img")
        img2.src = elem.cat
        img2.id = "cat"

        let name = document.createElement("h2")
        name.innerText = elem.name

        let detail = document.createElement("p")
        detail.innerText = elem.detail
        detail.className = "details"

        let price = document.createElement("p")
        price.innerText = `₹${elem.price}`

        let box = document.createElement("div")
        box.id = "de"

        box.append(img2,name,price,detail)

        label.append(img1,box)

        foodItems.append(input,label)

    })
}

let item = document.querySelectorAll("#item");

console.log("=-----",item)

let order = document.getElementById("order")
let wait = document.getElementById("wait")
let wait2 = document.getElementById("wait2")
function placeOrder(){
    event.preventDefault()
    wait2.innerHTML = null;
    for (let i = 0; i < item.length; i++) {
        if(item[i].checked === true){
            wait2.innerHTML = null
            wait.innerHTML="Your order is being ready Please Wait"
            Delayd(data[0][i]);
        }
    }
}
let delay = Math.floor((Math.random()*4)+ 1)
function Delayd(d){
    setTimeout(() => {
        wait.innerHTML="Thank you for visit.. Enjoy your food"
        append1(d)
    }, delay*1000);
}
function append1(d){
        console.log(d)
        let label = document.createElement("label")
        label.htmlFor = "box"

        let img1 = document.createElement("img")
        img1.src = d.image
        img1.id = "Oimg"

        let img2 = document.createElement("img")
        img2.src = d.cat
        img2.id = "Oimgc"

        let name = document.createElement("h2")
        name.innerText = d.name

        let price = document.createElement("p")
        price.innerText = `₹${d.price}`

        let box = document.createElement("div")
        box.id = "de"

        box.append(img2,name,price)

        label.append(img1,box)

        wait2.append(label)
}



