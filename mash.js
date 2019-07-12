var houses = ["Mansion","Apartmet","Shack","House"];
//var rdmHouse = Math.floor(Math.random()*houses.length)
//console.log(houses[rdmHouse]);



function mash() {
    //return "house"
 
 //const  result = mash();
return getHome();

 }
 function getHome() {
    var rdmHouse = Math.floor(Math.random()*houses.length)
    return (houses[rdmHouse]);
  
 } 
console.log(mash());


function getChildrenCount() {
    return Math.floor(Math.random()*100)
} 
//console.log(getChildrenCount());