
let font = document.querySelector("#font");
let color = document.querySelector("#color");
let size = document.querySelector("#size");
let h1 = document.querySelector("h1");
font.onchange = function () {
   localStorage.setItem("font", font.value);
  h1.style.fontFamily = font.value;
};
color.onchange = function () {
   localStorage.setItem("color", color.value);
  h1.style.color = color.value;
};
size.onchange = function () {
   localStorage.setItem("size", size.value);
  h1.style.fontSize = size.value;
};

h1.style.fontFamily =  localStorage.getItem("font");
h1.style.color =  localStorage.getItem("color");
h1.style.fontSize =  localStorage.getItem("size");

font.value = localStorage.getItem("font");
color.value = localStorage.getItem("color");
size.value = localStorage.getItem("size");

//two
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let select = document.querySelector("#select");

one.oninput = function () {
  sessionStorage.setItem("firstName", one.value);
};
two.oninput = function () {
  sessionStorage.setItem("lastName", two.value);
};
three.oninput = function () {
 sessionStorage.setItem("Phone", three.value);
};
select= function () {
  sessionStorage.setItem("select", select.value);
};
one.value = sessionStorage.firstName;
two.value = sessionStorage.lastName;
three.value = sessionStorage.Phone;
select.value = sessionStorage.getItem("select");

console.log(select.value)