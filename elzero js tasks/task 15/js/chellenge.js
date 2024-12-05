let lis = document.querySelectorAll("ul li");
    let active = document.querySelector("#active");

if( localStorage.getItem("color")){
 active.style.backgroundColor = `${localStorage.color}`;

 //remove
     lis.forEach((li) => {
       li.classList.remove("active");
     });

     //add active
     document.querySelector(`[data-color="${localStorage.color}"]`).classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);
    //style
    active.style.backgroundColor = `${e.currentTarget.dataset.color}`;
    //remove
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    //add
    e.currentTarget.classList.add("active");

    //local
     localStorage.color =  `${e.currentTarget.dataset.color}`;
  });
});
