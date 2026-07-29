/*
=========================================
CHALDEAN NUMEROLOGY
Utility Functions
=========================================
*/

const Utils = {

    // Remove Extra Spaces
    cleanName(name) {
        return name
            .trim()
            .replace(/\s+/g, " ")
            .toUpperCase();
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

// Reduce Number
reduceNumber(number) {

    const original = number;
    const steps = [number];

    while (number > 9) {

        // Master Number
        if (number === 11 || number === 22 || number === 33) {

            return {
                original: original,
                steps: steps,
                compound: number,
                final: number,
                isMaster: true
            };

        }

        number = number
            .toString()
            .split("")
            .reduce((sum, digit) => sum + Number(digit), 0);

        steps.push(number);
    }

    return {

        original: original,
        steps: steps,
        compound: steps.length >= 2 ? steps[steps.length - 2] : original,
        final: number,
        isMaster: false

    };

},

compound(number) {

    return this.reduceNumber(number);

}

};