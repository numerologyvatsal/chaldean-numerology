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
  // 02. Expression Number
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
  // 03. Life Path Number
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
  // 04. Birthday Number
  // =====================================
  calculateBirthdayNumber(day) {
    return Utils.reduceNumber(Number(day));
  },

  // =====================================
  // 05. Attitude Number
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
  // 06. Soul Urge Number
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
  // 07. Vowel Value
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
  // 08. Consonant Value
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
  // 09. Personality Number
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
  // =====================================
  // 10. Balance Number
  // =====================================
  calculateBalanceNumber(firstName, middleName, lastName) {
    const firstInitial = Utils.cleanName(firstName).charAt(0);
    const middleInitial = Utils.cleanName(middleName).charAt(0);
    const lastInitial = Utils.cleanName(lastName).charAt(0);

    const firstValue = Chaldean.getLetterValue(firstInitial);
    const middleValue = Chaldean.getLetterValue(middleInitial);
    const lastValue = Chaldean.getLetterValue(lastInitial);

    const total = firstValue + middleValue + lastValue;

    return {
      firstInitial: firstInitial,
      middleInitial: middleInitial,
      lastInitial: lastInitial,

      firstValue: firstValue,
      middleValue: middleValue,
      lastValue: lastValue,

      total: total,

      reduction: Utils.reduceNumber(total),
    };
  },
  // =====================================
  // 11. Hidden Passion
  // =====================================
  calculateHiddenPassion(firstName, middleName, lastName) {
    const fullName =
      Utils.cleanName(firstName) +
      " " +
      Utils.cleanName(middleName) +
      " " +
      Utils.cleanName(lastName);

    const counts = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
    };

    for (let letter of fullName) {
      if (letter === " ") continue;

      const value = Chaldean.getLetterValue(letter);

      counts[value]++;
    }

    let highestCount = 0;

    for (let number in counts) {
      if (counts[number] > highestCount) {
        highestCount = counts[number];
      }
    }

    // Hidden Passion Number શોધવા
    const hiddenPassion = [];

    for (let number in counts) {
      if (counts[number] === highestCount) {
        hiddenPassion.push(Number(number));
      }
    }

    console.log(counts);
    console.log(highestCount);
    console.log(hiddenPassion);

    return {
      counts: counts,

      highestCount: highestCount,

      hiddenPassion: hiddenPassion,
    };
  },
  // =====================================
  // 12. Karmic Lesson
  // =====================================
  calculateKarmicLesson(firstName, middleName, lastName) {
    const fullName =
      Utils.cleanName(firstName) +
      " " +
      Utils.cleanName(middleName) +
      " " +
      Utils.cleanName(lastName);

    const counts = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
    };

    for (let letter of fullName) {
      if (letter === " ") continue;

      const value = Chaldean.getLetterValue(letter);

      counts[value]++;
    }

    const karmicLessons = [];

    for (let number in counts) {
      if (counts[number] === 0) {
        karmicLessons.push(Number(number));
      }
    }

    return {
      counts: counts,

      karmicLessons: karmicLessons,
    };
  },
  // =====================================
  // 13. Subconscious Self
  // =====================================
  calculateSubconsciousSelf(firstName, middleName, lastName) {
    const fullName =
      Utils.cleanName(firstName) +
      " " +
      Utils.cleanName(middleName) +
      " " +
      Utils.cleanName(lastName);

    const counts = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
    };

    for (let letter of fullName) {
      if (letter === " ") continue;

      const value = Chaldean.getLetterValue(letter);

      counts[value]++;
    }

    let subconsciousSelf = 0;

    for (let number in counts) {
      if (counts[number] > 0) {
        subconsciousSelf++;
      }
    }

    return {
      counts: counts,

      subconsciousSelf: subconsciousSelf,
    };
  },
  // =====================================
  // 14. Rational Thought Number
  // =====================================
  calculateRationalThought(firstName, middleName, lastName, birthDay) {
    const expression = this.calculateExpressionNumber(
      firstName,
      middleName,
      lastName,
    );

    const birthday = this.calculateBirthdayNumber(birthDay);

    const total = expression.reduction.final + birthday.final;

    return {
      expression: expression,

      birthday: birthday,

      total: total,

      reduction: Utils.reduceNumber(total),
    };
  },
};
