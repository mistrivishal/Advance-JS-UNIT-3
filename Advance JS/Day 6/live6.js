const url = 'https://fakestoreapi.com/products';

const container = document.querySelector("#container");

fetch(url)
.then(function(res){
    return res.json()
})
.then(function(res){
    // console.log("res:",res);
    appenData(res)
})
.catch(function(err){
    console.log("err:",err);
})


function appenData(data){
    data.forEach(function (elem){
        let box = document.createElement("div");

        let title  = document.createElement("p")
        title.innerText = elem.title

        let price  = document.createElement("p")
        price.innerText = elem.price

        let image  = document.createElement("img")
        image.src = elem.image

        box.append(image,title,price)

        container.append(box);

    })
}