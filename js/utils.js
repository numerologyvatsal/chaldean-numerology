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
  // Reduce Number
  // =====================================
  reduceNumber(number, preserveMaster = false) {
    const original = Number(number);
    const steps = [original];

    let current = original;

    while (current > 9) {
      current = current
        .toString()
        .split("")
        .reduce((sum, digit) => sum + Number(digit), 0);

      steps.push(current);
    }

    const compound = steps.length > 1 ? steps[steps.length - 2] : original;

    let finalNumber = current;
    let isMaster = false;

    if (
      preserveMaster &&
      (compound === 11 || compound === 22 || compound === 33)
    ) {
      finalNumber = compound;
      isMaster = true;
    }

    return {
      original: original,

      steps: steps,

      compound: compound,

      final: finalNumber,

      isMaster: isMaster,
    };
  },

  compound(number) {
    return this.reduceNumber(number);
  },
};
