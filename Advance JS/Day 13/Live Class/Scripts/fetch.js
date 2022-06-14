function help(x){
    return document.getElementById(x)
}

function help2(x){
    return document.createElement(x)
}

const getData = async(url)=>{
    try{
        const res = await fetch(url);
        const data = await res.json();

        return data;
    }catch(err){
        console.log(err)
    }
}

let append = (data, container)=>{
    data.forEach(({title, image}) => {
        let p = help2("p");
        p.innerText = title;

        let img = help2("img");
        img.src = image

        container.append(img,p)
    });
}



export {getData, append}