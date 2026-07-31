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

    // Preserve Master Number if original total is 11, 22 or 33
    if (
      preserveMaster &&
      (original === 11 || original === 22 || original === 33)
    ) {
      return {
        original: original,

        steps: steps,

        compound: original,

        final: original,

        isMaster: true,
      };
    }

    let current = original;

    while (current > 9) {
      current = current
        .toString()
        .split("")
        .reduce((sum, digit) => sum + Number(digit), 0);

      steps.push(current);

      // Stop if a Master Number is reached
      if (
        preserveMaster &&
        (current === 11 || current === 22 || current === 33)
      ) {
        return {
          original: original,

          steps: steps,

          compound: original,

          final: current,

          isMaster: true,
        };
      }
    }

    return {
      original: original,

      steps: steps,

      compound: original,

      final: current,

      isMaster: false,
    };
  },
};
