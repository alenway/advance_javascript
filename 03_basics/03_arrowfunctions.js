const user = {
    username: "nitin",
    price: 987,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);

    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function hello(){
//     let username = "nitin"
//     console.log(this.username);

// }

// hello()

// Arrow functions

const hello = () => {
    let username = "nitin"
    console.log(this);
}

// hello()

// const addtow = (num1, num2) => {
//     return num1 + num2
// }

// const addtow = (num1,num2) => num1 + num2

// const addtow = (num1,num2) => (num1 + num2)

const addtow = (num1, num2) => ({username: "nitin"})

console.log(addtow(1,4));
