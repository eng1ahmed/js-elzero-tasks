//one
const element = document.getElementById("elzero");
//two
const elements = document.getElementsByClassName("element");
const element2 = elements[0]; // نختار العنصر الأول
//three
const elements2 = document.getElementsByName("js");
const element3 = elements[0];
//four
const elements3 = document.body.children;
// البحث عن العنصر المطلوب داخل المجموعة
//five
// let element4 = document.firstChild;
// while (element4) {
//   if (element4.id === "elzero") {
//     break;
//   }
//   element = element.nextSibling;
// }
//sex
const element5 = document.querySelector("#elzero");
// أو
const element6 = document.querySelector('div[id="elzero"]');
//seven

const element7 = document.querySelectorAll(".element")[0];

console.log("###########################");
// let mimages = document.images;
// for (i = 0; i < mimages.length; i++) {
//   mimages[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//   mimages[i].alt = "Elzero Logo";
// }
console.log("###########################");
let input = document.querySelector("input");
let result = document.getElementsByClassName("result")[0];

input.oninput = function () {
  result.innerHTML = `${input.value} USD Dollar =></br> ${(
    input.value * 15.6
  ).toFixed(2)} Egyptian Pound`;
};
let elone = document.getElementsByClassName("one")[0];
let eltwo = document.getElementsByClassName("two")[0];

elone.title = elone.className;
eltwo.title = eltwo.className;
elone.textContent = elone.className;
eltwo.textContent = `${eltwo.className} ${eltwo.attributes.length}`;




let image = document.querySelectorAll("img")
for(i=0; i< image.length;i++){
  if(image[i].hasAttribute("alt")){
    image[i].alt = "old";
  }
  else{
    image[i].alt ="Elzero New";
  }
}