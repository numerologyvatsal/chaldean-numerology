/*
=========================================
CHALDEAN NUMEROLOGY
Interpretation Language Controller
=========================================
*/

const Language = {
  current: localStorage.getItem("numerologyLanguage") || "en",

  // =====================================
  // Set Interpretation Language
  // =====================================

  set(language) {
    if (!["en", "gu"].includes(language)) {
      return;
    }

    this.current = language;

    localStorage.setItem("numerologyLanguage", language);

    this.updateButtons();
  },

  // =====================================
  // Update Language Buttons
  // =====================================

  updateButtons() {
    const englishBtn = document.getElementById("englishBtn");

    const gujaratiBtn = document.getElementById("gujaratiBtn");

    if (englishBtn) {
      englishBtn.classList.toggle("active", this.current === "en");
    }

    if (gujaratiBtn) {
      gujaratiBtn.classList.toggle("active", this.current === "gu");
    }
  },
};
