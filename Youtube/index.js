// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=[YOUR_API_KEY
const API="AIzaSyD7lLwOAElB4SbJlFO-zvli1-6D4IZHzhs"

const searchMovies =async () => {
try{
    const q =document.getElementById("query").value;

    const res =await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${API}`)

    const data =await res.json();
    console.log(data);
append(data.items);
}catch(err){
    
    console.log(err);
}
};

const append=(videos) => {
    let show_videos =document.getElementById("show_videos");

    show_videos.innerHTML=null;
    videos.forEach(({id: {videoId},snippet:{title}}) =>{
        let div =document.createElement("div");

        let iframe=document.createElement("iframe")
        iframe.src=`https://www.youtube.com/embed/${videoId}`

        iframe.width="100%";
        iframe.height="100%";
        iframe.allow="fullscreen";

        let name=document.createElement("h5");

        name.innerText=title;

        div.append(iframe,name);

        let data={
            title,
            videoId,
        }

        div.onclick=() =>{
            showVideo(data);
        };

        show_videos.append(div);
    });
};

const showVideo =(x) =>{
    window.location.href ="video.html";
    localStorage.setItem("video",JSON.stringify(x));
};

//------------------------------------------------------------------------

let trending = async () => {
    try {
      const mykey = `AIzaSyD7lLwOAElB4SbJlFO-zvli1-6D4IZHzhs `;
      const trending_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=28&regionCode=IN&key=${mykey}`;
      let res = await fetch(trending_url);
      let data = await res.json();
      // console.log(data);
      trendVideos(data.items);
    } catch (err) {
      console.log("err:", err);
    }
  };
  
  trending();
  
  let box = document.querySelector("#show_videos");
  
  let trendVideos = (data) => {
    box.innerHTML = null;
  
    data.map(
      ({
        id,
        snippet: { title },
        snippet: { channelTitle },
        statistics: { viewCount },
      }) => {
        let div = document.createElement("div");
        div.setAttribute("class", "videodiv");
  
        let frame = document.createElement("iframe");
        frame.src = `https://www.youtube.com/embed/${id}`;
        // frame.width = "300";
        frame.height = "170";
        frame.allow = "fullscreen";
  
        let name = document.createElement("h5");
        name.innerText = title;
  
        let channel = document.createElement("p");
        channel.innerText = channelTitle;
  
        let view = document.createElement("p");
        if (viewCount <= 999999) {
          let n = (viewCount / 1000).toFixed();
          view.innerText = `${n}K views`;
        } else if (viewCount <= 100000000) {
          let num = (viewCount / 1000000).toFixed(1);
          view.innerText = `${num}M views`;
        }
  
        div.append(frame, name, channel, view);
        box.append(div);
      }
    );
  };