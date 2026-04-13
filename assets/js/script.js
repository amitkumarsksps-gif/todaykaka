// ===== STEP TRACK =====
let step = parseInt(localStorage.getItem("step") || "0");
step++;
localStorage.setItem("step", step);

// ===== VISITED TRACK =====
let visited = JSON.parse(localStorage.getItem("visited") || "[]");

// current page (clean path)
let current = window.location.pathname;

// avoid duplicate entry
if (!visited.includes(current)) {
  visited.push(current);
}

localStorage.setItem("visited", JSON.stringify(visited));

// ===== SMART NEXT PAGE =====
function goNext() {

  // 👉 FINAL PAGE CONDITION (2 pages ke baad)
  if (step >= 2) {
    localStorage.removeItem("step");
    localStorage.removeItem("visited");

    window.location.href = "/final.html";
    return;
  }

  // 👉 ALL PAGES LIST
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

  // 👉 REMOVE CURRENT PAGE (extra safety)
  let filtered = pages.filter(p => p !== current);

  // 👉 REMOVE VISITED PAGES
  let remaining = filtered.filter(p => !visited.includes(p));

  // 👉 RESET IF ALL VISITED
  if (remaining.length === 0) {
    remaining = filtered;
    localStorage.setItem("visited", JSON.stringify([current]));
  }

  // 👉 RANDOM SELECT
  let randomPage = remaining[Math.floor(Math.random() * remaining.length)];

  // 👉 REDIRECT
  window.location.href = randomPage;
}