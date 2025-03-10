// singleton
// object.create

// symbol
const mySym = Symbol('key1');

// object literals

const jsuser = {
  name: 'nitin',
  'full name': 'nitin soni',
  [mySym]: Symbol('mykey1'),
  age: 18,
  location: 'ajmer',
  email: 'email@gmail.com',
  isLoggedIn: false,
  lastLoginDays: ['Monday', 'Saturday'],
};

// console.log(jsuser["full name"]);
// console.log(jsuser["email"]);
// console.log(typeof jsuser[mySym]);

// Freeze

jsuser.email = 'nitinsoni@gamil.com';
// console.log(jsuser.email);
// Object.freeze(jsuser)
jsuser.email = 'nitin@gmail.com';
// console.log(jsuser.email);

// jsuser.greeting = function() {
//     console.log("hello js user");
// }

// jsuser.greetingTwo = function(){
//     console.log(`hello js user , ${this.name}`);
// }

// jsuser.greeting()
// jsuser.greetingTwo()
