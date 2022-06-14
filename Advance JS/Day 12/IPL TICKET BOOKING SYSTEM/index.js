function help(x){
    return document.getElementById(x)
}

//1. Create Customer data

class Customer{
    constructor(name, age, gender, category){
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._category = category;
    }
    // get name(){
    //     return this._name;
    // }
    // set name(n){
    //      this._name = n;
    // }
    // get age(){
    //     return this._age;
    // }
    // set age(a){
    //      this._age = a;
    // }
    get category(){
        return this._category;
    }
    set category(c){
         this._category = c;
    }
}

class VVIPs extends Customer{
    constructor(name,age,gender){
        super(name,age,gender,"VVIPs")
    }
}
class VIPs extends Customer{
    constructor(name,age,gender){
        super(name,age,gender,"VIPs")
    }
}
class General extends Customer{
    constructor(name,age,gender){
        super(name,age,gender,"General")
    }
}

// 2. Create Sections It has separate slots for VVIPs, VIPs and General.

class Slots{
    constructor(category,num){
        this.category = category;
        this.num = num;
        this._isBooked = false;
    }
    get isBooked(){
        return this._isBooked;
    }
    set isBooked(x){
         this._isBooked = x;
    }
}


class Levels{
    constructor(LevelNum, MaxLevels){
        this.LevelNum = LevelNum;
        this._sections = [];

        //on the basis of category divided a sections
        for(let i=0; i<MaxLevels; i++){
            if(i < 3){
                this._sections.push(new Slots("VVIPs",i));
            }
            else if(i >=3 && i<6){
                this._sections.push(new Slots("VIPs",i));
            }
            else{
                this._sections.push(new Slots("General",i));
            }
        }
    }
    get sections(){
        return this._sections;
    }
}

let l = new Levels(1,10)

console.log(l._sections)

// l._sections.forEach(element => {
//     console.log(element);
//     help("VVIPs").innerHTML = "Seat"
// });


class Seats{
    constructor(num){
        this._level = [];
        this._numLevels = num;

        for(let i=0;i<this._numLevels;i++){
            this._level[i] = new Levels(i,this._numLevels);
        }
    }
    get numLevels(){
        return this._numLevels;
    }
    get level(){
        return this._level;
    }
    set level(x){
        this._level = x;
    }

    buyTicket(Customer,match){
        let Slot = this.findSlots(Customer.category); // for VVIPs, VIPs and General.

        if(!Slot){
            console.log("No Seats Available")
            return false;
        }
        this.bookSlot(Slot)
        let ticket =  new Ticket( Slot.levelNum, Slot.Seat.num,match);
        console.log("Seat Booked Successfully", ticket);
    }
    findSlots(category){

        for(let i=0;i<this.numLevels;i++){
            for(let slot of this._level[i]._sections){
                    if(slot.category === category && !slot._isBooked){
                        // console.log("Seat:", slot);
                        return {levelNum: i, Seat:slot}
                    }
            }
        }
        return false;
    }
    bookSlot(Slot){
        Slot.Seat.isBooked = true;
        console.log("Seat is booked:", Slot);
        return true;
    }
}

class Ticket{
    constructor(levelNum,seatNum,match){
        this._CusInfo = new VVIPs('Vishal','26','Male')
        this.levelNum = levelNum;
        this.seatNum = seatNum;
        this.match = match;
        this.issuedAt = new Date();
    }
    get CusInfo(){
        return this._CusInfo;
    }
}

let seats = new Seats(3)

let Cust = new VVIPs('Vishal','26','Male')

seats.buyTicket(Cust,"MI v/s CSK")