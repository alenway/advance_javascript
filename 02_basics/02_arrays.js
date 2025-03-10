const marvel_heros = ['thor', 'spiderman', 'ironman'];
const dc_heros = ['superman', 'flash', 'batman'];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const anotherArrya = [
  1,
  2,
  3,
  4,
  5,
  [6, 7, 8],
  [9, 10, [11, 12, 13, [14, 15, 16]]],
];
const real_another_array = anotherArrya.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("nitin"))
// console.log(Array.from("nitin"))
// console.log(Array.from({name: "nitin"})); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1,score2,score3));

const riya = [1, 2, 3, 4, 5];
const shiv = [6, 7, 8, 9, 10];
const one = [...riya, shiv];

console.log(one);
