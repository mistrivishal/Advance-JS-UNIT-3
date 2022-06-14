(()=>{"use strict";var r={994:(r,n,e)=>{e.d(n,{Z:()=>s});var t=e(81),i=e.n(t),o=e(645),a=e.n(o)()(i());a.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Fredoka+One&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,500;1,600;1,700;1,800;1,900&family=Orelega+One&family=Titan+One&display=swap);"]),a.push([r.id,"/* font-family: 'Fredoka One', cursive;\r\nfont-family: 'Montserrat', sans-serif;\r\nfont-family: 'Orelega One', cursive;\r\nfont-family: 'Titan One', cursive; */\r\nbody{\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\na{\r\n    text-decoration: none;\r\n    /* color: black; */\r\n    color: white;\r\n}\r\n#nav{\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    box-sizing: border-box;\r\n    position: fixed;\r\n    left: 0px;\r\n    top: 0px;\r\n    z-index: 10;\r\n    color: white;\r\n    background: rgba(4, 4, 4, 0.858);\r\n    /* border: 1px solid red; */\r\n    padding: 0px 100px;\r\n}\r\n#logo{\r\n    /* font-family: 'Fredoka One', cursive; */\r\n    /* font-family: 'Montserrat', sans-serif; */\r\n    /* font-family: 'Orelega One', cursive; */\r\n    font-family: 'Titan One', cursive;\r\n    font-size: 30px;\r\n    line-height: 0px;\r\n}\r\n#logo h2 span{\r\n    color: orange;\r\n    font-size: 24px;\r\n    letter-spacing: 2px;\r\n}\r\n#menu{\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 25px;\r\n    font-size: 14px;\r\n}\r\n#search-bar{\r\n    position: relative;\r\n    width: 40%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    /* background-color: white; */\r\n    border-bottom: 5px solid #892074;\r\n    box-sizing: border-box;\r\n    padding: 5px 0px;\r\n}\r\n#search-bar input{\r\n    outline: none;\r\n    border: none;\r\n    background-color: transparent;\r\n    padding: 6px 10px;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    color: white;\r\n}::placeholder{\r\n    color: rgb(156, 156, 156);\r\n}\r\n#search-bar img{\r\n    width: 16px;\r\n}\r\n#search-bar label{\r\n    font-size: 14px;\r\n    font-weight: 800;\r\n}\r\n.list{\r\n    display: block;\r\n    position: absolute;\r\n    top: 11.5%;\r\n    right: 23%;\r\n    box-sizing: border-box;\r\n    padding: 0px 20px;\r\n    height: 250px;\r\n    width: 348px;\r\n    overflow: scroll;\r\n    background: #00000092;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n}\r\n\r\n::-webkit-scrollbar{\r\n    display: none;\r\n}\r\n.search-list{\r\n    display: flex;\r\n    justify-content: left;\r\n    gap: 10px;\r\n    align-items: center;\r\n    box-sizing: border-box;\r\n    color: white;\r\n    font-weight: 400;\r\n    cursor: pointer;\r\n}\r\n.search-list img{\r\n    width: 40px;\r\n    border-radius: 8px;\r\n}\r\n#slidshow{\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    position: absolute;\r\n    z-index: -10;\r\n    left: 0px;\r\n    top: 0px;\r\n    height: 460px;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n#login-signup{\r\n    font-size: 15px;\r\n    /* border: 1px solid; */\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n#login-signup img{\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n#logout{\r\n    display: none;\r\n    cursor: pointer;\r\n}\r\n#categories{\r\n    width: 100%;\r\n    margin: auto;\r\n    margin-top: 25.2%;  \r\n    text-align: center;\r\n    /* color: white; */\r\n}\r\n\r\n#categories h1{\r\n    font-size: 50px;\r\n    color: white;\r\n    width: 100%;\r\n    margin: auto;\r\n    padding: 10px;\r\n    background: rgba(59, 59, 59, 0.653);\r\n    margin-bottom: 15px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#meals{\r\n    width: 90%;\r\n    margin: auto;\r\n    margin-top: 0px;\r\n    display: grid;\r\n    grid-template-columns: repeat(5,1fr);\r\n    gap: 20px;row-gap: 30px;\r\n    padding: 5px;\r\n    box-sizing: border-box;\r\n}\r\n#meals div{\r\n    height: max-content;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n    background: rgba(255, 255, 255, 0.866);\r\n    /* border-radius: 10px; */\r\n    border-bottom: 8px solid #77e2e1;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    cursor: pointer;\r\n}\r\n#meals div:hover{\r\n    transform: scale(1.04);\r\n    border-radius: 10px;\r\n    border-bottom: 8px solid #ffc062;\r\n    transition: all;\r\n    box-sizing: border-box;\r\n}\r\n#meals div:hover h3{\r\n    width: fit-content;\r\n    margin: 18px auto;\r\n    border-bottom: 3px solid #77e2e1;\r\n}\r\n#categories img{\r\n    width: 100%;\r\n    /* height: 180px; */\r\n    border-top-left-radius: inherit;\r\n    border-top-right-radius: inherit;\r\n    background-color: rgba(19, 19, 19, 0.873);\r\n}\r\n#footer{\r\n    margin-top: 50px;\r\n    width: 100%;\r\n    left: 0px;\r\n    bottom: 0px;\r\n    height: 250px;\r\n    background: linear-gradient(50deg,#bf19e4 10%,#af8021 60%);\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n    color: white;\r\n    padding-top: 20px;\r\n}\r\n#social{\r\n    width: 20%;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n#social img{\r\n    width: 28px;\r\n}\r\n.footer-nav-links{\r\n    margin: auto;\r\n    margin-top: 20px;\r\n    list-style: none;\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 10px;\r\n    font-size: 12px;\r\n    margin-left: -40px;\r\n}\r\n#footer p{\r\n    font-size: 12px;\r\n}\r\n.cat-h1{\r\n    width: 94%;\r\n    margin: auto;\r\n    margin-top: 120px;\r\n    font-size: 30px;\r\n    font-weight: 800;\r\n    /* border-bottom: 2px solid #62ffffbd; */\r\n    text-transform: uppercase;\r\n}\r\n#cat-menu{\r\n    width: 97%;\r\n    margin: auto;\r\n    display: grid;\r\n    grid-template-columns: repeat(5,1fr);\r\n    gap: 50px;\r\n    box-sizing: border-box;\r\n    padding: 20px;\r\n}\r\n#cat-menu div{\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    background: #f2d2a6a9;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n    min-height: 300px;\r\n    cursor: pointer;\r\n}\r\n#cat-menu h3{\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n}\r\n#cat-menu img{\r\n    width: 96%;\r\n    border-radius: 10px;\r\n}\r\n.hide-list{\r\n    display: none;\r\n}\r\n#recipe{\r\n    width: 60%;\r\n    margin: auto;\r\n    margin-top: 60px;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    padding: 20px;\r\n}\r\n#recipe .meal h1{\r\n    border: 2px #50cde0 dashed;\r\n    font-size: 38px;\r\n}\r\n#recipe .meal img{\r\n    width: 45%;\r\n    /* border: 8px solid; */\r\n    border-radius: 10px;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n}\r\n#recipe .meal-info{\r\n    font-size: 18px;\r\n    font-family: 'Fredoka One', cursive;\r\n    margin: 20px;\r\n    padding: 10px;\r\n    border: 2px #e09850 dashed;\r\n    border-radius: 5px;\r\n}\r\n#recipe .instruction p{\r\n    margin: 0;\r\n    letter-spacing: 0.5px;\r\n    line-height: 1.5;\r\n    text-align: justify;\r\n}\r\n#recipe .instruction ul{\r\n    list-style: none;\r\n    padding-left: 0;\r\n}\r\n#recipe .instruction ul li{\r\n    border: 1px solid #d9d9d9;\r\n    border-radius: 5px;\r\n    background-color: #fff;\r\n    display: inline-block;\r\n    color: black;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    padding: 5px 10px;\r\n    margin: 0 10px 10px 5px;\r\n}\r\n#recipe .meal-video img{\r\n    width: 24px;\r\n    vertical-align: middle;\r\n    margin: 0 10px;\r\n}\r\n#recipe .meal-video a{\r\n    color: blue;\r\n}\r\n#signup,#login{\r\n    margin: auto;\r\n    margin-top: 120px;\r\n    width: 24%;\r\n    text-align: center;\r\n}\r\n#signup h1{\r\n    text-transform: uppercase;\r\n}\r\n#signup form , #login form{\r\n    display: grid;\r\n    row-gap: 20px;\r\n    box-sizing: border-box;\r\n    padding: 10px;\r\n}\r\n#signup form input, #login form input{\r\n    padding: 8px 12px;\r\n    font-size: 16px;\r\n    border: 0.5px solid #bdbdbd;\r\n    border-radius: 5px;\r\n}\r\n#signup form button, #login form button{\r\n    background-color: #e09850;\r\n    border: 1px solid #e09850;\r\n    border-radius: 5px;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    padding: 8px;\r\n    color: #fff;\r\n    margin-bottom: 20px;\r\n}\r\n#signup a{\r\n    font-size: 14px;\r\n    border-bottom: 0.5px solid blue;\r\n    color: blue;\r\n}",""]);const s=a},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,i,o){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var p=0;p<r.length;p++){var d=[].concat(r[p]);t&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),n.push(d))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var o={},a=[],s=0;s<r.length;s++){var l=r[s],p=t.base?l[0]+t.base:l[0],d=o[p]||0,c="".concat(p," ").concat(d);o[p]=d+1;var g=e(c),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==g)n[g].references++,n[g].updater(u);else{var f=i(u,t);t.byIndex=s,n.splice(s,0,{identifier:c,updater:f,references:1})}a.push(c)}return a}function i(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,i){var o=t(r=r||[],i=i||{});return function(r){r=r||[];for(var a=0;a<o.length;a++){var s=e(o[a]);n[s].references--}for(var l=t(r,i),p=0;p<o.length;p++){var d=e(o[p]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=l}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,i&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={id:t,exports:{}};return r[t](o,o.exports,e),o.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{const r=["https://img.sndimg.com/food/image/upload/q_80,fl_progressive,h_437,w_1025,c_fill/v1/img/recipes/92/02/1/ArhyYe9RTCrWPsuTu5hw_0S9A9973.jpg","https://img.sndimg.com/food/image/upload/q_80,fl_progressive,h_437,w_1025,c_fill/v1/img/recipes/32/03/96/VwY7EBjS4u65Vs8clsZF_0S9A2360.jpg","https://img.sndimg.com/food/image/upload/q_80,fl_progressive,h_437,w_1025,c_fill/v1/img/recipes/40/49/81/XTDhTVTha3tEs4KIJMCA_Peruvian%20Home%20Fries%20SITE-3.jpg"],n=r=>document.getElementById(r),t=r=>document.createElement(r);var i=e(379),o=e.n(i),a=e(795),s=e.n(a),l=e(569),p=e.n(l),d=e(565),c=e.n(d),g=e(216),u=e.n(g),f=e(589),h=e.n(f),m=e(994),x={};x.styleTagTransform=h(),x.setAttributes=c(),x.insert=p().bind(null,"head"),x.domAPI=s(),x.insertStyleElement=u(),o()(m.Z,x),m.Z&&m.Z.locals&&m.Z.locals,n("nav").innerHTML='\n    <div id="logo">\n        <a href="index.html">\n            <h2>Vishal<span>.Food</span></h2>\n        </a>\n    </div>\n    <div id="menu">\n        <a href="recipe-of-day.html">\n            <h3>RECIPES OF THE DAY</h3>            \n        </a>\n    </div>\n    <div id="search-bar">\n        <label for="search">I WANT TO MAKE</label>\n        <img src="./images/search.png" alt="">\n        <input type="text" name="search" id="search" class="search" placeholder="Search Recipes">\n    </div>\n    <div id="login-signup">\n        <a href="signup.html">\n            <h3>Signup/Login</h3>            \n        </a>\n    </div>\n    <div id="logout">\n        <a>\n            <h4>Logout</h4>            \n        </a>\n    </div>\n    ',n("footer").innerHTML='\n    <h3>\n        CONNECT WITH US:\n    </h3>\n    <div id="social">  \n        <a href="#"><img src="./images/facebook.png" alt=""></a>\n        <a href="#"><img src="./images/instagram.png" alt=""></a>\n        <a href="#"><img src="./images/pinterest.png" alt=""></a>\n        <a href="#"><img src="./images/twitter.png" alt=""></a>\n        <a href="#"><img src="./images/youtube.png" alt=""></a>\n    </div>\n    <p>© 2022 Discovery or its subsidiaries and affiliates.</p>\n    <p>All rights reserved.</p>\n    <ul class="footer-nav-links">\n        <li><a href="#">Advertise</a></li>\n        <li><a href="#">AdChoices</a></li>\n        <li><a href="#">Privacy Notice</a></li>\n        <li><a href="#">Visitor Agreement</a></li>\n    </ul>',((n,e)=>{let t=0;setInterval((()=>{t===r.length&&(t=0),e.innerHTML=null,e.style.backgroundImage=`url(${r[t]})`,e.append(n),t++}),3e3)})(t("img"),n("slidshow"));let b=n("meals");(async r=>{try{const r=await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");return await r.json()}catch(r){console.log(r)}})().then((r=>{(({categories:r},n)=>{r.forEach((({strCategory:r,strCategoryThumb:e})=>{let i=t("div");i.addEventListener("click",(n=>{let e=[r];localStorage.setItem("category",JSON.stringify(e)),window.location.href="category-menu.html"}));let o=t("img");o.src=e;let a=t("h3");a.innerText=r,i.append(o,a),n.append(i)}))})(r,b)})),n("search").addEventListener("input",(function(){v&&clearTimeout(v),v=setTimeout((function(){!async function(){try{y.classList.add("list");let r=document.getElementById("search").value.trim();const n=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${r}`),e=await n.json();console.log(e),w(e)}catch(r){console.log(r)}}()}),500)}));let v,y=n("list");const w=({meals:r})=>{y.innerHTML=null,r.forEach((({strMealThumb:r,strMeal:n,idMeal:e,strCategory:i})=>{let o=t("div");o.classList.add("search-list"),o.addEventListener("click",(r=>{let n=[e];localStorage.setItem("idMeal",JSON.stringify(n)),window.location.href="recipes.html"}));let a=t("img");a.src=r;let s=t("p");s.innerText=`${n} - `;let l=t("p");l.innerText=i,o.append(a,s,l),y.append(o)}))};window.addEventListener("click",(r=>{"search"!=r.target.className?(y.classList.add("hide-list"),n("search").value=null):y.classList.remove("hide-list")}));let T=JSON.parse(localStorage.getItem("userData"));if(null!==T){let r=n("login-signup");r.innerHTML=null,n("login-signup").style.display="grid";let e=t("img");e.src="./images/user.png",console.log(r.children);let i=t("h4");i.style.textTransform="uppercase",i.style.letterSpacing="1px",i.innerHTML=`Welcome ${T.username} !`,r.append(e,i),r.style.display="flex",r.style.cursor="pointer",n("logout").style.display="block",n("logout").addEventListener("click",(()=>{localStorage.setItem("userData",null),window.location.reload()}))}})()})();