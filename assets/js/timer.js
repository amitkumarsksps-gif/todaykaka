let topDone = false;

/* =========================
   TOP TIMER
========================= */
function startTopTimer(){

let text = document.getElementById("topText");

// safety check
let r1 = document.getElementById("r1");
let r2 = document.getElementById("r2");
let r3 = document.getElementById("r3");

if(!r1 || !r2 || !r3 || !text) return;

// start animation
r1.style.animation = "spin 10s linear forwards";
r2.style.animation = "spinReverse 10s linear forwards";
r3.style.animation = "spin 10s linear forwards";

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

// safety check
let br1 = document.getElementById("br1");
let br2 = document.getElementById("br2");
let br3 = document.getElementById("br3");

if(!text || !btn) return;

// disable button
btn.disabled = true;

// start animation if exists
if(br1) br1.style.animation = "spin 10s linear forwards";
if(br2) br2.style.animation = "spinReverse 10s linear forwards";
if(br3) br3.style.animation = "spin 10s linear forwards";

text.innerText = "Please Wait...";

setTimeout(() => {

  btn.disabled = false;
  btn.innerText = "Continue";

  // safe redirect hook
  if(typeof goNext === "function"){
    btn.onclick = goNext;
  }

}, 10000);

}