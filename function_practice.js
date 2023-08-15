const answerOne = "lorem ipsum"
const answerTwo = "This is Answer two"
const answerThree = "This is Answer three"

//write a function that will count the length of the strings

const returnCount = (ans1, ans2, ans3) => {
    return  ans1.length + ans2.length + ans3.length;
}

let count1 = returnCount(answerOne, answerTwo, answerThree);
console.log(count1);



const isDivisible = (checkNumber) =>{
    if(checkNumber % 3 == 0){
        return "True,  Divisible by 3";
    }
    else if(checkNumber % 5 == 0){
        return  "True ,Divisible by 5";
    }
    else{
        return "FALSE, NOT DIVISIBLE"
    }
}

const product = isDivisible(2);
console.log(product);


const prompt = "Hi I am Akshat"

const checkStringForLength = (inputWord) => {
    let stringLength = inputWord.split(' '); 
    return stringLength;
}



const theSentence = checkStringForLength(prompt)
console.log(theSentence)

const checkStringForSize = (stringLength) =>{
    for(let i = 0; i < stringLength.length; i++){
     console.log(i) ;
    }
}

const theSentence2 = checkStringForSize(prompt)
console.log(theSentence2)