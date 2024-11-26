
console.log("<--****************  ONE  **************-->");

let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i = i + 10) {
  if (i == 40) {
    continue;
  }
  console.log(i);
}

console.log("<--****************  TWO  **************-->");
let start0 = 10;
let end0 = 0;
let stop = 3;
for (a = start0; a > end0; a--) {
  if (a < 10) {
    console.log(`0${a}`);
  } else {
    console.log(`${a}`);
  }

  if (a === 3) {
    break;
  }
}
console.log("<--****************  THREE  **************-->");
let start1 = 1;
let end1 = 6;
let breaker = 2;
for (b = start1; b <= end1; b++) {
  console.log(b);
  nestedloop: for (c = breaker; c < end1; c += breaker) {
    console.log(`-- ${c}`);
  }
}
console.log("<--****************  FOUR  **************-->");
let index = 10;
let jump = 2;

for (d = 10; d > jump; d -= jump) {
  console.log(d);
}
console.log("<--****************  FIVE  **************-->");
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (e = 0; e < friends.length; e++) {
  if (friends[e][0] == letter.toUpperCase()) {
    continue;
  }
  console.log(`${e} =>${friends[e]}`);
}

console.log("<--****************  SIX  **************-->");
let start2 = 0;
let swappedName = "elZerO";
let resault = "";

for (h = start2; h < swappedName.length; h++) {
  if (swappedName[h] === swappedName[h].toLowerCase())
    resault += swappedName[h].toUpperCase();
  else if (swappedName[h] === swappedName[h].toUpperCase()) {
    resault += swappedName[h].toLowerCase();
  }
  console.log(resault);
}

console.log("<--****************  SEVEN  **************-->");
let start3 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for (j = start3 + true; j < mix.length; j++) {
if(typeof mix[j] === "string"){
  continue;
}
else if (typeof mix[j] === "number") {
  console.log(mix[j]);
} else {
  console.log("")
}
}
console.log("<--***********  Assignment TWO  ********-->");

console.log("<--****************  ONE  **************-->");

let friends1 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index1 = 0;
let counter = 0;
while (index1 < friends1.length) {
  index1++;
  if(friends1[index1][0] === "A"){
    continue;
  }
  if(typeof friends1[index1] === "number"){
    continue;
  }
    console.log(` => ${friends1[index1]}`);
}
