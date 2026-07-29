/*
=========================================
CHALDEAN CALCULATIONS
=========================================
*/

const Calculations = {
  // =====================================
  // 01. Name Value
  // =====================================
  calculateNameValue(name) {
    // Name Clean કરો
    name = Utils.cleanName(name);
    name = Utils.lettersOnly(name);

    let letters = [];
    let total = 0;

    for (let letter of name) {
      if (letter === " ") continue;

      const value = Chaldean.getLetterValue(letter);

      letters.push({
        letter: letter,
        value: value,
      });

      total += value;
    }

    return {
      name: name,
      letters: letters,
      total: total,
      reduction: Utils.reduceNumber(total),
    };
  },

  // =====================================
  // Expression Number
  // =====================================
  calculateExpressionNumber(firstName, middleName, lastName) {
    const first = this.calculateNameValue(firstName);
    const middle = this.calculateNameValue(middleName);
    const last = this.calculateNameValue(lastName);

    const grandTotal = first.total + middle.total + last.total;

    return {
      first: first,
      middle: middle,
      last: last,
      total: grandTotal,
      reduction: Utils.reduceNumber(grandTotal),
    };
  },

  // =====================================
  // Life Path Number
  // =====================================
  calculateLifePath(day, month, year) {
    const dayReduction = Utils.reduceNumber(Number(day));
    const monthReduction = Utils.reduceNumber(Number(month));
    const yearReduction = Utils.reduceNumber(Number(year));

    const total =
      dayReduction.final + monthReduction.final + yearReduction.final;

    return {
      day: dayReduction,
      month: monthReduction,
      year: yearReduction,
      total: total,
      reduction: Utils.reduceNumber(total),
    };
  },
  // =====================================
  // Birthday Number
  // =====================================
  calculateBirthdayNumber(day) {
    return Utils.reduceNumber(Number(day));
  },

  // =====================================
  // Attitude Number
  // =====================================
  calculateAttitudeNumber(day, month) {
    const dayReduction = Utils.reduceNumber(Number(day));
    const monthReduction = Utils.reduceNumber(Number(month));

    const total = dayReduction.final + monthReduction.final;

    return {
      day: dayReduction,
      month: monthReduction,
      total: total,
      reduction: Utils.reduceNumber(total),
    };
  },

  // =====================================
  // Soul Urge Number
  // =====================================
  calculateSoulUrge(firstName, middleName, lastName) {
    const first = this.calculateVowelValue(firstName);
    const middle = this.calculateVowelValue(middleName);
    const last = this.calculateVowelValue(lastName);

    const total =
      first.reduction.final + middle.reduction.final + last.reduction.final;

    return {
      first: first,
      middle: middle,
      last: last,

      total: total,

      reduction: Utils.reduceNumber(total),
    };
  },

  // =====================================
  // Vowel Value
  // =====================================
  calculateVowelValue(name) {
    name = Utils.cleanName(name);
    name = Utils.lettersOnly(name);

    let letters = [];
    let total = 0;

    for (let letter of name) {
      if (letter === " ") continue;

      if (!Utils.isVowel(letter)) continue;

      const value = Chaldean.getLetterValue(letter);

      letters.push({
        letter: letter,
        value: value,
      });

      total += value;
    }

    return {
      name: name,
      letters: letters,
      total: total,
      reduction: Utils.reduceNumber(total),
    };
  },
  // =====================================
  // Consonant Value
  // =====================================
  calculateConsonantValue(name) {
    name = Utils.cleanName(name);
    name = Utils.lettersOnly(name);

    let letters = [];
    let total = 0;

    for (let letter of name) {
      if (letter === " ") continue;

      if (!Utils.isConsonant(letter)) continue;

      const value = Chaldean.getLetterValue(letter);

      letters.push({
        letter: letter,
        value: value,
      });

      total += value;
    }

    return {
      name: name,

      letters: letters,

      total: total,

      reduction: Utils.reduceNumber(total),
    };
  },
  // =====================================
  // Personality Number
  // =====================================
  calculatePersonality(firstName, middleName, lastName) {
    const first = this.calculateConsonantValue(firstName);
    const middle = this.calculateConsonantValue(middleName);
    const last = this.calculateConsonantValue(lastName);

    const total =
      first.reduction.final + middle.reduction.final + last.reduction.final;

    return {
      first: first,
      middle: middle,
      last: last,

      total: total,

      reduction: Utils.reduceNumber(total),
    };
  },
};
