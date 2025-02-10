// for loop

// for (let index = 0; index < 10; index++) {
//     const element = array[index];
//     console.log(element);
// }

// for (let i = 0; i < 10; i++) {
//   console.log("outer loop value: ");
//   for (let j = 0; j < 10; j++) {
//     console.log(`innder loop value ${j} and inner loop ${i}`);
//     console.log(i  + "*"  + j + " = " + i*j);
//   }
// }

// let myArray = ["flash", "batman","superman"]
// console.log(myArray.length);
// for(let i = 0; i < myArray.length; i++){
//     const element = myArray[i];
//     console.log(element);
// }


// break and continue

// for (let index = 0; index < 20; index++) {
//     if(index == 5){
//         console.log(`detect 5`);
//         break
//     }
//     console.log(`value of i is ${index}`);
// }

for (let index = 0; index < 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue
    }
    console.log(`value of i is ${index}`);
}
