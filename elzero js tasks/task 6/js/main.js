// one
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
myFriends.length = 4;
myFriends.splice(-1, -2);
// Method 2
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//two
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.length = 3;
friends.shift(2, 5);
console.log(friends); // ["Eman", "Osama"]

//three
let arrOne = ["C", "D", "X"];
let arrTwo = [, "A", "B", "Z"];
let finalArr = arrOne.concat(arrTwo);
// Write One Single Line Of Code

console.log(finalArr.sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

//four
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2,8).toUpperCase()); // ZERO


//five
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if(haystack.indexOf(needle) != -1){
console.log('found')
}
else{
    console.log('not found')
}
if(haystack.includes(needle)){
console.log('found')
}
else{
    console.log('not found')
}
if(haystack = needle){
console.log('found')
}
else{
    console.log('not found')
}

//six
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = arr1.concat(arr2).sort().splice(arr2.length);

// Your Code Here

console.log(allArrs); // fxy