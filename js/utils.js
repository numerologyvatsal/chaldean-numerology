/*
=========================================
CHALDEAN NUMEROLOGY
Utility Functions
=========================================
*/

const Utils = {
  // Remove Extra Spaces
  cleanName(name) {
    return name.trim().replace(/\s+/g, " ").toUpperCase();
  },

  // Remove Non Alphabet Characters
  lettersOnly(name) {
    return name.replace(/[^A-Z ]/g, "");
  },

  // Check Vowel
  isVowel(letter) {
    return ["A", "E", "I", "O", "U"].includes(letter);
  },

  // Check Consonant
  isConsonant(letter) {
    return /^[A-Z]$/.test(letter) && !this.isVowel(letter);
  },

  // =====================================
  // Traditional Chaldean Reduction
  // =====================================
  reduceNumber(number) {
    const original = Number(number);

    let current = original;

    const steps = [current];

    // =====================================
    // Reduce Compound Number
    // =====================================

    while (current > 9) {
      current = current
        .toString()
        .split("")
        .reduce((sum, digit) => sum + Number(digit), 0);

      steps.push(current);
    }

    // =====================================
    // Traditional Chaldean Result
    // =====================================

    return {
      // Original total
      original: original,

      // Compound Number
      compound: original,

      // Reduction Steps
      steps: steps,

      // Root / Single Digit
      final: current,

      // Traditional Chaldean
      isMaster: false,
    };
  },
};
