console.log("<--**********  ONE  **********-->");
function sayHello(Name, Gender) {
  if (Gender === undefined) {
    console.log(`Hello ${Name}`);
  } else if (Gender === "Male") {
    console.log(`Hello Mr ${Name}`);
  } else if (Gender === "Female") {
    console.log(`Hello Miss ${Name}`);
  }
}

sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh");

console.log("<--**********  Two  **********-->");
function calculate(firstNum, secondNum, operation) {
  if (operation === "add") {
    console.log(firstNum + secondNum);
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation === "multiply") {
    console.log(firstNum * secondNum);
  } else if (secondNum === undefined) {
    console.log(`Second Number Not Found`);
  } else {
    console.log(firstNum + secondNum);
  }
}
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
console.log("<--**********  Three  **********-->");
function ageInTime(theAge) {
  if (theAge > 100 || theAge < 10) {
    console.log(` Age Out Of Range`);
  } else {
    console.log(`Your age in months is ${theAge * 12}`);
    console.log(`Your age in weeks is ${theAge * 12 * 4}`);
    console.log(`Your age in days is ${theAge * 12 * 4 * 7} `);
    console.log(`Your age in hours is ${theAge * 12 * 4 * 7 * 24}`);
    console.log(`Your age in minuts is ${theAge * 12 * 4 * 7 * 24 * 60}`);
    console.log(`Your age in seconds is ${theAge * 12 * 4 * 7 * 24 * 60 * 60}`);
  }
}
ageInTime(110); // Age Out Of Range
ageInTime(15);
console.log("<--**********  Four  **********-->");
function checkStatus(a, b, c) {
  let age;
  let name;
  let status;
  if (typeof a === "string") {
    name = a;
  } else if (typeof a === "number") {
    age = a;
  } else {
    status = a;
  }
  if (typeof b === "string") {
    name = b;
  } else if (typeof b === "number") {
    age = b;
  } else {
    status = b;
  }
  if (typeof c === "string") {
    name = c;
  } else if (typeof c === "number") {
    age = c;
  } else {
    status = c;
  }
  if (status === true) {
    status = "You Are Available For Hire";
  } else {
    status = "You Are Not Available For Hire";
  }
  document.write(`<p>Hello ${name}, Your Age Is ${age}, ${status}</p>`);
}

checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

console.log("<--**********  FIVE  **********-->");
function createSelectBox(startYear, endYear) {
document.write(`<select>`);
for(i = startYear;i<=endYear;i++){
  document.write(`<option value = ${i}>${i}</option>`)
}
document.write(`</select>`);
}
createSelectBox(2000, 2024);
console.log("<--**********  SEX  **********-->");
function multiply(...numbers){
    let result = 0;
    for(let j = 0; j < numbers.length; j++){
        if(typeof numbers[j] === "string"){
            continue;
        }else{
            result = parseInt(numbers[j - 1]) * parseInt(numbers[j]);
        }
    }
    return result;
}


console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000