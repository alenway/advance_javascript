// {} scope
// windows scope
// global scope
// node scope

if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "nitin"

    function two(){
        const website = "youtube"
        console.log((username));
    }

    // console.log(website);

    // two()
}

// one()

if(true){
    const username = "nitin"
    if(username === "nitin"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// -----------------*** Important *** ---------------------

// named functions

console.log(addone(5)); // hoisting

function addone(num){
    return num + 1
}

// addone(5)

// function expression

// console.log(addTwo(5)); hoisting this will give error because of function expression

const addTwo = function(num){
    return num + 2
}

// addTwo()
console.log(addTwo(5));
