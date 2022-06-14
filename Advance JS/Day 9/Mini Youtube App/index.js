const searchVideo = async ()=>{
    try{
        const q = document.getElementById("query").value

        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${q}&key=AIzaSyBsL3BuieoX5X1zbRJzJZR_g3wG4cNAYdg`

        const res = await fetch(url);
        let data = await res.json()
        console.log(data.items)
        append(data.items)
    }
    catch (err){
        console.log(err)
    }
}