const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function (items) {
//     console.log(items);

// })

// coding.forEach((item)=>{
//     console.log(item);

// })

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)


// coding.forEach((item, index, arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        lanugageName: "javascript",
        languageFileName: "js"
    },
    {
        lanugageName: "java",
        languageFileName: "java"
    },
    {
        lanugageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.lanugageName);
})
