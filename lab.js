//ANCHOR - 1st Problem
const logMyName = () =>{
    let myName = "Akshat";
    return myName
  }
 console.log(logMyName())


//ANCHOR - 2nd Problem
 const logThisName = (personName) =>{
    console.log(personName);
 }
 
logThisName("Akshat")

logThisName("Bryan")


//TODO - FIXME -3rd problem

let checkName = (personFromCall) =>{
    if(personFromCall == "Joyce"){
       console.log("You are Joyce") 
    }else{
        console.log("You are not Joyce")
    }
}

checkName("Joyce")
checkName("Chase")
checkName("Jerry")




//ANCHOR - 4th problem
const doLoop = () =>{
    for (let i = 0; i < 11; i++){
       console.log(i);
}
}

doLoop()
doLoop()
doLoop()


//ANCHOR - 5th Problem
const doLoopWithThisNumber = (numberToBeStoppedAt) =>{
    for (let i = 0; i < numberToBeStoppedAt; i++){
    console.log(i);
    
}
}

doLoopWithThisNumber(10)
doLoopWithThisNumber(100)
doLoopWithThisNumber(78)
doLoopWithThisNumber(22)
doLoopWithThisNumber(15)

//ANCHOR - 6th problem

const customName = (x, y) =>{
    let sum = x + y; 
    console.log(sum)
}

customName(10 , 20)
customName(16 , 25)
customName(156460 , 211)


//ANCHOR - 7th problem

const evenOrOdd = () =>{
    if(checkNumber % 2==0){
        console.log("even")
    }else{
        console.log("odd")
    }
}

evenOrOdd(checkNumber = 15)
evenOrOdd(checkNumber = 18)


//ANCHOR - 10th problem

const dataTypeOf = (data) =>{
    console.log(typeof data);
}

dataTypeOf("sas")



let favMovies = ["Spy Kids" , "Spy Kids 2 " , "Barbie"]