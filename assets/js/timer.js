let topDone = false;

/* =========================
   TOP TIMER
========================= */
function startTopTimer(){

let text = document.getElementById("topText");

document.getElementById("r1").style.display = "block";
document.getElementById("r2").style.display = "block";
document.getElementById("r3").style.display = "block";

document.getElementById("r1").style.animation = "spin 10s linear forwards";
document.getElementById("r2").style.animation = "spinReverse 10s linear forwards";
document.getElementById("r3").style.animation = "spin 10s linear forwards";

text.innerText = "Please Wait...";

setTimeout(() => {
  topDone = true;
  text.innerText = "Link Ready ↓";

  let scrollText = document.getElementById("scrollText");
  if(scrollText){
    scrollText.classList.remove("hidden");
  }

}, 10000);
}


/* =========================
   BOTTOM TIMER
========================= */
function startBottomTimer(){

let text = document.getElementById("bottomText");
let btn = document.getElementById("continueBtn");

btn.disabled = true;

document.getElementById("br1").style.display = "block";
document.getElementById("br2").style.display = "block";
document.getElementById("br3").style.display = "block";

document.getElementById("br1").style.animation = "spin 10s linear forwards";
document.getElementById("br2").style.animation = "spinReverse 10s linear forwards";
document.getElementById("br3").style.animation = "spin 10s linear forwards";

text.innerText = "Please Wait...";

setTimeout(() => {
  btn.disabled = false;
  btn.innerText = "Continue";

  if(typeof goNext === "function"){
    btn.onclick = goNext;
  }

}, 10000);
}