let section = document.querySelector(".section")
let unhappy = document.querySelector("#unhappy");
let neutral = document.querySelector("#neutral");
let satisfied = document.querySelector("#satisfied");
let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let div3 = document.querySelector(".div3");
let eyes = document.querySelector("#eyes");
let btn = document.querySelector("#btn");

unhappy.addEventListener("click", ()=>{
    div2.classList.add("hidden");
    div3.classList.add("hidden");
    eyes.innerHTML = "😒" ;
    btn.innerHTML = "Thanks for Feedback";
    section.style.backgroundColor = "red";
})

neutral.addEventListener("click", ()=>{
    div1.classList.toggle("hidden");
    div3.classList.toggle("hidden");
    eyes.innerHTML = "😐" ;
    btn.innerHTML = "Thanks for Feedback";
    section.style.backgroundColor = "blue";
})

satisfied.addEventListener("click", ()=>{
    div1.classList.toggle("hidden");
    div2.classList.toggle("hidden");
    eyes.innerHTML = "🤗" ;
    btn.innerHTML = "Thanks for Feedback";
    section.style.backgroundColor = "green";
})

btn.addEventListener("click", ()=>{
    div1.classList.remove("hidden");
    div2.classList.remove("hidden");
    div3.classList.remove("hidden");
    eyes.innerHTML = "👀" ;
    btn.innerHTML = "Send Feedback";
    section.style.backgroundColor = "";
})