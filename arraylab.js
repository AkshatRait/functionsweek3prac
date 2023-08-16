let oddNumbers = [1, 3, 5, 7, 9,  10, 11, 13, 15, 17, 19, 20];

// const checkForOdd = (numbers) =>{
//     oddNumbers.forEach((numbers)=>{
//         if(!oddNumbers % 2 == 0 ){
//             console.log("all odd numbers")
//         }else{
//             console.log("there are even numbers here")
//         }
//     })
// }

// checkForOdd()

//!SECTION 1st problem
const checkForOdd = (number) =>{
    let allOdd = true;

    number.forEach((number)=>{
        if(number % 2 == 0){
            allOdd = false;
        }
    })

    if(allOdd){
        console.log("All numbers here are odd")
    }else{
        console.log("There are even numbers here")
    }
}

checkForOdd(oddNumbers);

//!SECTION 2nd

const fahrenheitTemps = [32, 50, 68, 86, 104, 122, 140, 158, 176, 194];

const avgTemp = (temperatures) =>{
    let sum = 0;
    let maxTemp = temperatures[0];

    for(let i = 0; i <temperatures.length; i++){
        sum += temperatures[i];

        if(temperatures[i] > maxTemp){
            maxTemp = temperatures[i];
        }
    }
    
    const average = sum / fahrenheitTemps.length;
    console.log(average);
    console.log(maxTemp);


}

avgTemp(fahrenheitTemps);


//!SECTION 3rd

const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

const favoriteFruit = (array ,favoritePick) =>{
    const shouldAdd = true; 
   array.forEach((fruit)=>{
        if(fruit === favoritePick){
            console.log(fruit)
        }
    })
    if(shouldAdd){
        array.push(favoritePick)
    }}

favoriteFruit(fruits , "Peach")
console.log(fruits);

//!SECTION 4th
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"];

const shortenMonth = (array) =>{
    const newListOfArrays = array.map((month)=>{
        return month.substring(0 ,3) 
    })
    return newListOfArrays
}
const shortenedMonths = shortenMonth(months)
console.log(shortenedMonths);


//!SECTION 5th

const mixedData = [42, 'hello', true, 3.14, 'world', false, null, undefined, 'goodbye', 7];

const onlyStrings = (array) =>{
    const stringsOnly = [];
    for(let i = 0; i < array.length; i++){
       if(typeof array[i] === 'string'){
        stringsOnly.push(array[i])
    }
}
return stringsOnly;
}

const stringsOnly = onlyStrings(mixedData);
console.log(stringsOnly);



let websiteList = ["Facebook" , "Amazon" , "Google"];

const website = (array) =>{
    let existence = false;
    array.forEach((website)=>{
        if(website !== "CodeWars"){
            existence = false;
            array.push("CodeWars")
            console.log(array);
        }
        
    })
}