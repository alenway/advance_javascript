const accountId = 144523;
let accountEmail = 'alsidjflsjdfilj@gmail.com';
let accountPassword = '1234'; // Changed `var` to `let`
accountCity = 'Ajmer'; // Explicitly declared `accountCity`//
let accountState; // Default value will be `undefined`

/*

dont use var keyword

*/

// accountId = 3; // ❌ Not allowed (const can't be reassigned)
accountEmail = 'lsidf@gmail.com';
accountPassword = '2394879';
accountCity = 'Pune';

console.log(accountId);

// Correcting console.table usage
console.table({
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
});
