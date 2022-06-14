// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=abcd&key=[YOUR_API_KEY]

// AIzaSyBsL3BuieoX5X1zbRJzJZR_g3wG4cNAYdg

const searchVideo = async ()=>{
    try{
        const q = document.getElementById("query").value

        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}&key=AIzaSyBsL3BuieoX5X1zbRJzJZR_g3wG4cNAYdg`

        const res = await fetch(url);
        let data = await res.json()
        console.log(data.items)
        append(data.items)
    }
    catch (err){
        console.log(err)
    }
}

const append = (vid)=>{
    let show = document.getElementById("show");

    show.innerHTML = null;
    
    vid.forEach(({id:{ videoId },snippet:{ title }}) => {
        let box = document.createElement('div');
        
        let iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId.trim()}`
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.allow = "fullscreen";

        let name = document.createElement('h5');
        name.innerText = title

        box.append(iframe,name)

        let data = {
            videoId,
            title,
        }
        
        box.onclick = ()=>{
            showVideo(data)
        }

        show.append(box)
    });
}

const showVideo = (x)=>{
    localStorage.setItem("video",JSON.stringify(x))
    window.location.href = "video.html"
}