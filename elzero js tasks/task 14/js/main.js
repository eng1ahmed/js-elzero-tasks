// let prompmsg = window.prompt("Print Number From - To", "Example: 5-20");
// let prompnum = prompmsg.split("-").sort((a, b) => a - b);

// for (let i = +prompnum[0]; i <= prompnum[1]; i++) {
//   let num = document.createElement("div");
//   num.textContent = i;
//   document.body.append(num);
// }

// $$$$$$$$$$$$$$$$$$$$$

let parent = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");
let btn = document.createElement("button");

function popup() {
  h1.textContent = "Welcome";
  p.textContent = "Welcome To My Web Site";
  btn.textContent = "X";

  parent.append(h1, p, btn);
  document.body.append(parent);

  btn.addEventListener("click", function () {
    btn.parentElement.remove();
  });
  document.body.style.cssText = "font-family:arial,Tahoma";
  parent.style.cssText =
    "width:350px; height:150px; background:#eee;padding:20px;border:1px solid #cc;margin:20px auto;position:relative;text-align:center;";

  btn.style.cssText =
    "position:absolute;top:-10px;right:-10px;border:5px solid white;color:white;background:red;border-radius:50%;padding:8px;cursor:pointer;";
}
setTimeout(popup, 5000);

let div = document.querySelector("p");

function countdown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(counter);
    div.innerText = "Done !";
    // location.href = "https://elzero.org";
    open("https://elzero.org","_blank","width=400,height=600");
  }
}
let counter = setInterval(countdown, 1000);
