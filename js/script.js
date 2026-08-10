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

const reportContainer = document.getElementById("reportContainer");

// =====================================
// Calculate
// =====================================

calculateBtn.addEventListener("click", () => {
  const fullName = Utils.cleanName(fullNameInput.value);

  const dob = dobInput.value;

  // Validation
  if (!fullName) {
    alert("Please Enter Full Name");

    fullNameInput.focus();

    return;
  }

  if (!dob) {
    alert("Please Select Date Of Birth");

    dobInput.focus();

    return;
  }

  // Split Name
  const nameParts = fullName.split(" ");

  const firstName = nameParts[0] || "";

  const middleName = nameParts[1] || "";

  const lastName = nameParts.slice(2).join(" ") || "";

  // Split DOB
  const [year, month, day] = dob.split("-").map(Number);

  // Generate Report
  Report.generate(
    firstName,
    middleName,
    lastName,

    day,
    month,
    year,
  );
});

// =====================================
// Reset
// =====================================

resetBtn.addEventListener("click", () => {
  fullNameInput.value = "";

  dobInput.value = "";

  reportContainer.innerHTML = "";

  reportContainer.style.display = "none";
});
