//!SECTION 1st problem
//1
const carThree = {
    wheels : 4,
    owner : "Larry Wheels",
    isBroken : false,
    color : "Blue"
}
//2
carThree.price = 500;
//3
carThree['year'] = 2003;
//4
carThree.isBroken = true;
//5
carThree.owner
console.log(carThree.owner);
//6
let clientIsInteresteed;
//7
if(carThree.color === "Blue"){
    clientIsInteresteed = true;
}
//8
delete carThree.owner;

console.log(carThree);


//!SECTION 2nd Problem
//1
const store = {
    profit : 10,
    manager : "Simo",
    isOpenNow : true,
    isVeryExpensive : true
}
//2
store.location = "DownTown";
//3
store['storeType'] = "Clothes";
//4
store.isOpenNow = false;
//5
store.isVeryExpensive;
console.log(store.isVeryExpensive);
//6
let canShopHere;
//7
if(!store.isOpenNow && store.isVeryExpensive){
    canShopHere = true;
}
//8
delete store.profit;

console.log(canShopHere);

//!SECTION 3rd Problem
//1
const home = {
    rooms : 24,
    bathroom : 89,
    isForSale : false,
    isInGoodLocation : true
}
//2
home.price = 5000000;
//3
home["year"] =1879;
//4
home.isForSale = true;
//5
console.log(home.bathroom);
//6
let buyHouse;
//7
if(home.isForSale && home.isInGoodLocation){
    buyHouse = true;
}
//8
delete isForSale;

//!SECTION 4th and 5th Problem
//1
const myCar = {
    color : "white",
    year : 2016,
    make : "mustang",
    forSale : false
}
//2
myCar.cleanTitle = false;
//3
myCar["fast"] = true;
//4
myCar.forSale = true;
//5
console.log(myCar.color);
//6
let willBuy;
//7
if(myCar.forSale && myCar.fast){
    willBuy = true;
}
//8
delete myCar.forSale;