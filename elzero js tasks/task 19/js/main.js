// // OOP

// //constructor function
// class User {
//     constructor(id, username, salary) {
//         this.i = id;
//         this.u = username || "unknown";
//         this.s = salary < 6000 ? +500 : salary;
//         this.msg = function(){
//             return `Hello ${this.u} your salary is ${this.s}`
//         }
//     }
// }
// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "Hassan", 6000);
// let userThree = new User(102, "Sayed", 7000);

// console.log(userOne.i);
// console.log(userOne.msg());

// console.log(userTwo.i);
// console.log(userTwo.msg());

// //instance of
// //constructor

// One
class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
    this.Msg = function () {
      return `Car One Name Is ${this.n} And Model Is ${this.m} And Price Is ${this.p}`;
    };
  }
  run() {
    return "Car Is Running Now";
  }
  stop() {
    return "Car Is stoping Now";
  }
}
let carOne = new Car("MG", 2022, 420000);
console.log(carOne.Msg());
console.log(carOne.run());
// Needed Output

// ("Car One Name Is MG And Model Is 2022 And Price Is 420000");
// ("Car Is Running Now");

// Two
class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here
class Tablet extends Phone {
  constructor(name, serial, price, size) {
    super(name, serial, price);
    this.s = size === undefined ? (this.s = "Unknown") : size;
  }
  fullDetails() {
    return `${this.name} Serial is ${this.serial} And Size Is ${this.s}`;
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

//three
// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  creditCard() {
    return this.#c.toString().match(/\d{4}/g).join("-");
  }
  get showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.creditCard()}`;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined

//four
// Do Not Edit Below
let myStr = "Elzero";
String.prototype.addLove = function () {
  return `I love ${this} web school`;
};
console.log(myStr.addLove()); // I Love Elzero Web School

//five
const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here
Object.defineProperty(myObj, "score", {
  writable: false,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(myObj, "id", {
  writable: true,
  enumerable: false,
  configurable: true,
});

delete myObj.country;
myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

("username => Elzero");
("score => 1000");
{
  username: "Elzero";
  score: 1000;
  id: 100;
}
