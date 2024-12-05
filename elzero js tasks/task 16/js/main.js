// chellenge

let chosen = 1;

const myFriends = [
    { title: 'Osama', age: 39, available: true, skills: ['HTML', 'CSS'] },
    { title: 'Ahmed', age: 25, available: false, skills: ['Python', 'Django'] },
    { title: 'Sayed', age: 33, available: true, skills: ['PHP', 'Laravel'] },
];

const [f1, f2, f3] = myFriends;

let friendDetails = function(friendObj){
    const {title: t, age: a, available: av, skills:[, s2]} = friendObj;

    console.log(t);
    console.log(a);
    console.log(av ? "available" : "Not Available");
    console.log(s2);
}

if(chosen === 1) friendDetails(f1);
if(chosen === 2) friendDetails(f2);
if(chosen === 3) friendDetails(f3);

//one
let myNumbers = [1, 2, 3, 4, 5];

let [a, b, c, d, e] = myNumbers;
console.log(a * e); // 5

//two
console.log("#####################");

let mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  ["PHP", "Python", ["Django", "Laravel"]],
];

let vars = [a, b, c, [d, e, [f, g]]] = mySkills;
console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

//three
console.log("#####################");
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here

let[, j, k, l] = arr3.concat(arr1);

console.log(`My Best Friends: ${j}, ${k}, ${l}`);

// My Best Friends: Shady, Mahmoud, Ahmed


//four
console.log("#####################");


const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
};

  // Write Your Destructuring Assignment Here

// const {age: ag, working: w, country: co, hobbies: [h1, , h3]} = member;
const {
  age: ag,
  working: w,
  country: co,
  hobbies: [h1, , h3],
} = member;

console.log(`My Age Is ${ag} And Iam ${w ? "" : "Not"} Working`);
  // My Age Is 30 And Iam Not Working

console.log(`I Live in ${co}`);
  // I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
  // My Hobbies: Reading And Programming


//five
console.log("#####################");

const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

const {title: t, developer: dev, releases} = game;
const [o, ab] = Object.keys(releases);
const [[u, jap], {US: u_price, JAP: j_price}, or] = Object.values(releases);


console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${dev} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${jap}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${ab}`);
// Although I Love Ark Of Napishtim

console.log(`${ab} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${ab} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD