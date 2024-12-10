console.log("#".repeat(40));
//one
// Needed Output
let s = new Set([10]);
s.add(20).add(s.size);
console.log(s);
console.log(Array.from(s)[2]);

console.log("#".repeat(40));
//two
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log(myFriends.sort());

console.log("#".repeat(40));
//three
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let newMap = new Map(Object.entries(myInfo));
console.log(newMap);
console.log(newMap.size);
console.log(newMap.has("role"));
// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

console.log("#".repeat(40));
//four
let theNumber = 100020003000;

console.log(+[...new Set(theNumber.toString())].sort().slice(true).join(""));

console.log("#".repeat(40));
//five
let theName = "Elzero";

console.log([...theName]);
console.log(theName.split(""));
console.log(Array.from(theName));
console.log(Object.assign([], theName));
console.log([...new Set(theName)]);
// Needed Output
// ["E", "l", "z", "e", "r", "o"];

console.log("#".repeat(40));

//six

let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
chars.sort();
chars.copyWithin(0, 3, 6);
console.log(chars);

let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

chars2.sort();
chars2.copyWithin(0, 4, 8);
console.log(chars2);

let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];
chars3.copyWithin(2)
console.log(chars3)
// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"];


//seven
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne,...numsTwo]);
console.log(numsOne.concat(numsTwo));
numsOne.push(...numsTwo);
console.log(numsOne);


//eight
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Number(Math.max(...n1)) * [...n1,...n2].length)