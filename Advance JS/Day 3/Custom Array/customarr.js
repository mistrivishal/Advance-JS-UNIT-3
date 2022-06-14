//Array function

function custmArray(){
    //for restrict some rpoperties 
    Object.defineProperty(this, "length",{
        value:0,
        writable:true,
        enumerable:false,
    });

    //for length of an Array
    this.length = arguments.length;

    //for creating index and values
    for(let i = 0; i<this.length; i++){
        this[i] = arguments[i]
    }
}
console.log("New array")
let arr = new custmArray("Swanand","Chandra","Nrupul","Prateek")
console.log("arr:",arr)

//1. custom Push() / ढकला()
console.log(`1.  custom Push() / ढकला() i.e ढकला("shubham")`)

custmArray.prototype.ढकला = function(मूल्य){

    let निर्देशांक = this.length; //निर्देशांक=index
    this[निर्देशांक] = मूल्य;
    this.length++;
}

arr.ढकला("Shubham")
console.log("arr:",arr)


//2. custom Pop() / हटवा()
console.log(`2. custom Pop() / हटवा() i.e arr.हटवा()`)

custmArray.prototype.हटवा = function(मूल्य){

    let निर्देशांक = this.length-1; //निर्देशांक=index
    delete this[निर्देशांक]
    this.length--;
}

arr.हटवा()
console.log("arr:",arr)

//3. custom Top() / शीर्ष()
console.log(`3. custom Top() / शीर्ष() i.e arr.शीर्ष()`)

custmArray.prototype.शीर्ष= function(मूल्य){

    let निर्देशांक = this.length-1; //निर्देशांक=index
    return this[निर्देशांक]
}

let Top = arr.शीर्ष()
console.log("arr Top:",Top)

//4. custom print() / छापा()
console.log(`4. print() / छापा() i.e arr.छापा()`)

custmArray.prototype.छापा = function(){
    // let con = this.arguments
    let ans = []
    for(let i = 0; i<this.length; i++){
        ans.push(this[i]) 
    }
   console.log(ans.join(" ").trim())
}
arr.छापा()

//5. custom printReverse() / उलटछापा()
console.log(`5. custom printReverse() / उलटछापा() i.e arr.उलटछापा()`)

custmArray.prototype.उलटछापा = function(){
    // let con = this.arguments
    let ans = []
    for(let i = this.length; i>=0; i--){
        ans.push(this[i]) 
    }
   console.log(ans.join(" ").trim())
}
arr.उलटछापा()


//6. custom size() / माप()
console.log(`6.custom size() / माप() i.e arr.माप()`)
custmArray.prototype.माप = function(){

    return this.length

}
let size = arr.माप()
console.log("arr size:",size)
