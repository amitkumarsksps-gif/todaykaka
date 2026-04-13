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
        "/articles/improve-credit-score-fast-india.html",
        "/articles/emergency-loan-online-instant-approval.html",
        "/articles/same-day-payday-loan-online.html",
        "/articles/business-loan-without-collateral-india.html",
        "/articles/student-loan-without-guarantor-india.html",
        "/articles/best-loan-apps-india-instant-cash.html",
        "/articles/guaranteed-approval-loans-bad-credit-truth.html",
        "/articles/latest-home-loan-interest-rates-india-2026.html",
        "/articles/car-loan-zero-down-payment-india.html",
        "/articles/instant-approval-credit-cards-india.html",
        "/articles/loan-against-salary-instant-approval.html",
        "/articles/personal-loan-emi-calculator-guide.html",
        "/articles/online-loan-for-unemployed-india.html",
        "/articles/gold-loan-interest-rate-today-india.html",
        "/articles/low-interest-personal-loan-online-india.html",
        "/articles/fast-cash-loan-without-documents.html"
];

let remaining = pages.filter(p => !visited.includes(p));

if(remaining.length===0){
remaining = pages;
}

let random = remaining[Math.floor(Math.random()*remaining.length)];
window.location.href = random;
}