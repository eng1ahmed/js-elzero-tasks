// //introduction
// let mystring =
//   "Hello every one my name is ahMed SaYed and i love ahmed elsayed";
// let regex = /Sayed/gi;
// console.log(mystring.match(regex));
// console.log("#".repeat(40));
// //range
// let tld = "com net org info code io ";
// let tldRe = /(org|info|io)/i;
// console.log(tld.match(tldRe));
// //  [A-B]
// let nums = "12345678910";
// let nrang = /[0-9]/i;
// console.log(nums.match(nrang));
// //  [^A-B]
// let nums2 = "12345678910";
// let nrang2 = /[^0-2]/gi;
// console.log(nums2.match(nrang2));

// let spcn = "1!2@3#4$5%6^7&8*9(";
// let spcnre = /[^0-9]/gi;
// console.log(spcn.match(spcnre));

// // practice
// let prac = "os1 os1os os2 os11 os11os";
// let practr = /os[5-9]os/g;
// console.log(prac.match(practr));

// //reg part 2
// let myString = "AaBbCdefG123!234%^&*";
// let atozsmall = /[a-z]/g;
// let notatozsmall = /[^a-z]/g;
// console.log(myString.match(atozsmall));
// console.log(myString.match(notatozsmall));

// let myString2 = "AaBbCdefG123!234%^&*";
// let atozcap = /[A-Z]/g;
// let notatozcap = /[^A-Z]/g;
// console.log(myString.match(atozcap));
// console.log(myString.match(notatozcap));

// // charcter class one

// let email = "O@@@g...com O@g.net A@Y.com O-g.com o@s.org 1@1.com";

// let dot = /./g;
// let word = /\W/g;
// let valid = /\w@\D.(com|net)/g;
// console.log(email.match(dot));
// console.log(email.match(word));
// console.log(email.match(valid));

// // . => any charcter
// // \w => matches word charcters
// // \W => non charcters
// // \d => any digital 0-9
// // \D => any non digital
// // \s whitespace charcters
// // \S non whitespace charcters

// // charcter class one

// let names = "Sayed 15pam 25pam 35pam Spam4 Spam5 Osama Ahmed Aspamo";

// let re = /(\bspam|spam\b)/gi;
// console.log(names.match(re));

// console.log(re.test(names));

// // Quantifiers

// // n+...=> one or more
// // n*...=> zero or more
// // n?...=> zero or one

// // Quantifiers part 2

// // n{x} => number of
// // n{x,y} => range
// // n{x,} => at lest x

// let serials = "S100S S3000S S50000S S950000S";

// console.log(serials.match(/s\d{3}s/gi));
// console.log(serials.match(/s\d{4,5}s/gi));
// console.log(serials.match(/s\d{4,}s/gi));

// // Quantifiers part 3

// // $ => end with something
// // ^ => start with something
// // ?= => followed by something
// // ?! => followed by something

// let myString3 = "we love programming";
// let names2 = "10osamaZ 2AhmedZ 3Mohammed 4MoustafaZ %GamalZ";

// console.log(names2.match(/\d\w{5}(?=z)/gi));
// console.log(names2.match(/\d\w{8}(?!z)/gi));
// console.log(/lz$/gi.test(names2));

// console.log("#".repeat(40))
// // form practice

// document.getElementById("register").onsubmit = function () {
//   let phoneInp = document.getElementById("phone").value;
//   let phonere = /\(\d{4}\)\s\d{3}-\d{4}/;
//   let validationres = phonere.test(phoneInp);

// if(validationres === false){
// return false;
// }

//   return true;
// };

// //  - Test Your Regular Expressions

//start assignment
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let regip = /(\d+|\D+)+/gi;
console.log(ip.match(regip));

//two
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let regname = /os\d*o/gi;
console.log(specialNames.match(regname));
// Output
// ['Os10O', 'OsO', 'Os100O']

//three
let phone = "+(995)-123 (4567)";
let regphone = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/gi;
// let phoneRe = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig;
console.log(phone.match(regphone));

//four
let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
// https?:\/\/: Matches either http:// or https:// at the beginning of the URL.
// (?:[-\w]+\.)?: Matches an optional subdomain part, like www., subdomain., etc.
// ([-\w]+): Captures the main domain name (e.g., google, example) in a group.
// \.\w+: Matches the top-level domain (e.g., .com, .org, .net).
// (?:\.\w+)?: Matches an optional second-level top-level domain (e.g., .co.uk).
// **\/?.\**: Matches any character, including /, zero or more times.
// i: Makes the match case-insensitive.

// five
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let date = /\d{2}(\/|\s-\s|\s)\d{2}(\/|\s-\s|\s)(\d{4}|\d{2})/gi;

console.log(date1.match(date)); // "25/10/1982"
console.log(date2.match(date)); // "25 - 10 - 1982"
console.log(date3.match(date)); // "25 10 1982"
console.log(date4.match(date)); // "25 10 82"

// six
let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let url = /(https?:\/\/(?:[-\w]+\.)?)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/ig; // Write Your Pattern Here
console.log(url1.match(url));
console.log(url2.match(url));
console.log(url3.match(url));
console.log(url4.match(url));
console.log(url5.match(url));
