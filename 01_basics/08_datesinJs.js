let myDate = new Date()
console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2025, 0, 8)
// let myCreatedDate = new Date(2025, 0, 23, 5, 6)
// let myCreatedDate = new Date("2025-01-02")
let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);


newDate.toLocaleString('default',{
    weekday: "long",

})
