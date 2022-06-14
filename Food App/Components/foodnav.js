const nav = ()=>{
    return `
    <div id="logo">
        <a href="index.html">
            <h2>Vishal<span>.Food</span></h2>
        </a>
    </div>
    <div id="menu">
        <a href="recipe-of-day.html">
            <h3>RECIPES OF THE DAY</h3>            
        </a>
    </div>
    <div id="search-bar">
        <label for="search">I WANT TO MAKE</label>
        <img src="./images/search.png" alt="">
        <input type="text" name="search" id="search" class="search" placeholder="Search Recipes">
    </div>
    <div id="login-signup">
        <a href="signup.html">
            <h3>Signup/Login</h3>            
        </a>
    </div>
    <div id="logout">
        <a>
            <h4>Logout</h4>            
        </a>
    </div>
    `;
}

const image = [
    'https://img.sndimg.com/food/image/upload/q_80,fl_progressive,h_437,w_1025,c_fill/v1/img/recipes/92/02/1/ArhyYe9RTCrWPsuTu5hw_0S9A9973.jpg',
    'https://img.sndimg.com/food/image/upload/q_80,fl_progressive,h_437,w_1025,c_fill/v1/img/recipes/32/03/96/VwY7EBjS4u65Vs8clsZF_0S9A2360.jpg',
    'https://img.sndimg.com/food/image/upload/q_80,fl_progressive,h_437,w_1025,c_fill/v1/img/recipes/40/49/81/XTDhTVTha3tEs4KIJMCA_Peruvian%20Home%20Fries%20SITE-3.jpg',
]

const slides = (img,slide)=>{
    let i = 0;
    setInterval(()=>{
        if(i === image.length){
            i = 0;
        }
        slide.innerHTML = null
        slide.style.backgroundImage = `url(${image[i]})`;
        // console.log(i)
        slide.append(img);
        i++;
        
    },3000)
}

const get = (x)=>{
    return document.getElementById(x)
}
const create = (x)=>{
    return document.createElement(x)
}
const getValue = (x)=>{
    return document.getElementById(x).value;
}


// footer
const footer  = ()=>{
    return `
    <h3>
        CONNECT WITH US:
    </h3>
    <div id="social">  
        <a href="#"><img src="./images/facebook.png" alt=""></a>
        <a href="#"><img src="./images/instagram.png" alt=""></a>
        <a href="#"><img src="./images/pinterest.png" alt=""></a>
        <a href="#"><img src="./images/twitter.png" alt=""></a>
        <a href="#"><img src="./images/youtube.png" alt=""></a>
    </div>
    <p>© 2022 Discovery or its subsidiaries and affiliates.</p>
    <p>All rights reserved.</p>
    <ul class="footer-nav-links">
        <li><a href="#">Advertise</a></li>
        <li><a href="#">AdChoices</a></li>
        <li><a href="#">Privacy Notice</a></li>
        <li><a href="#">Visitor Agreement</a></li>
    </ul>`;
}


//get categories-----------
const categories = async (url)=>{
    try{
        const res = await fetch(url) 
        const data = await res.json()
        return data;
    }catch(err){
        console.log(err)
    }
}

//append categories

const append1 = ({categories},cat)=>{
    // console.log(categories)
    categories.forEach(({strCategory,strCategoryThumb}) => {
        let box  = create("div")
        box.addEventListener('click',  (event)=>{
            // alert('Hi!');
            let ele = [strCategory]
            localStorage.setItem("category",JSON.stringify(ele))
            window.location.href = "category-menu.html"
        })

        let img = create("img")
        img.src = strCategoryThumb;
        
        let category = create("h3");
        category.innerText = strCategory;

        box.append(img,category)

        cat.append(box)
    });
}

export {nav,slides,get,create,getValue,footer,categories,append1}