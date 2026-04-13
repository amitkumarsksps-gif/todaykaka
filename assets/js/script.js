// ===== STEP TRACK (ONLY READ HERE) =====
let step = parseInt(localStorage.getItem("step") || "0");

// ===== VISITED TRACK =====
let visited = JSON.parse(localStorage.getItem("visited") || "[]");

// current page
let current = window.location.pathname;

// add current page to visited list
if (!visited.includes(current)) {
  visited.push(current);
}

localStorage.setItem("visited", JSON.stringify(visited));


// ===== MAIN NEXT FUNCTION =====
function goNext() {

  // 👉 STEP INCREASE ONLY ON CLICK
  let step = parseInt(localStorage.getItem("step") || "0");
  step++;
  localStorage.setItem("step", step);

  // refresh visited again safely
  let visited = JSON.parse(localStorage.getItem("visited") || "[]");
  let current = window.location.pathname;

  if (!visited.includes(current)) {
    visited.push(current);
  }
  localStorage.setItem("visited", JSON.stringify(visited));


  // ===== FINAL PAGE CONDITION =====
  if (step >= 2) {
    localStorage.removeItem("step");
    localStorage.removeItem("visited");

    window.location.href = "/final.html";
    return;
  }


  // ===== ALL PAGES LIST =====
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


  // remove current page
  let filtered = pages.filter(p => p !== current);

  // remove visited pages
  let remaining = filtered.filter(p => !visited.includes(p));


  // reset if all visited
  if (remaining.length === 0) {
    remaining = filtered;
    localStorage.setItem("visited", JSON.stringify([current]));
  }


  // random select
  let randomPage = remaining[Math.floor(Math.random() * remaining.length)];

  // redirect
  window.location.href = randomPage;
}