/*
=========================================
CHALDEAN NUMEROLOGY
Report Generator
=========================================
*/
const Report = {
  // =====================================
  // Generate Report
  // =====================================
  generate(firstName, middleName, lastName, day, month, year) {
    const fullName = `${firstName} ${middleName} ${lastName}`.trim();

    // =====================================
    // Interpretation Language Source
    // English -> Interpretations
    // Gujarati -> GujaratiInterpretations
    // =====================================

    const I =
      typeof Language !== "undefined" &&
      Language.current === "gu" &&
      typeof GujaratiInterpretations !== "undefined"
        ? GujaratiInterpretations
        : Interpretations;

    // =====================================
    // Interpretation-Only Language Labels
    // Main site/report headings stay English.
    // Only interpretation content changes language.
    // =====================================

    const isGujaratiInterpretation =
      typeof Language !== "undefined" && Language.current === "gu";

    const interpretationLabels = {
      theme: isGujaratiInterpretation ? "થીમ" : "Theme",
      strengths: isGujaratiInterpretation ? "શક્તિઓ" : "Strengths",
      challenges: isGujaratiInterpretation ? "પડકારો" : "Challenges",
      compoundTheme: isGujaratiInterpretation
        ? "કમ્પાઉન્ડ થીમ"
        : "Compound Theme",
      ageRange: isGujaratiInterpretation ? "ઉંમરનો સમયગાળો" : "Age Range",
      approximatePeriod: isGujaratiInterpretation
        ? "અંદાજિત સમયગાળો"
        : "Approximate Period",
    };

    const reportContainer = document.getElementById("reportContainer");

    reportContainer.style.display = "block";

    reportContainer.innerHTML = `

      <div class="report-card">

        <h2>Numerology Report</h2>

        <div class="report-info">

          <p>
            <strong>Name :</strong> ${fullName}
          </p>

          <p>
            <strong>Date Of Birth :</strong>
            ${day}/${month}/${year}
          </p>

        </div>

      </div>


      <!-- =====================================
           Birth Numbers
           ===================================== -->

      <details class="accordion">

        <summary>Birth Numbers</summary>

        <div id="birthNumbers"></div>

      </details>


      <!-- =====================================
           Name Numbers
           ===================================== -->

      <details class="accordion">

        <summary>Name Numbers</summary>

        <div id="nameNumbers"></div>
<div id="expressionInterpretation"></div>

<div id="soulUrgeInterpretation"></div>
<div id="personalityInterpretation"></div>
<div id="balanceInterpretation"></div>
      </details>

<!-- =====================================
     Hidden Passion Number
     ===================================== -->

<details class="accordion">

  <summary>Hidden Passion Number</summary>

  <div id="hiddenPassionInterpretation"></div>

</details>
<!-- =====================================
     Karmic Numbers
     ===================================== -->

<details class="accordion">

  <summary>Karmic Numbers</summary>

  <div id="karmicNumbers"></div>

  <div id="karmicLessonInterpretation"></div>

  <div id="subconsciousSelfInterpretation"></div>

</details>
<!-- =====================================
     Rational Thought Number
     ===================================== -->

<details class="accordion">

  <summary>Rational Thought Number</summary>

  <div id="rationalThoughtNumber"></div>

  <div id="rationalThoughtInterpretation"></div>

</details>
<!-- =====================================
     Maturity Number
     ===================================== -->

<details class="accordion">

  <summary>Maturity Number</summary>

  <div id="maturityNumber"></div>

  <div id="maturityInterpretation"></div>

</details>
<!-- =====================================
     Bridge Numbers
     ===================================== -->
<details class="accordion">

  <summary>Bridge Numbers</summary>

  <div id="bridgeNumbers"></div>

  <div id="bridgeInterpretation"></div>

</details>
      <!-- =====================================
           Pinnacles & Challenges
           ===================================== -->

<details class="accordion">

  <summary>Pinnacles & Challenges</summary>

  <div id="pinnacles"></div>

  <div id="pinnacleInterpretation"></div>

  <div id="challengeInterpretation"></div>

</details>

      <!-- =====================================
           Personal Cycles
           ===================================== -->

<details class="accordion">

  <summary>Personal Cycles</summary>

  <div id="personalCycles"></div>

  <div id="personalYearInterpretation"></div>

  <div id="personalMonthInterpretation"></div>

  <div id="personalDayInterpretation"></div>

</details>


      <!-- =====================================
           Universal Cycles
           ===================================== -->

<details class="accordion">

  <summary>Universal Cycles</summary>

  <div id="universalCycles"></div>

  <div id="universalYearInterpretation"></div>

  <div id="universalMonthInterpretation"></div>

  <div id="universalDayInterpretation"></div>

</details>

    `;

    // =====================================
    // Birth Numbers
    // =====================================

    const lifePath = Calculations.calculateLifePath(day, month, year);
    const birthday = Calculations.calculateBirthdayNumber(day);

    const birthdayResult = I.getBirthdayResult(birthday);

    const lifePathResult = I.getLifePathResult(lifePath);
    const lifePathCompoundResult = I.getLifePathCompoundResult(lifePath);
    console.log("BIRTHDAY DATA:", birthday);
    console.log("BIRTHDAY RESULT:", birthdayResult);

    document.getElementById("birthNumbers").innerHTML = `
      <!-- =====================================
           Birthday Number
           ===================================== -->

      <div class="result-item">

       <span>Birthday Number (Mulank)</span>

        <strong>
          ${birthday.compound} / ${birthday.final}
        </strong>

      </div>


      ${
        birthdayResult
          ? `
            <!-- =====================================
                 Birthday Root Interpretation
                 ===================================== -->

            <div class="interpretation-card">

              <h3>
                Birthday Number ${birthdayResult.final} (Mulank ${birthdayResult.final})
              </h3>

              <p>
                <strong>${interpretationLabels.theme}:</strong>
                ${birthdayResult.theme}
              </p>

              <p>
                ${birthdayResult.description}
              </p>

              <h4>${interpretationLabels.strengths}</h4>

              <ul>
                ${birthdayResult.strengths
                  .map((item) => `<li>${item}</li>`)
                  .join("")}
              </ul>

              <h4>${interpretationLabels.challenges}</h4>

              <ul>
                ${birthdayResult.challenges
                  .map((item) => `<li>${item}</li>`)
                  .join("")}
              </ul>

            </div>
          `
          : ""
      }


            ${
              birthdayResult && birthdayResult.compoundTitle
                ? `
            <details class="sub-accordion">

              <summary>
                Compound Number ${birthday.compound}
              </summary>

              <div class="interpretation-card">

                <p>
                  <strong>${interpretationLabels.theme}:</strong>
                  ${birthdayResult.compoundTheme}
                </p>

                <p>
                  ${birthdayResult.compoundDescription}
                </p>

              </div>

            </details>
          `
                : ""
            }

      <!-- =====================================
           Life Path Number
           ===================================== -->

      <div class="result-item">

        <span>Life Path Number (Bhagyank)</span>

        <strong>
          ${lifePath.reduction.compound} / ${lifePath.reduction.final}
        </strong>

      </div>


      ${
        lifePathResult
          ? `
            <!-- =====================================
                 Life Path Root Interpretation
                 ===================================== -->

            <div class="interpretation-card">

              <h3>
                Life Path Number ${lifePathResult.final} (Bhagyank ${lifePathResult.final})
              </h3>

              <p>
                <strong>${interpretationLabels.theme}:</strong>
                ${lifePathResult.theme}
              </p>

              <p>
                ${lifePathResult.description}
              </p>

              <h4>${interpretationLabels.strengths}</h4>

              <ul>
                ${lifePathResult.strengths
                  .map((item) => `<li>${item}</li>`)
                  .join("")}
              </ul>

              <h4>${interpretationLabels.challenges}</h4>

              <ul>
                ${lifePathResult.challenges
                  .map((item) => `<li>${item}</li>`)
                  .join("")}
              </ul>

            </div>
          `
          : ""
      }


      ${
        lifePathCompoundResult
          ? `
            <!-- =====================================
                 Life Path Compound Interpretation
                 ===================================== -->

            <div class="interpretation-card">

              <h3>
                Compound Number ${lifePath.reduction.compound}
              </h3>

              <p>
                <strong>${interpretationLabels.theme}:</strong>
                ${lifePathCompoundResult.theme}
              </p>

              <p>
                ${lifePathCompoundResult.description}
              </p>

              <h4>${interpretationLabels.strengths}</h4>

              <ul>
                ${lifePathCompoundResult.strengths
                  .map((item) => `<li>${item}</li>`)
                  .join("")}
              </ul>

              <h4>${interpretationLabels.challenges}</h4>

              <ul>
                ${lifePathCompoundResult.challenges
                  .map((item) => `<li>${item}</li>`)
                  .join("")}
              </ul>

            </div>
          `
          : ""
      }
    `;

    // =====================================
    // Name Numbers
    // =====================================

    const expression = Calculations.calculateExpressionNumber(
      firstName,
      middleName,
      lastName,
    );

    const soulUrge = Calculations.calculateSoulUrge(
      firstName,
      middleName,
      lastName,
    );

    const personality = Calculations.calculatePersonality(
      firstName,
      middleName,
      lastName,
    );

    const balance = Calculations.calculateBalanceNumber(
      firstName,
      middleName,
      lastName,
    );

    document.getElementById("nameNumbers").innerHTML = `

      <div class="result-item">

        <span>Expression Number</span>

        <strong>
          ${expression.reduction.compound}
          /
          ${expression.reduction.final}
        </strong>

      </div>


      <div class="result-item">

        <span>Soul Urge Number</span>

        <strong>
          ${soulUrge.reduction.compound}
          /
          ${soulUrge.reduction.final}
        </strong>

      </div>


      <div class="result-item">

        <span>Personality Number</span>

        <strong>
          ${personality.reduction.compound}
          /
          ${personality.reduction.final}
        </strong>

      </div>


      <div class="result-item">

        <span>Balance Number</span>

        <strong>
          ${balance.reduction.compound}
          /
          ${balance.reduction.final}
        </strong>

      </div>

    `;
    // =====================================
    // Expression Interpretation
    // =====================================

    const expressionResult = I.getExpressionResult(expression);

    if (expressionResult) {
      document.getElementById("expressionInterpretation").innerHTML = `

    <div class="interpretation-card">

      <h3>
        Expression Number ${expressionResult.final}
      </h3>

      <p>
        <strong>${interpretationLabels.theme}:</strong>
        ${expressionResult.theme}
      </p>

      <p>
        ${expressionResult.description}
      </p>

      <p>
        <strong>${interpretationLabels.strengths}:</strong>
        ${expressionResult.strengths.join(", ")}
      </p>

      <p>
        <strong>${interpretationLabels.challenges}:</strong>
        ${expressionResult.challenges.join(", ")}
      </p>

      ${
        expressionResult.compoundTitle
          ? `
            <hr>

            <h3>
              Compound Number ${expressionResult.compound}
            </h3>

            <p>
              <strong>${interpretationLabels.compoundTheme}:</strong>
              ${expressionResult.compoundTheme}
            </p>

            <p>
              ${expressionResult.compoundDescription}
            </p>
          `
          : ""
      }

    </div>

  `;
    }

    // =====================================
    // Soul Urge Interpretation
    // =====================================

    const soulUrgeResult = I.getSoulUrgeResult(soulUrge);

    if (soulUrgeResult) {
      document.getElementById("soulUrgeInterpretation").innerHTML = `

    <div class="interpretation-card">

      <h3>
        Soul Urge Number ${soulUrgeResult.final}
      </h3>

      <p>
        <strong>${interpretationLabels.theme}:</strong>
        ${soulUrgeResult.theme}
      </p>

      <p>
        ${soulUrgeResult.description}
      </p>

      <p>
        <strong>${interpretationLabels.strengths}:</strong>
        ${soulUrgeResult.strengths.join(", ")}
      </p>

      <p>
        <strong>${interpretationLabels.challenges}:</strong>
        ${soulUrgeResult.challenges.join(", ")}
      </p>

      ${
        soulUrgeResult.compoundTitle
          ? `
            <hr>

            <h3>
              Compound Number ${soulUrgeResult.compound}
            </h3>

            <p>
              <strong>${interpretationLabels.compoundTheme}:</strong>
              ${soulUrgeResult.compoundTheme}
            </p>

            <p>
              ${soulUrgeResult.compoundDescription}
            </p>
          `
          : ""
      }

    </div>

  `;
    }
    // =====================================
    // Personality Interpretation
    // =====================================

    const personalityResult = I.getPersonalityResult(personality);

    if (personalityResult) {
      document.getElementById("personalityInterpretation").innerHTML = `

    <div class="interpretation-card">

      <h3>
        Personality Number ${personalityResult.final}
      </h3>

      <p>
        <strong>${interpretationLabels.theme}:</strong>
        ${personalityResult.theme}
      </p>

      <p>
        ${personalityResult.description}
      </p>

      <p>
        <strong>${interpretationLabels.strengths}:</strong>
        ${personalityResult.strengths.join(", ")}
      </p>

      <p>
        <strong>${interpretationLabels.challenges}:</strong>
        ${personalityResult.challenges.join(", ")}
      </p>

      ${
        personalityResult.compoundTitle
          ? `
            <hr>

            <h3>
              Compound Number ${personalityResult.compound}
            </h3>

            <p>
              <strong>${interpretationLabels.compoundTheme}:</strong>
              ${personalityResult.compoundTheme}
            </p>

            <p>
              ${personalityResult.compoundDescription}
            </p>
          `
          : ""
      }

    </div>

  `;
    }
    // =====================================
    // Balance Interpretation
    // =====================================

    const balanceResult = I.getBalanceResult(balance);

    if (balanceResult) {
      document.getElementById("balanceInterpretation").innerHTML = `

    <div class="interpretation-card">

      <h3>
        Balance Number ${balanceResult.final}
      </h3>

      <p>
        <strong>${interpretationLabels.theme}:</strong>
        ${balanceResult.theme}
      </p>

      <p>
        ${balanceResult.description}
      </p>

      <p>
        <strong>${interpretationLabels.strengths}:</strong>
        ${balanceResult.strengths.join(", ")}
      </p>

      <p>
        <strong>${interpretationLabels.challenges}:</strong>
        ${balanceResult.challenges.join(", ")}
      </p>

    </div>

  `;
    }
    // =====================================
    // Hidden Passion Number
    // =====================================

    const hiddenPassion = Calculations.calculateHiddenPassion(
      firstName,
      middleName,
      lastName,
    );
    // =====================================
    // Hidden Passion Interpretation
    // =====================================

    const hiddenPassionResults = I.getHiddenPassionResult(hiddenPassion);

    if (hiddenPassionResults.length > 0) {
      document.getElementById("hiddenPassionInterpretation").innerHTML =
        hiddenPassionResults
          .map(
            (result) => `

        <div class="interpretation-card">

          <h3>
            Hidden Passion Number ${result.number}
          </h3>

          <p>
            <strong>${interpretationLabels.theme}:</strong>
            ${result.theme}
          </p>

          <p>
            ${result.description}
          </p>

          <p>
            <strong>${interpretationLabels.strengths}:</strong>
            ${result.strengths.join(", ")}
          </p>

          <p>
            <strong>${interpretationLabels.challenges}:</strong>
            ${result.challenges.join(", ")}
          </p>

        </div>

      `,
          )
          .join("");
    }
    // =====================================
    // Karmic Numbers
    // =====================================

    const karmicLesson = Calculations.calculateKarmicLesson(
      firstName,
      middleName,
      lastName,
    );

    const subconsciousSelf = Calculations.calculateSubconsciousSelf(
      firstName,
      middleName,
      lastName,
    );

    document.getElementById("karmicNumbers").innerHTML = `

      <div class="result-item">

        <span>Karmic Lesson Numbers</span>

        <strong>
          ${
            karmicLesson.karmicLessons.length
              ? karmicLesson.karmicLessons.join(", ")
              : "None"
          }
        </strong>

      </div>


      <div class="result-item">

        <span>Subconscious Self Number</span>

        <strong>
          ${subconsciousSelf.subconsciousSelf}
        </strong>

      </div>

    `;
    // =====================================
    // Karmic Lesson Interpretation
    // =====================================

    const karmicLessonResults = I.getKarmicLessonResult(karmicLesson);

    console.log("KARMIC LESSON DATA:", karmicLesson);
    console.log("KARMIC LESSON RESULTS:", karmicLessonResults);

    if (karmicLessonResults.length > 0) {
      document.getElementById("karmicLessonInterpretation").innerHTML =
        karmicLessonResults
          .map(
            (result) => `

        <div class="interpretation-card">

          <h3>
            Karmic Lesson Number ${result.number}
          </h3>

          <p>
            <strong>${interpretationLabels.theme}:</strong>
            ${result.theme}
          </p>

          <p>
            ${result.description}
          </p>

          <p>
            <strong>${interpretationLabels.strengths}:</strong>
            ${result.strengths.join(", ")}
          </p>

          <p>
            <strong>${interpretationLabels.challenges}:</strong>
            ${result.challenges.join(", ")}
          </p>

        </div>

      `,
          )
          .join("");
    }
    // =====================================
    // Subconscious Self Interpretation
    // =====================================

    const subconsciousSelfResult =
      I.getSubconsciousSelfResult(subconsciousSelf);

    if (subconsciousSelfResult) {
      document.getElementById("subconsciousSelfInterpretation").innerHTML = `

    <div class="interpretation-card">

      <h3>
        Subconscious Self Number ${subconsciousSelfResult.number}
      </h3>

      <p>
        <strong>${interpretationLabels.theme}:</strong>
        ${subconsciousSelfResult.theme}
      </p>

      <p>
        ${subconsciousSelfResult.description}
      </p>

      <p>
        <strong>${interpretationLabels.strengths}:</strong>
        ${subconsciousSelfResult.strengths.join(", ")}
      </p>

      <p>
        <strong>${interpretationLabels.challenges}:</strong>
        ${subconsciousSelfResult.challenges.join(", ")}
      </p>

    </div>

  `;
    }

    // =====================================
    // Rational Thought Number
    // =====================================

    const rationalThought = Calculations.calculateRationalThought(
      firstName,
      middleName,
      lastName,
      day,
    );
    // =====================================
    // Rational Thought Raw Result
    // =====================================

    document.getElementById("rationalThoughtNumber").innerHTML = `

      <div class="result-item">

        <span>Rational Thought Number</span>

        <strong>
          ${rationalThought.reduction.compound}
          /
          ${rationalThought.reduction.final}
        </strong>

      </div>

    `;
    // =====================================
    // Rational Thought Interpretation
    // =====================================

    const rationalThoughtResult = I.getRationalThoughtResult(rationalThought);

    if (rationalThoughtResult) {
      const rationalThoughtElement = document.getElementById(
        "rationalThoughtInterpretation",
      );

      if (rationalThoughtElement) {
        rationalThoughtElement.innerHTML = `

          <div class="interpretation-card">

            <h3>
              Rational Thought Number ${rationalThoughtResult.number}
            </h3>

            <p>
              <strong>${interpretationLabels.theme}:</strong>
              ${rationalThoughtResult.theme}
            </p>

            <p>
              ${rationalThoughtResult.description}
            </p>

            <p>
              <strong>${interpretationLabels.strengths}:</strong>
              ${rationalThoughtResult.strengths.join(", ")}
            </p>

            <p>
              <strong>${interpretationLabels.challenges}:</strong>
              ${rationalThoughtResult.challenges.join(", ")}
            </p>

          </div>

        `;
      }
    }
    // =====================================
    // Maturity Number
    // =====================================

    const maturity = Calculations.calculateMaturityNumber(
      firstName,
      middleName,
      lastName,
      day,
      month,
      year,
    );
    // =====================================
    // Maturity Raw Result
    // =====================================

    document.getElementById("maturityNumber").innerHTML = `

      <div class="result-item">

        <span>Maturity Number</span>

        <strong>
          ${maturity.reduction.compound}
          /
          ${maturity.reduction.final}
        </strong>

      </div>

    `;
    const maturityResult = I.getMaturityResult(maturity);

    if (maturityResult) {
      document.getElementById("maturityInterpretation").innerHTML = `

        <div class="interpretation-card">

          <h3>
            Maturity Number ${maturityResult.number}
          </h3>

          <p>
            <strong>${interpretationLabels.theme}:</strong>
            ${maturityResult.theme}
          </p>

          <p>
            ${maturityResult.description}
          </p>

          <p>
            <strong>${interpretationLabels.strengths}:</strong>
            ${maturityResult.strengths.join(", ")}
          </p>

          <p>
            <strong>${interpretationLabels.challenges}:</strong>
            ${maturityResult.challenges.join(", ")}
          </p>

        </div>

      `;
    }

    // =====================================
    // Bridge Numbers
    // =====================================

    const bridgeNumbers = Calculations.calculateBridgeNumbers(
      firstName,
      middleName,
      lastName,
      day,
      month,
      year,
    );

    // =====================================
    // Bridge Raw Results
    // =====================================

    document.getElementById("bridgeNumbers").innerHTML = `

      <div class="result-item">

        <span>Life Path–Expression Bridge</span>

        <strong>
          ${bridgeNumbers.lifePathBridge.reduction.final}
        </strong>

      </div>


      <div class="result-item">

        <span>Life Path–Birthday Bridge</span>

        <strong>
          ${bridgeNumbers.birthdayBridge.reduction.final}
        </strong>

      </div>

    `;

    // =====================================
    // Bridge Interpretation
    // =====================================

    const bridgeResult = I.getBridgeResult(bridgeNumbers);

    if (bridgeResult) {
      let bridgeHtml = "";

      if (bridgeResult.lifePathBridge) {
        const result = bridgeResult.lifePathBridge;

        bridgeHtml += `

          <div class="interpretation-card">

            <h3>
              Life Path–Expression Bridge ${result.number}
            </h3>

            <p>
              <strong>${interpretationLabels.theme}:</strong>
              ${result.theme}
            </p>

            <p>
              ${result.description}
            </p>

            <p>
              <strong>${interpretationLabels.strengths}:</strong>
              ${result.strengths.join(", ")}
            </p>

            <p>
              <strong>${interpretationLabels.challenges}:</strong>
              ${result.challenges.join(", ")}
            </p>

          </div>

        `;
      }

      if (bridgeResult.birthdayBridge) {
        const result = bridgeResult.birthdayBridge;

        bridgeHtml += `

          <div class="interpretation-card">

            <h3>
              Life Path–Birthday Bridge ${result.number}
            </h3>

            <p>
              <strong>${interpretationLabels.theme}:</strong>
              ${result.theme}
            </p>

            <p>
              ${result.description}
            </p>

            <p>
              <strong>${interpretationLabels.strengths}:</strong>
              ${result.strengths.join(", ")}
            </p>

            <p>
              <strong>${interpretationLabels.challenges}:</strong>
              ${result.challenges.join(", ")}
            </p>

          </div>

        `;
      }

      document.getElementById("bridgeInterpretation").innerHTML = bridgeHtml;
    }
    // =====================================
    // Pinnacles & Challenges
    // =====================================

    const pinnacles = Calculations.calculatePinnacleNumbers(day, month, year);

    const challenges = Calculations.calculateChallengeNumbers(day, month, year);

    // =====================================
    // Number Display Formatter
    // =====================================

    const formatNumber = (reduction) => {
      const compound = Number(reduction.compound);
      const finalNumber = Number(reduction.final);

      if (compound >= 10 && compound !== finalNumber) {
        return compound + " / " + finalNumber;
      }

      return String(finalNumber);
    };

    // =====================================
    // Pinnacles Display
    // =====================================

    document.getElementById("pinnacles").innerHTML = `

      <!-- =====================================
           Pinnacle Numbers
           ===================================== -->

      <h3>Pinnacle Numbers</h3>


      <div class="result-item">

        <span>First Pinnacle</span>

        <strong>
          ${formatNumber(pinnacles.first.reduction)}
        </strong>

      </div>


      <div class="result-item">

        <span>Second Pinnacle</span>

        <strong>
          ${formatNumber(pinnacles.second.reduction)}
        </strong>

      </div>


      <div class="result-item">

        <span>Third Pinnacle</span>

        <strong>
          ${formatNumber(pinnacles.third.reduction)}
        </strong>

      </div>


      <div class="result-item">

        <span>Fourth Pinnacle</span>

        <strong>
          ${formatNumber(pinnacles.fourth.reduction)}
        </strong>

      </div>


      <!-- =====================================
           Age Ranges
           ===================================== -->

      <h3>Age Ranges</h3>


      <div class="result-item">

        <span>First Pinnacle Age</span>

        <strong>
          ${pinnacles.ageRanges.first.start}
          -
          ${pinnacles.ageRanges.first.end}
        </strong>

      </div>


      <div class="result-item">

        <span>Second Pinnacle Age</span>

        <strong>
          ${pinnacles.ageRanges.second.start}
          -
          ${pinnacles.ageRanges.second.end}
        </strong>

      </div>


      <div class="result-item">

        <span>Third Pinnacle Age</span>

        <strong>
          ${pinnacles.ageRanges.third.start}
          -
          ${pinnacles.ageRanges.third.end}
        </strong>

      </div>


      <div class="result-item">

        <span>Fourth Pinnacle Age</span>

        <strong>
          ${pinnacles.ageRanges.fourth.start}
          +
        </strong>

      </div>


      <!-- =====================================
           Challenge Numbers
           ===================================== -->

      <h3>Challenge Numbers</h3>


      <div class="result-item">

        <span>First Challenge</span>

        <strong>
          ${challenges.first.reduction.final}
        </strong>

      </div>


      <div class="result-item">

        <span>Second Challenge</span>

        <strong>
          ${challenges.second.reduction.final}
        </strong>

      </div>


      <div class="result-item">

        <span>Third Challenge</span>

        <strong>
          ${challenges.third.reduction.final}
        </strong>

      </div>


      <div class="result-item">

        <span>Fourth Challenge</span>

        <strong>
          ${challenges.fourth.reduction.final}
        </strong>

      </div>

    `;
    // =====================================
    // Pinnacle Interpretation
    // =====================================

    const pinnacleResult = I.getPinnacleResult(pinnacles);

    if (pinnacleResult) {
      const pinnacleLabels = {
        first: "First Pinnacle",
        second: "Second Pinnacle",
        third: "Third Pinnacle",
        fourth: "Fourth Pinnacle",
      };

      const pinnacleKeys = ["first", "second", "third", "fourth"];

      const pinnacleHtml = pinnacleKeys
        .map((key) => {
          const result = pinnacleResult[key];

          if (!result) {
            return "";
          }

          const ageText =
            result.ageRange.end === null
              ? result.ageRange.start + "+"
              : result.ageRange.start + " - " + result.ageRange.end;

          return `

            <div class="interpretation-card">

              <h3>
                ${pinnacleLabels[key]}
                ${result.number}
              </h3>

              <p>
                <strong>${interpretationLabels.ageRange}:</strong>
                ${ageText}
              </p>

              <p>
                <strong>${interpretationLabels.theme}:</strong>
                ${result.theme}
              </p>

              <p>
                ${result.description}
              </p>

              <p>
                <strong>${interpretationLabels.strengths}:</strong>
                ${result.strengths.join(", ")}
              </p>

              <p>
                <strong>${interpretationLabels.challenges}:</strong>
                ${result.challenges.join(", ")}
              </p>

            </div>

          `;
        })
        .join("");

      document.getElementById("pinnacleInterpretation").innerHTML =
        pinnacleHtml;
    }
    // =====================================
    // Challenge Interpretation
    // =====================================

    const challengeResult = I.getChallengeResult(challenges);

    if (challengeResult) {
      const challengeLabels = {
        first: "First Challenge",
        second: "Second Challenge",
        third: "Third Challenge",
        fourth: "Fourth Challenge",
      };

      const challengePeriods = {
        first: "Birth to approximately age 30–35",
        second: "Approximately age 30–35 to 55–60",
        third: "Lifelong Main Challenge",
        fourth: "Approximately age 55–60 onward",
      };

      const challengeKeys = ["first", "second", "third", "fourth"];

      const challengeHtml = challengeKeys
        .map((key) => {
          const result = challengeResult[key];

          if (!result) {
            return "";
          }

          return `

            <div class="interpretation-card">

              <h3>
                ${challengeLabels[key]}
                ${result.number}
              </h3>

              <p>
                <strong>${interpretationLabels.approximatePeriod}:</strong>
                ${challengePeriods[key]}
              </p>

              <p>
                <strong>${interpretationLabels.theme}:</strong>
                ${result.theme}
              </p>

              <p>
                ${result.description}
              </p>

              <p>
                <strong>${interpretationLabels.strengths}:</strong>
                ${result.strengths.join(", ")}
              </p>

              <p>
                <strong>${interpretationLabels.challenges}:</strong>
                ${result.challenges.join(", ")}
              </p>

            </div>

          `;
        })
        .join("");

      document.getElementById("challengeInterpretation").innerHTML =
        challengeHtml;
    }
    // =====================================
    // Personal Cycles
    // =====================================

    const today = new Date();

    const currentYear = today.getFullYear();

    const currentMonth = today.getMonth() + 1;

    const currentDay = today.getDate();

    // =====================================
    // Personal Year
    // =====================================

    const personalYear = Calculations.calculatePersonalYear(
      day,
      month,
      currentYear,
    );
    // =====================================
    // Personal Year Interpretation
    // =====================================

    const personalYearResult = I.getPersonalYearResult(personalYear);

    if (personalYearResult) {
      document.getElementById("personalYearInterpretation").innerHTML = `

        <div class="interpretation-card">

          <h3>
            Personal Year ${currentYear}
            — Number ${personalYearResult.number}
          </h3>

          <p>
            <strong>${interpretationLabels.theme}:</strong>
            ${personalYearResult.theme}
          </p>

          <p>
            ${personalYearResult.description}
          </p>

          <p>
            <strong>${interpretationLabels.strengths}:</strong>
            ${personalYearResult.strengths.join(", ")}
          </p>

          <p>
            <strong>${interpretationLabels.challenges}:</strong>
            ${personalYearResult.challenges.join(", ")}
          </p>

        </div>

      `;
    }
    // =====================================
    // Personal Month
    // =====================================

    const personalMonth = Calculations.calculatePersonalMonth(
      day,
      month,
      currentYear,
      currentMonth,
    );
    // =====================================
    // Personal Month Interpretation
    // =====================================

    const personalMonthResult = I.getPersonalMonthResult(personalMonth);

    if (personalMonthResult) {
      document.getElementById("personalMonthInterpretation").innerHTML = `

        <div class="interpretation-card">

          <h3>
            Personal Month ${currentMonth}/${currentYear}
            — Number ${personalMonthResult.number}
          </h3>

          <p>
            <strong>${interpretationLabels.theme}:</strong>
            ${personalMonthResult.theme}
          </p>

          <p>
            ${personalMonthResult.description}
          </p>

          <p>
            <strong>${interpretationLabels.strengths}:</strong>
            ${personalMonthResult.strengths.join(", ")}
          </p>

          <p>
            <strong>${interpretationLabels.challenges}:</strong>
            ${personalMonthResult.challenges.join(", ")}
          </p>

        </div>

      `;
    }
    // =====================================
    // Personal Day
    // =====================================

    const personalDay = Calculations.calculatePersonalDay(
      day,
      month,
      currentYear,
      currentMonth,
      currentDay,
    );
    // =====================================
    // Personal Day Interpretation
    // =====================================

    const personalDayResult = I.getPersonalDayResult(personalDay);

    if (personalDayResult) {
      document.getElementById("personalDayInterpretation").innerHTML = `

        <div class="interpretation-card">

          <h3>
            Personal Day ${currentDay}/${currentMonth}/${currentYear}
            — Number ${personalDayResult.number}
          </h3>

          <p>
            <strong>${interpretationLabels.theme}:</strong>
            ${personalDayResult.theme}
          </p>

          <p>
            ${personalDayResult.description}
          </p>

          <p>
            <strong>${interpretationLabels.strengths}:</strong>
            ${personalDayResult.strengths.join(", ")}
          </p>

          <p>
            <strong>${interpretationLabels.challenges}:</strong>
            ${personalDayResult.challenges.join(", ")}
          </p>

        </div>

      `;
    }
    // =====================================
    // Personal Cycles Display
    // =====================================

    document.getElementById("personalCycles").innerHTML = `

      <!-- =====================================
           Personal Year
           ===================================== -->

      <h3>Personal Year</h3>


      <div class="result-item">

        <span>
          Personal Year ${currentYear}
        </span>

        <strong>
          ${personalYear.reduction.compound}
          /
          ${personalYear.reduction.final}
        </strong>

      </div>


      <!-- =====================================
           Personal Month
           ===================================== -->

      <h3>Personal Month</h3>


      <div class="result-item">

        <span>
          Personal Month ${currentMonth}
        </span>

        <strong>
          ${personalMonth.reduction.compound}
          /
          ${personalMonth.reduction.final}
        </strong>

      </div>


      <!-- =====================================
           Personal Day
           ===================================== -->

      <h3>Personal Day</h3>


      <div class="result-item">

        <span>
          Personal Day ${currentDay}
        </span>

        <strong>
          ${personalDay.reduction.compound}
          /
          ${personalDay.reduction.final}
        </strong>

      </div>

    `;

    // =====================================
    // Universal Cycles
    // =====================================

    const universalYear = Calculations.calculateUniversalYear(currentYear);
    // =====================================
    // Universal Year Interpretation
    // =====================================

    const universalYearResult = I.getUniversalYearResult(universalYear);

    if (universalYearResult) {
      document.getElementById("universalYearInterpretation").innerHTML = `

        <div class="interpretation-card">

          <h3>
            Universal Year ${currentYear}
            — Number ${universalYearResult.number}
          </h3>

          <p>
            <strong>${interpretationLabels.theme}:</strong>
            ${universalYearResult.theme}
          </p>

          <p>
            ${universalYearResult.description}
          </p>

          <p>
            <strong>${interpretationLabels.strengths}:</strong>
            ${universalYearResult.strengths.join(", ")}
          </p>

          <p>
            <strong>${interpretationLabels.challenges}:</strong>
            ${universalYearResult.challenges.join(", ")}
          </p>

        </div>

      `;
    }
    const universalMonth = Calculations.calculateUniversalMonth(
      currentYear,
      currentMonth,
    );
    // =====================================
    // Universal Month Interpretation
    // =====================================

    const universalMonthResult = I.getUniversalMonthResult(universalMonth);

    if (universalMonthResult) {
      document.getElementById("universalMonthInterpretation").innerHTML = `

        <div class="interpretation-card">

          <h3>
            Universal Month ${currentMonth}/${currentYear}
            — Number ${universalMonthResult.number}
          </h3>

          <p>
            <strong>${interpretationLabels.theme}:</strong>
            ${universalMonthResult.theme}
          </p>

          <p>
            ${universalMonthResult.description}
          </p>

          <p>
            <strong>${interpretationLabels.strengths}:</strong>
            ${universalMonthResult.strengths.join(", ")}
          </p>

          <p>
            <strong>${interpretationLabels.challenges}:</strong>
            ${universalMonthResult.challenges.join(", ")}
          </p>

        </div>

      `;
    }
    const universalDay = Calculations.calculateUniversalDay(
      currentYear,
      currentMonth,
      currentDay,
    );
    // =====================================
    // Universal Day Interpretation
    // =====================================

    const universalDayResult = I.getUniversalDayResult(universalDay);

    if (universalDayResult) {
      document.getElementById("universalDayInterpretation").innerHTML = `

        <div class="interpretation-card">

          <h3>
            Universal Day
            ${currentDay}/${currentMonth}/${currentYear}
            — Number ${universalDayResult.number}
          </h3>

          <p>
            <strong>${interpretationLabels.theme}:</strong>
            ${universalDayResult.theme}
          </p>

          <p>
            ${universalDayResult.description}
          </p>

          <p>
            <strong>${interpretationLabels.strengths}:</strong>
            ${universalDayResult.strengths.join(", ")}
          </p>

          <p>
            <strong>${interpretationLabels.challenges}:</strong>
            ${universalDayResult.challenges.join(", ")}
          </p>

        </div>

      `;
    }
    // =====================================
    // Universal Cycles Display
    // =====================================

    document.getElementById("universalCycles").innerHTML = `

      <!-- =====================================
           Universal Year
           ===================================== -->

      <h3>Universal Year</h3>


      <div class="result-item">

        <span>
          Universal Year ${currentYear}
        </span>

        <strong>
          ${universalYear.reduction.compound}
          /
          ${universalYear.reduction.final}
        </strong>

      </div>


      <!-- =====================================
           Universal Month
           ===================================== -->

      <h3>Universal Month</h3>


      <div class="result-item">

        <span>
          Universal Month ${currentMonth}
        </span>

        <strong>
          ${universalMonth.reduction.compound}
          /
          ${universalMonth.reduction.final}
        </strong>

      </div>


      <!-- =====================================
           Universal Day
           ===================================== -->

      <h3>Universal Day</h3>


      <div class="result-item">

        <span>
          Universal Day ${currentDay}
        </span>

        <strong>
          ${universalDay.reduction.compound}
          /
          ${universalDay.reduction.final}
        </strong>

      </div>

    `;

    // =====================================
    // Convert Interpretation Cards
    // To Closed Inner Accordions
    // =====================================

    const interpretationCards = reportContainer.querySelectorAll(
      ".interpretation-card",
    );

    interpretationCards.forEach((card) => {
      // Do not wrap a card that is already inside
      // a sub accordion.
      if (card.closest(".sub-accordion")) {
        return;
      }

      const titleElement = Array.from(card.children).find(
        (element) => element.tagName === "H3",
      );

      const title = titleElement
        ? titleElement.textContent.trim()
        : "View Interpretation";

      const details = document.createElement("details");
      details.className = "sub-accordion";

      const summary = document.createElement("summary");
      summary.textContent = title;

      card.parentNode.insertBefore(details, card);

      details.appendChild(summary);
      details.appendChild(card);

      // The title is now shown in the clickable summary,
      // so remove the duplicate heading from inside the card.
      if (titleElement) {
        titleElement.remove();
      }
    });
  },
};
