let shoppingList = ['Apples', 'Milk', 'Bread', 'Eggs'];

const readList =(array) => {
    array.forEach((item)=> {
    // console.log(item);
}) 
}

readList(shoppingList);

const removeFromList = (someArray , itemToRemove) =>{
    someArray.forEach((thing , index) =>{
        if(thing === itemToRemove){
            array.splice(index, 1)
            console.log(thing)
        }
    })
}

removeFromList(shoppingList , "bread")
console.log(shoppingList)

// const removeAnItem = (array, itemToRemove) =>{
//     const newArray = array.map((thing) =>{
//         if(thing !== itemToRemove){
//             return thing
//         }
//     })
//     console.log(newArray)
// }

// const itemToRemove = "Apples";
// removeAnItem(shoppingList , itemToRemove)


const addToList = (array, itemToAdd) =>{
    if(!typeof itemToAdd === "string"){
        return
    }

    let shouldAdd = true;
    array.forEach((thing) => {
        if(thing === itemToAdd || typeof itemToAdd !== typeof thing){
            shouldAdd = false;
            console.log(shoppingList, `Item already added`)
        }
    })
    if(shouldAdd){
        array.push(itemToAdd)
    }
}


addToList(shoppingList , "Bagels")
console.log(shoppingList)



let highschores = [1024, 876 , 1500 , 720, 950];

highschores.push(2000);
//remove all scores that are this number
const removeScores = (scoreToRemove) =>{
    highschores.forEach((score , index)=>{
        if(score === scoreToRemove){
            highschores.splice(index , 1)
        }
    })
}

removeScores(1500);
console.log(highschores)