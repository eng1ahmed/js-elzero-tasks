//one

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1_0_0_0_0_0); // 100000
console.log(10_00_00); // 100000
console.log(100_0e2); // 100000
console.log(1000_0_0); // 100000
console.log(10000_0); // 100000
console.log(100000.0); // 100000
console.log(10 ** 5); // 100000
console.log(10e4); // 100000
console.log(10 * 10 * 10 * 10 * 10); // 100000
console.log(10 * 10e3); // 100000

//two

console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

//three
console.log(Number.MAX_SAFE_INTEGER.toString().length);

//four
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57

//five
let num = 10;

console.log(Number(Number.isInteger(num)) + Number(Number.isInteger(num))); // 2

//six

let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(flt.toFixed(0)); // 10
console.log(parseFloat(flt.toFixed(0))); // 10
console.log((flt.value = parseInt(flt))); // 10

//seven
console.log(Math.random() * 5); // 0 || 1 || 2 || 3 || 4

//eight
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.split("", 1).toString().toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase().repeat(3)); // eee


//nine
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True