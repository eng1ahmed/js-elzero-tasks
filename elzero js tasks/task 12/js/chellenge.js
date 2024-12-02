let nele = document.querySelector("[name='elements']");
let etxt = document.querySelector("[name='texts']");
let select = document.querySelector("select");
let btn = document.querySelector(".submit");
let container = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(auto-fill,minmax(250px,1fr)";
container.style.gap = "1%";

function create(i) {
  let div = document.createElement("div");
  let h2 = document.createElement("h2");
  document.body.appendChild(container);
  container.style.textAlign = "center";
  container.appendChild(div);
  div.appendChild(h2);
  div.setAttribute("id",`id-${i}`)
  div.style.background = "red";
  div.style.width = "200px";
  div.style.height = "fit-content";
  div.style.display = "block !important";
  div.style.padding = "10px";
  div.style.color = "white";
  div.style.textAlign = "center";
  h2.innerHTML = etxt.value;
}
document.forms[0].onsubmit = function (e) {
  for (let i = 0; i < nele.value; i++) {
    create(i);
  }
  e.preventDefault();
};
