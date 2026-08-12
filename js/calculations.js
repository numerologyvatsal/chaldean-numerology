/*
=========================================
CHALDEAN CALCULATIONS
=========================================
*/

const Calculations = {
  // =====================================
  // 01. Name Number
  // Source : Chaldean
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
  // Source : Chaldean
  // =====================================
  calculateExpressionNumber(firstName, middleName, lastName) {
    const first = this.calculateNameValue(firstName);
    const middle = this.calculateNameValue(middleName);
    const last = this.calculateNameValue(lastName);

    const grandTotal =
      first.reduction.final + middle.reduction.final + last.reduction.final;

    return {
      first: first,
      middle: middle,
      last: last,

      total: grandTotal,

      reduction: Utils.reduceNumber(grandTotal, true),
    };
  },

  // =====================================
  // 03. Life Path Number
  // Source : Modern Numerology
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

      reduction: Utils.reduceNumber(total, true),
    };
  },
  // =====================================
  // 04. Birthday Number
  // Source : Modern Numerology
  // =====================================
  calculateBirthdayNumber(day) {
    return Utils.reduceNumber(Number(day));
  },

  // =====================================
  // 05. Attitude Number
  // Source : Modern Numerology
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
  // Source : Chaldean
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

      reduction: Utils.reduceNumber(total, true),
    };
  },

  // =====================================
  // 07. Vowel Value
  // Source : Chaldean
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
  // Source : Chaldean
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
  // Source : Chaldean
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
  // Source : Modern Numerology
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
  // 11. Hidden Passion Number
  // Source : Modern Numerology
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
  // 12. Karmic Lesson Number
  // Source : Modern Numerology
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
  // 13. Subconscious Self Number
  // Source : Modern Numerology
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
  // Source : Modern Numerology
  // =====================================
  calculateRationalThought(firstName, middleName, lastName, birthDay) {
    const expression = this.calculateExpressionNumber(
      firstName,
      middleName,
      lastName,
    );

    const birthday = this.calculateBirthdayNumber(birthDay);

    const total = expression.reduction.final + birthday.reduction.final;

    return {
      expression: expression,

      birthday: birthday,

      total: total,

      reduction: Utils.reduceNumber(total, true),
    };
  },
  // =====================================
  // 15. Maturity Number
  // Source : Modern Numerology
  // =====================================
  calculateMaturityNumber(firstName, middleName, lastName, day, month, year) {
    const expression = this.calculateExpressionNumber(
      firstName,
      middleName,
      lastName,
    );

    const lifePath = this.calculateLifePath(day, month, year);

    const total = expression.reduction.final + lifePath.reduction.final;

    return {
      expression: expression,

      lifePath: lifePath,

      total: total,

      reduction: Utils.reduceNumber(total, true),
    };
  },
  // =====================================
  // 16. Bridge Numbers
  // Source : Modern Numerology
  // =====================================
  calculateBridgeNumbers(firstName, middleName, lastName, day, month, year) {
    const expression = this.calculateExpressionNumber(
      firstName,
      middleName,
      lastName,
    );

    const birthday = this.calculateBirthdayNumber(day);

    const lifePath = this.calculateLifePath(day, month, year);

    // Life Path Bridge
    const lifePathBridgeTotal = Math.abs(
      expression.reduction.final - lifePath.reduction.final,
    );

    // Birthday Bridge
    const birthdayBridgeTotal = Math.abs(
      birthday.final - lifePath.reduction.final,
    );

    return {
      expression: expression,

      birthday: birthday,

      lifePath: lifePath,

      lifePathBridge: {
        total: lifePathBridgeTotal,

        reduction: Utils.reduceNumber(lifePathBridgeTotal, true),
      },

      birthdayBridge: {
        total: birthdayBridgeTotal,

        reduction: Utils.reduceNumber(birthdayBridgeTotal, true),
      },
    };
  },
  // =====================================
  // 17. Pinnacle Numbers
  // Source : Modern Numerology
  // =====================================
  calculatePinnacleNumbers(day, month, year) {
    // Reduce Inputs
    const dayNumber = Utils.reduceNumber(Number(day)).final;

    const monthNumber = Utils.reduceNumber(Number(month)).final;

    const yearNumber = Utils.reduceNumber(Number(year)).final;

    // =====================================
    // 1st Pinnacle
    // =====================================

    const firstTotal = monthNumber + dayNumber;

    // =====================================
    // 2nd Pinnacle
    // =====================================

    const secondTotal = dayNumber + yearNumber;

    // =====================================
    // 3rd Pinnacle
    // =====================================

    const thirdTotal =
      Utils.reduceNumber(firstTotal).final +
      Utils.reduceNumber(secondTotal).final;

    // =====================================
    // 4th Pinnacle
    // =====================================

    const fourthTotal = monthNumber + yearNumber;

    // =====================================
    // Life Path
    // =====================================

    const lifePath = this.calculateLifePath(day, month, year);

    // =====================================
    // Age Ranges
    // =====================================

    const firstEnd = 36 - lifePath.reduction.final;

    // =====================================
    // Return
    // =====================================

    return {
      first: {
        total: firstTotal,
        reduction: Utils.reduceNumber(firstTotal),
      },

      second: {
        total: secondTotal,
        reduction: Utils.reduceNumber(secondTotal),
      },

      third: {
        total: thirdTotal,
        reduction: Utils.reduceNumber(thirdTotal),
      },

      fourth: {
        total: fourthTotal,
        reduction: Utils.reduceNumber(fourthTotal),
      },

      ageRanges: {
        first: {
          start: 0,
          end: firstEnd,
        },

        second: {
          start: firstEnd + 1,
          end: firstEnd + 9,
        },

        third: {
          start: firstEnd + 10,
          end: firstEnd + 18,
        },

        fourth: {
          start: firstEnd + 19,
          end: null,
        },
      },
    };
  },
  // =====================================
  // 18. Challenge Numbers
  // Source : Modern Numerology
  // =====================================
  calculateChallengeNumbers(day, month, year) {
    // Reduce Inputs
    const dayNumber = Utils.reduceNumber(day).final;
    const monthNumber = Utils.reduceNumber(month).final;
    const yearNumber = Utils.reduceNumber(year).final;

    // 1st Challenge
    const firstTotal = Math.abs(monthNumber - dayNumber);

    // 2nd Challenge
    const secondTotal = Math.abs(dayNumber - yearNumber);

    // 3rd Challenge
    const thirdTotal = Math.abs(firstTotal - secondTotal);

    // 4th Challenge
    const fourthTotal = Math.abs(monthNumber - yearNumber);

    return {
      first: {
        total: firstTotal,
        reduction: Utils.reduceNumber(firstTotal),
      },

      second: {
        total: secondTotal,
        reduction: Utils.reduceNumber(secondTotal),
      },

      third: {
        total: thirdTotal,
        reduction: Utils.reduceNumber(thirdTotal),
      },

      fourth: {
        total: fourthTotal,
        reduction: Utils.reduceNumber(fourthTotal),
      },
    };
  },

  // =====================================
  // 19. Personal Year Number
  // Source : Modern Numerology
  // =====================================
  calculatePersonalYear(day, month, currentYear) {
    // Reduce Inputs
    const dayNumber = Utils.reduceNumber(day).final;

    const monthNumber = Utils.reduceNumber(month).final;

    const yearNumber = Utils.reduceNumber(currentYear).final;

    // Total
    const total = dayNumber + monthNumber + yearNumber;

    return {
      birthDay: Utils.reduceNumber(day),

      birthMonth: Utils.reduceNumber(month),

      currentYear: Utils.reduceNumber(currentYear),

      total: total,

      reduction: Utils.reduceNumber(total),
    };
  },

  // =====================================
  // 20. Personal Month Number
  // Source : Modern Numerology
  // =====================================
  calculatePersonalMonth(day, month, currentYear, currentMonth) {
    // Personal Year
    const personalYear = this.calculatePersonalYear(day, month, currentYear);

    // Reduce Current Month
    const monthNumber = Utils.reduceNumber(currentMonth).final;

    // Total
    const total = personalYear.reduction.final + monthNumber;

    return {
      personalYear: personalYear,

      currentMonth: Utils.reduceNumber(currentMonth),

      total: total,

      reduction: Utils.reduceNumber(total),
    };
  },

  // =====================================
  // 21. Personal Day Number
  // Source : Modern Numerology
  // =====================================
  calculatePersonalDay(day, month, currentYear, currentMonth, currentDay) {
    // Personal Month
    const personalMonth = this.calculatePersonalMonth(
      day,
      month,
      currentYear,
      currentMonth,
    );

    // Reduce Current Day
    const dayNumber = Utils.reduceNumber(currentDay).final;

    // Total
    const total = personalMonth.reduction.final + dayNumber;

    return {
      personalMonth: personalMonth,

      currentDay: Utils.reduceNumber(currentDay),

      total: total,

      reduction: Utils.reduceNumber(total),
    };
  },

  // =====================================
  // 22. Universal Year Number
  // Source : Modern Numerology
  // =====================================
  calculateUniversalYear(currentYear) {
    return {
      currentYear: Utils.reduceNumber(currentYear),

      total: Utils.reduceNumber(currentYear).final,

      reduction: Utils.reduceNumber(currentYear, true),
    };
  },

  // =====================================
  // 23. Universal Month Number
  // Source : Modern Numerology
  // =====================================
  calculateUniversalMonth(currentYear, currentMonth) {
    // Universal Year
    const universalYear = this.calculateUniversalYear(currentYear);

    // Reduce Current Month
    const monthNumber = Utils.reduceNumber(currentMonth).final;

    // Total
    const total = universalYear.reduction.final + monthNumber;

    return {
      universalYear: universalYear,

      currentMonth: Utils.reduceNumber(currentMonth),

      total: total,

      reduction: Utils.reduceNumber(total, true),
    };
  },

  // =====================================
  // 24. Universal Day Number
  // Source : Modern Numerology
  // =====================================
  calculateUniversalDay(currentYear, currentMonth, currentDay) {
    // Universal Month
    const universalMonth = this.calculateUniversalMonth(
      currentYear,
      currentMonth,
    );

    // Reduce Current Day
    const dayNumber = Utils.reduceNumber(currentDay).final;

    // Total
    const total = universalMonth.reduction.final + dayNumber;

    return {
      universalMonth: universalMonth,

      currentDay: Utils.reduceNumber(currentDay),

      total: total,

      reduction: Utils.reduceNumber(total, true),
    };
  },
};
