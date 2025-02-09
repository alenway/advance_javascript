function sayMyName() {
    console.log("N");
    console.log("I");
    console.log("T");
    console.log("I");
    console.log("N");
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

// const result = addTwoNumbers(3,5)
// console.log("result: ", result);

function loginUserMessage(username = "sam"){
    // if(username === undefined){
    if(!username){
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("nitin"));

// console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500));

const user = {
    username: "nitin",
    prices: 1999,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "nitin",
    price: 8293,
})

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
