let step = parseInt(localStorage.getItem("step")||"0");
let visited = JSON.parse(localStorage.getItem("visited")||"[]");

let current = window.location.pathname;

if(!visited.includes(current)){
visited.push(current);
localStorage.setItem("visited",JSON.stringify(visited));
}

function goNext(){

step++;
localStorage.setItem("step",step);

if(step>=2){
localStorage.removeItem("step");
localStorage.removeItem("visited");
window.location.href="/final.html";
return;
}

let pages = [
"/articles/instant-personal-loan-online-india.html",
"/articles/best-credit-card-for-beginners-india.html",
"/articles/home-loan-with-low-interest-rates-2026.html",
"/articles/instant-business-loan-without-collateral.html",
"/articles/emergency-loan-online-instant-approval.html"
];

let remaining = pages.filter(p => !visited.includes(p));

if(remaining.length===0){
remaining = pages;
}

let random = remaining[Math.floor(Math.random()*remaining.length)];
window.location.href = random;
}