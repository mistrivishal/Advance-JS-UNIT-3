const getData = async (b,d)=>{
    try{
        const url = `https://api.unsplash.com/search/photos/?query=${b}&order_by=${d}&per_page=20&client_id=stBCbtNzhC8GhtHzrzzzTnNYyBycQ5lXIM7N91JK1gs`;
        const res = await fetch(url)
        const data  = await res.json()
        return data;
    }catch(err){
        console.log(err)
    }
}

const append = (data,container)=>{
    data.forEach(({alt_description,urls:{regular}}) => {
        let div = document.createElement('div');
        div.class = "image";
        let img = document.createElement('img');
        img.src = regular;
        div.append(img)
        container.append(div)
    });
}

export {getData,append}