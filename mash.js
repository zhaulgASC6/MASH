var houses = ["Mansion","Apartmet","Shack","House"];
//var rdmHouse = Math.floor(Math.random()*houses.length)
//console.log(houses[rdmHouse]);
var cars = ["Convertable", "Box with wheels", "Lambo", "Truck", "Mini Van"];
houses.push("Dumpster");
let chance = Math.random();
cars.push(process.argv[4])
let powers = ["Telekinesis", "Shadow Control", "Teleportation", "Turtle Shell", "Shock"];

function randomizer(range) {
     return Math.floor(Math.random()*(range + 1));
}

    


 function getHome() {
   if(process.argv[2] != "")
    houses.push(process.argv[2]);
    //houses.push("Dumpster");
    //var rdmHouse = Math.floor(Math.random()*houses.length)
    return houses[randomizer(houses.length-1)];
    //return (houses[rdmHouse-2]);
  
 } 

function getChildrenCount() {
    if(process.argv[3] != "" || Math.random() >= 0.5)
    //let chance = Math.random();
    //return Math.floor(Math.random()*100)
    //if (chance <= 0.5){   }
        return randomizer(100);
        else { 
        return process.argv[3]
    }
    
} 
function mash() {
    
return " You will live in a " + getHome() + ", you will have " + getChildrenCount() + " kids and you'll drive a " + getCar()+ " and gain the power of " + getPower()+"!"; 

 } 
    function getCar(){
       if(process.argv[4] != "" || Math.random() >=0.5)
        //var rdmCar =  Math.floor(Math.random()*cars.length)
        return cars[randomizer(cars.length-1)];
        else 
        return process.argv[4]        

    }
    function getPower(){
        return powers[randomizer(powers.length-1)];
    }

console.log(mash());
//console.log(process.argv[2])