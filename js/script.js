/*
=========================================
CHALDEAN NUMEROLOGY
Main Script
=========================================
*/

const fullNameInput = document.getElementById("fullName");

const dobInput = document.getElementById("dob");

const calculateBtn = document.getElementById("calculateBtn");

const resetBtn = document.getElementById("resetBtn");

const englishBtn = document.getElementById("englishBtn");

const gujaratiBtn = document.getElementById("gujaratiBtn");

const reportContainer = document.getElementById("reportContainer");
const downloadBtn = document.getElementById("downloadBtn");
// =====================================
// Current Report Data
// =====================================

let currentReportData = null;

// =====================================
// Generate Current Report
// =====================================

function generateCurrentReport() {
  if (!currentReportData) {
    return;
  }

  Report.generate(
    currentReportData.firstName,
    currentReportData.middleName,
    currentReportData.lastName,
    currentReportData.day,
    currentReportData.month,
    currentReportData.year,
  );
}

// =====================================
// Calculate
// =====================================

calculateBtn.addEventListener("click", () => {
  const fullName = Utils.cleanName(fullNameInput.value);

  const dob = dobInput.value;

  // Validation
  if (!fullName) {
    alert(
      Language.current === "gu"
        ? "કૃપા કરીને પૂર્ણ નામ દાખલ કરો"
        : "Please Enter Full Name",
    );

    fullNameInput.focus();

    return;
  }

  if (!dob) {
    alert(
      Language.current === "gu"
        ? "કૃપા કરીને જન્મ તારીખ પસંદ કરો"
        : "Please Select Date Of Birth",
    );

    dobInput.focus();

    return;
  }

  // =====================================
  // Split Name
  // =====================================

  const nameParts = fullName.split(" ");

  const firstName = nameParts[0] || "";

  const middleName = nameParts[1] || "";

  const lastName = nameParts.slice(2).join(" ") || "";

  // =====================================
  // Split DOB
  // =====================================

  const [year, month, day] = dob.split("-").map(Number);

  // =====================================
  // Save Current Report
  // =====================================

  currentReportData = {
    firstName,
    middleName,
    lastName,
    day,
    month,
    year,
  };

  // =====================================
  // Generate Report
  // =====================================

  generateCurrentReport();
});

// =====================================
// Reset
// =====================================

resetBtn.addEventListener("click", () => {
  fullNameInput.value = "";

  dobInput.value = "";

  currentReportData = null;

  reportContainer.innerHTML = "";

  reportContainer.style.display = "none";

  localStorage.removeItem("lastFullName");

  localStorage.removeItem("lastDob");
});

// =====================================
// English Button
// =====================================

englishBtn.addEventListener("click", () => {
  Language.set("en");

  generateCurrentReport();
});

// =====================================
// Gujarati Button
// =====================================

gujaratiBtn.addEventListener("click", () => {
  Language.set("gu");

  generateCurrentReport();
});

// =====================================
// Page Load
// =====================================

document.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem("lastFullName");

  const savedDob = localStorage.getItem("lastDob");

  if (savedName) {
    fullNameInput.value = savedName;
  }

  if (savedDob) {
    dobInput.value = savedDob;
  }

  // Apply saved language

  Language.updateButtons();

  // =====================================
  // Save Name
  // =====================================

  fullNameInput.addEventListener("input", () => {
    localStorage.setItem("lastFullName", fullNameInput.value);
  });

  // =====================================
  // Save DOB
  // =====================================

  dobInput.addEventListener("change", () => {
    localStorage.setItem("lastDob", dobInput.value);
  });
});
// =====================================
// Download PDF
// =====================================

downloadBtn.addEventListener("click", () => {
  if (!currentReportData) {
    alert("Please Calculate Report First");
    return;
  }

  const allDetails = reportContainer.querySelectorAll("details");

  // Save current accordion states
  const previousStates = [];

  allDetails.forEach((details) => {
    previousStates.push(details.open);

    // Open everything for PDF
    details.open = true;
  });

  // Small delay so browser renders
  // all interpretation content first
  setTimeout(() => {
    window.print();
  }, 300);

  // Restore accordion states after print window closes
  window.onafterprint = () => {
    allDetails.forEach((details, index) => {
      details.open = previousStates[index];
    });

    window.onafterprint = null;
  };
});
// =====================================
// Register Service Worker
// =====================================

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(() => {
        console.log("Service Worker Registered");
      })
      .catch((error) => {
        console.error("Service Worker Error:", error);
      });
  });
}
