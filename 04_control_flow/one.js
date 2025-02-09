// if
// const isUserLoggedIn = true
// const temperature = 41

// if(temperature < 50){
// console.log("less than 50");

// } else{
//     console.log("temperature is greater than 50");

// }

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

const balance = 1000

// if(balance > 500) console.log("test");

// if(balance < 500){
//     console.log("less than 500");
// } else if(balance < 750){
//     console.log("less than 750");
// } else{
//     console.log("greater");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = false
const loggedInFromGoogle = true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to by course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}
