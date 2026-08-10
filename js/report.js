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
          ${expression.reduction.final}
        </strong>

      </div>


      <div class="result-item">

        <span>Soul Urge Number</span>

        <strong>
          ${soulUrge.reduction.final}
        </strong>

      </div>


      <div class="result-item">

        <span>Personality Number</span>

        <strong>
          ${personality.reduction.final}
        </strong>

      </div>


      <div class="result-item">

        <span>Balance Number</span>

        <strong>
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
  },
};
