function nav (){
    return`
    <div id="searchBox">
    <input type="text" id="query">
</div>
<div id="category">
    <h3 id="nature">Nature</h3>
    <h3 id="cars">Cars</h3>
    <h3 id="music">Music</h3>
    <h3 id="cartoons">Cartoons</h3>
    <h3 id="technology">Technology</h3>
    <h3 id="marvel">Marvel</h3>
</div>
<div id="sort-main">
    <select id="sort">
        <option value="relevant" id="relevant">relevant</option>
        <option value="latest" id="latest">Latest</option>
    </select>
    <div id="filter">
        <h3 id="landscape">landscape</h3>
        <h3 id="squarish">squarish</h3>
        <h3 id="portrait">portrait</h3>
    </div> 
</div>`
}


export {nav}