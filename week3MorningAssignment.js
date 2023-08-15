//!SECTION 1st

const addition =(x,y)=>{
    return x + y;
}

const sum = addition(10 , 5);
console.log(sum);

//!SECTION 2nd

const subraction = (x , y) =>{
    return x - y;
}

const sub = subraction(10 , 5);
console.log(sub);

//!SECTION 3rd

const checkForLength = (array) =>{
    let arraylength = array.length;
    return arraylength
}

const sentence = checkForLength("Hi I am Wall-E");
console.log(sentence);

//!SECTION 4th

const checkForIndex = (index) =>{
    return index[2]
}

const sentence1 = checkForIndex("sfassa");
console.log(sentence1);


//!SECTION 5TH

const checkForEven = (number) =>{
    if(number % 2 ===0){
        return "YESSSS EVEN"
    }
    else{
        return "NOOOO ODD"
    }
}
const numberForCheck = checkForEven(3);
console.log(numberForCheck);




let cupsConsumed = 56;
//!SECTION 6th
const amountOfCaffine = 95;

const caffineCalculator = (cups) =>{
    let calculateCaffine = cups * amountOfCaffine;
    return calculateCaffine;
   
}
 
const howMuchCaffine = caffineCalculator(cupsConsumed);
console.log(howMuchCaffine)


