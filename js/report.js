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

      <details open class="accordion">

        <summary>Birth Numbers</summary>

        <div id="birthNumbers"></div>

      </details>


      <!-- =====================================
           Name Numbers
           ===================================== -->

      <details class="accordion">

        <summary>Name Numbers</summary>

        <div id="nameNumbers"></div>

      </details>


      <!-- =====================================
           Karmic Numbers
           ===================================== -->

      <details class="accordion">

        <summary>Karmic Numbers</summary>

        <div id="karmicNumbers"></div>

      </details>


      <!-- =====================================
           Pinnacles & Challenges
           ===================================== -->

      <details class="accordion">

        <summary>Pinnacles & Challenges</summary>

        <div id="pinnacles"></div>

      </details>


      <!-- =====================================
           Personal Cycles
           ===================================== -->

      <details class="accordion">

        <summary>Personal Cycles</summary>

        <div id="personalCycles"></div>

      </details>


      <!-- =====================================
           Universal Cycles
           ===================================== -->

      <details class="accordion">

        <summary>Universal Cycles</summary>

        <div id="universalCycles"></div>

      </details>

    `;

    // =====================================
    // Birth Numbers
    // =====================================

    const lifePath = Calculations.calculateLifePath(day, month, year);

    const birthday = Calculations.calculateBirthdayNumber(day);

    document.getElementById("birthNumbers").innerHTML = `

      <div class="result-item">

        <span>Birthday Number</span>

        <strong>
          ${birthday.final}
        </strong>

      </div>


      <div class="result-item">

        <span>Life Path Number</span>

        <strong>
          ${lifePath.reduction.final}
        </strong>

      </div>

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
    // Pinnacles & Challenges
    // =====================================

    const pinnacles = Calculations.calculatePinnacleNumbers(day, month, year);

    const challenges = Calculations.calculateChallengeNumbers(day, month, year);

    document.getElementById("pinnacles").innerHTML = `

      <!-- =====================================
           Pinnacle Numbers
           ===================================== -->

      <h3>Pinnacle Numbers</h3>


      <div class="result-item">

        <span>First Pinnacle</span>

        <strong>
          ${pinnacles.first.reduction.compound}
          /
          ${pinnacles.first.reduction.final}
        </strong>

      </div>


      <div class="result-item">

        <span>Second Pinnacle</span>

        <strong>
          ${pinnacles.second.reduction.compound}
          /
          ${pinnacles.second.reduction.final}
        </strong>

      </div>


      <div class="result-item">

        <span>Third Pinnacle</span>

        <strong>
          ${pinnacles.third.reduction.compound}
          /
          ${pinnacles.third.reduction.final}
        </strong>

      </div>


      <div class="result-item">

        <span>Fourth Pinnacle</span>

        <strong>
          ${pinnacles.fourth.reduction.compound}
          /
          ${pinnacles.fourth.reduction.final}
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
    // Personal Month
    // =====================================

    const personalMonth = Calculations.calculatePersonalMonth(
      day,
      month,
      currentYear,
      currentMonth,
    );

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

    const universalMonth = Calculations.calculateUniversalMonth(
      currentYear,
      currentMonth,
    );

    const universalDay = Calculations.calculateUniversalDay(
      currentYear,
      currentMonth,
      currentDay,
    );

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
  },
};
