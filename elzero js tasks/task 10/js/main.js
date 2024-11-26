let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let map = mix.map(function (ele) {
  return isNaN(ele) ? ele : "";
});
console.log(map);
let reduce = map.reduce(function (calc, current) {
  return calc + current;
});
console.log(reduce);
//two
console.log("###############");
let myString = "EElllzzzzzzzeroo";
let f = myString.split("").filter(function (ele, index) {
  return myString.indexOf(ele) === index;
});
console.log(f.join(""));
console.log("###############");
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let newArray = myArray
  .reduce(function (acm, curr) {
    return acm + curr;
  })
  .split("")
  .filter(function (ele) {
    return ele !== ",";
  })
  .reduce(function (acm, curr) {
    return acm + curr;
  });
console.log(newArray);
console.log("###############");
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let nmap = numsAndStrings
  .filter(function (ele) {
    return !isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return -ele;
  });
console.log(nmap);
// [-1, -10, 10, 20, -5, -3]
console.log("###############");
let nums = [2, 12, 11, 5, 10, 1, 99];
let mnums = nums.reduce(function (acm, curr) {
  return curr % 2 === 0 ? acm * curr : acm + curr;
});
console.log(mnums);
// 500
