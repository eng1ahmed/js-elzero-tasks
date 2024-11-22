console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log((110 - 100 == 10) != 20); // true
console.log(-10 == "-10"); // true
console.log(-(-50) != +"-40"); // true
console.log(+10 !== -"-40"); // true
console.log(+"10" == 10); // true
console.log(+20 > false); // true

//two
let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num1 != num2); // true
console.log(num1 <= num2); // true
console.log(num1 !== num2); // true
console.log(num2 > num1); // true
console.log(!(num1 == num2)); // true

// three
// Test Case 1
let num = 9; // "009"
num < 10 ? console.log(`00${num}`) : num;
// Test Case 2
num = 20; // "020"
num > 10 && num < 100 ? console.log(`0${num}`) : num;

// Test Case 3
num = 110; // "110"
num >= 100 ? console.log(num) : num;

//four
let num0 = 9;
let str = "9";
let str2 = "20";
num0 == str ? console.log("{num1} Is The Same Value As {str}") : null;
num0 == str && num0 !== str
  ? console.log("{num1} Is The Same Value As {str} But Not The Same Type")
  : null;
num0 != str2 && num0 !== str2
  ? console.log("{num1} Is Not The Same Value Or The Same Type As {str2}")
  : null;
str != str2 && str !== str2
  ? console.log("{str} Is The Same Type As {str2} But Not The Same Value")
  : null;

//five
let num02 = 10;
let num3 = 30;
let num4 = "30";
num4 > num02 && num4 !== num3
  ? console.log(
      "30 Is Larger Than 10 And Type string Not The Same Type As number"
    )
  : null;
num4 > num02 && num4 == num3 && num4 !== num3
  ? console.log(
      "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
    )
  : null;
num4 !== num02 && num4 !== num3 && num4 !== num02
  ? console.log(
      "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
    )
  : null;

//six
// Edit What You Want Here

let num01 = 15;
let num002 = 10;
let num03 = 15;
let num04 = 41;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num01 > num002) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num01 > num002 && num01 < num04) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num01 > num002 && num01 === num03) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num01 + num002 < num04) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num01 + num03 < num04) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num01 + num002 + num03 < num04) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num04 - (num01 + num03) + num002 === 21) {
  console.log("True");
} else {
  console.log("False");
}

//seven
let day = "   world  ".toUpperCase().trim(" ");
// You Need To Remove Spaces And Make First Letter Capital => Friday
switch (day) {
  case (day = "Friday").trim(" ").toUpperCase():
    console.log("No Appointments Available");
    break;
  case (day = "Saturday").trim(" ").toUpperCase():
    console.log("No Appointments Available");
    break;
  case (day = "Sunday").trim(" ").toUpperCase():
    console.log("No Appointments Available");
    break;
  case (day = "Monday").trim(" ").toUpperCase():
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case (day = "Thursday").trim(" ").toUpperCase():
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case (day = "Tuesday").trim(" ").toUpperCase():
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case (day = "Wednesday").trim(" ").toUpperCase():
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default:
    console.log("Its Not A Valid Day");
    break;
}
