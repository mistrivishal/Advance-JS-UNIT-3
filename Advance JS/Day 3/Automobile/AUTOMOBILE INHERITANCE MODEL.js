//using object.create() 
console.log("BY USING object.create()")
const carproperties = {
    Engine:true,
    Wheels:4,
    FuleTank: true,
    windshield:true,
    Gear:true,
    Exaust:true,
}

const TataPunch = Object.create(carproperties)
TataPunch.name = "Tata Punch"
TataPunch.tankCapacity = "37L";
TataPunch.topSpeed = "150kmph";
TataPunch.Mileage = "18.97kmpl"

console.log("TataPunch:", TataPunch)

const Maruti_S_Presso = Object.create(carproperties)
Maruti_S_Presso.name = "Maruti S-Presso"
Maruti_S_Presso.tankCapacity = "27L";
Maruti_S_Presso.topSpeed = "148kmph";
Maruti_S_Presso.Mileage = "21.4kmpl"

console.log("Maruti S-Presso:", Maruti_S_Presso)


console.log("----------x-------------")
////using constructor functions()

console.log("BY USING constructor functions()")

function carpro(n,E,T,F,M,G){
    this.name = n;
    this.Engine = E;
    this.topSpeed = T;
    this.tankCapacity = F;
    this.Mileage = M;
    this.Gear = G;
}
carpro.prototype.Engine = true;
carpro.prototype.Wheels = 4;
carpro.prototype.FuleTank = true;
carpro.prototype.windshield = true;
carpro.prototype.Exaust = true;

const hyundaiAura = new carpro("Hyundai Aura SX","1197 cc","	155 kmph",
                                    "37L","20.5 kmpl","5-Speed Manual")
console.log("Hyundai Aura SX:", hyundaiAura)