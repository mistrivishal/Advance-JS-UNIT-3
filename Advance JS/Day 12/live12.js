

class Vehicle {
    constructor(type,regNum,color){
        this._type = type;
        this._regNum = regNum;
        this._color = color;
    }
    //this is standard operation for getter and setter
    get type(){
        return this._type;
    }
    set type(value){
         this._type = value
    }
    //this another way to do it
    // getType(){
    //     return this.type;
    // }
}

//car

class Car extends Vehicle{
    constructor(regNum,color){
        super("Car",regNum,color);
    }
}

//bike

class Bike extends Vehicle{
    constructor(regNum,color){
        super("Bike",regNum,color);
    }
}

//Bus

class Truck extends Vehicle{
    constructor(regNum,color){
        super("Truck",regNum,color);
    }
}


//getter and setter methods


// let a = new car("MH-41 CC-9999", "White")
// console.log("Car:" , a.type)

// let b = new bike("MH-41 CC-9999", "Black")
// console.log("Bike:" , b.type)

// let c = new Bus("MH-41 CC-9999", "Red")
// console.log("Bus:" , c.type)


//Individual parking solt
class Slot{
    constructor(type,Num){
        this.type = type;
        this.Num = Num;
        this._isBooked = false;
    }
    get isBooked(){
        return this._isBooked;
    }
    set isBooked(x){
        this._isBooked = x;
    }
}

//Individual floors

class Parkingfloor{
    constructor(floorNum, maxFloor){
        this.floorNum = floorNum;
        this._parkingSpots = [];

        // 0 - trucks,buses
        // 1 - Bikes
        // else - Cars
        // Categorized each floor
        for(let i=0;i<maxFloor;i++){
            if(i === 0){
                //push Truck Slots
                this._parkingSpots.push(new Slot("Truck",i))
            }
            else if(i === 1){
                //push Bike Slots
                this._parkingSpots.push(new Slot("Bike",i))
            }
            else{
                //push Cars Slots
                this._parkingSpots.push(new Slot("Car",i))

            }
        }
    }
    get parkingSpots(){
        return this._parkingSpots;
    }
}

// let pf1 = new Parkingfloor(0, 3)
// console.log("pf1:", pf1)


//parkingFloor - slots;
//ParkingLot - Floors;

class ParkingLot{
    constructor(num){
        this._floors = [];
        this._numofFloors = num;

        for(let i=0;i<this.numofFloors; i++){
            this._floors[i] = new Parkingfloor(i,this._numofFloors)
        }
    }
    get numofFloors(){
        return this._numofFloors;
    }
    get floors(){
        return this._floors;
    }
    set floors(value){
        this._floors = value;
    }

    parkVehicle(Vehicle){
        let slot = this.findSlots(Vehicle.type) //BIKE,CAR,TRUCK

        if(!slot){
            console.log("No Slots")
            return false;
        }
        this.bookSlot(slot)
        let ticket = new Ticket(slot.floorNum,slot.slot.Num)
        console.log("Ticket Issued:", ticket)
    }


    findSlots(type){
        // floors = 0 -> 0,1,2 (floors)
        // floor = 0 -> 0,1,2 (one floor there is slots)


        for(let i=0;i<this.numofFloors; i++){
            for(let slot of this._floors[i]._parkingSpots){
                if(slot.type === type && !slot._isBooked){
                    // console.log("slots:", slot)
                    return {floorNum: i, slot:slot}
                }
            }
        }
        return false;
    }

    bookSlot(slot){
        slot.slot.isBooked = true;
        console.log("Slot is booked:", slot);

        return true;
    }
}


class Ticket{
    constructor(floorNum,slotNum){
        this.floorNum = floorNum;
        this.slotNum = slotNum;
        this.issueAt = new Date();
    }
}




let p1 = new ParkingLot(3)

let b1 = new Bike("MH-41 CC-9999", "White")

p1.parkVehicle(b1)
