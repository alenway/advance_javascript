// Immediately Invoked Function Expression (IIFE)

// function hello(){
//     console.log("db connected");
// }

// named iife
(function hello(){
    console.log("db connected");
})();

// to avoide global scope pollution

// arrow iife functions
((name) => {
    console.log(`db connected well ${name}`);
})("nitin")
