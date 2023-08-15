// const getCurrentYear = () => {
//     let currentYear = new Date().getFullYear();
//     return currentYear;
//   }
  
//   console.log(getCurrentYear());



//   const getMonth = () =>{
//     let currentMonth = new Date().getMonth();
//     return currentMonth+1
//   }

// console.log(getMonth())  

// if(getMonth() == 7){
//     cost = cost*.8
// }


//ANCHOR - I want a function that will RETURN a random number

// const getRandomNumber = () =>{
//     let randmonNum = Math.floor(Math.random()*100)
//     return randmonNum;
// }

// console.log(getRandomNumber())

//ANCHOR - FavFood

// const person = "Svitlana";

// const returnFavoriteFood = (personFromCall) => {

//     if (personFromCall === "Svitlana"){
//         return "Meat";
//     }else if(personFromCall === "Marco"){
//         return "Steak";
//     }else if(personFromCall === "Kelly"){
//         return "Dim Sum";
//     }
// }

// console.log("the favortie food of" , person , "is" , returnFavoriteFood(person))

//ANCHOR - example

// const canRide = (height , rideIsDangerous) =>{
//     if(height < 120 && rideIsDangerous){
//         return false
//     }else{
//         return true
//     }
// }

// let jennyHeight = canRide(110 , true);

// console.log(jennyCanRide)

//ANCHOR - example 2

// const checkEmail = (email) => {
//     let emailLength = email.length;
//     console.log(emailLength);
//     if(emailLength > 50){
//         return "Your email is too long!"
//     }else if(emailLength < 10){
//         return "Your email is too short"
//     }else{
//         return "Needs to be more than 10 and less 50 letters"
//     }
// }

// // let errorMessage =
//  let userEmail = checkEmail( "dasjjhkhjkhkhjkhhjkdas")
//     if(userEmail){
//         console.log(userEmail)
//     }
//   userEmail = checkEmail("Francis@francisIsAwesome.com")

  
//  console.log(checkEmail(userEmail) + `@gmail.com`);
// if(errorMessage){
//     console.log(errorMessage)


//check if email length is good & if email has @ symbol

// const returnEmailIsValid = (email) =>{
//     if(email.length <10 || email.length >50 || !email.includes('@')){
//         return false
//     } else{
//         return true
//     }
// }
//     const emailIsValid = returnEmailIsValid("ak@gmail.com")
//     if(emailIsValid){
//         console.log("Welcome to the site!")
//     }else{
//         console.log("Enter a valid email")
//     }


//ANCHOR - example

let peopleInResturant = 0;
const maxPeople = 50;

const addPeopleToResturant = (numberOfPeople) =>{
    if(peopleInResturant + numberOfPeople > maxPeople){
        console.log(`Cannot add because there is no space`)
    }else{
        peopleInResturant += numberOfPeople
        console.log(`the number of people is now: ` , peopleInResturant)
    }
    
}

addPeopleToResturant(0)

addPeopleToResturant(10)