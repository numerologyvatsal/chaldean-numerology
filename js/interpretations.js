/*
=========================================
CHALDEAN NUMEROLOGY
Traditional Interpretations
=========================================
*/

const Interpretations = {
  // =====================================
  // 04. Birthday Number
  // Traditional Chaldean
  // =====================================

  birthday: {
    1: {
      title: "Birthday Number 1",
      theme: "Leadership & Independence",

      description:
        "Birthday Number 1 represents independence, initiative, leadership and originality. " +
        "These people generally prefer to make their own decisions and take the lead rather than follow others.",

      strengths: [
        "Natural leadership",
        "Independent decision-making",
        "Strong initiative",
        "Original ideas",
        "Self-confidence",
        "Ambition",
      ],

      challenges: [
        "Ego or excessive pride",
        "Stubbornness",
        "Impatience",
        "Difficulty accepting control from others",
      ],
    },

    2: {
      title: "Birthday Number 2",
      theme: "Cooperation & Sensitivity",

      description:
        "Birthday Number 2 represents cooperation, diplomacy, sensitivity and partnership. " +
        "These people often understand the feelings of others and naturally seek harmony in relationships.",

      strengths: [
        "Diplomatic nature",
        "Cooperation",
        "Emotional sensitivity",
        "Intuition",
        "Good listening ability",
        "Relationship building",
      ],

      challenges: [
        "Over-sensitivity",
        "Indecision",
        "Mood fluctuations",
        "Taking criticism personally",
        "Dependence on others' approval",
      ],
    },

    3: {
      title: "Birthday Number 3",
      theme: "Creativity & Expression",

      description:
        "Birthday Number 3 represents communication, creativity, expression and optimism. " +
        "These people often express themselves through speech, writing, creativity or social interaction.",

      strengths: [
        "Creativity",
        "Strong communication",
        "Self-expression",
        "Social nature",
        "Optimism",
        "Ability to inspire others",
      ],

      challenges: [
        "Scattered attention",
        "Lack of discipline",
        "Over-talking",
        "Emotional ups and downs",
        "Difficulty maintaining consistency",
      ],
    },

    4: {
      title: "Birthday Number 4",
      theme: "Structure & Discipline",

      description:
        "Birthday Number 4 represents practicality, discipline, structure and hard work. " +
        "These people generally prefer stability, order and a systematic approach to life.",

      strengths: [
        "Practical thinking",
        "Organization",
        "Reliability",
        "Persistence",
        "Strong work ethic",
        "Discipline",
      ],

      challenges: [
        "Rigidity",
        "Stubbornness",
        "Being overly serious",
        "Resistance to change",
        "Excessive attachment to routine",
      ],
    },

    5: {
      title: "Birthday Number 5",
      theme: "Freedom & Adaptability",

      description:
        "Birthday Number 5 represents freedom, movement, adaptability and experience. " +
        "These people usually enjoy variety, communication, exploration and learning through experience.",

      strengths: [
        "Adaptability",
        "Quick learning",
        "Versatility",
        "Courage",
        "Communication skills",
        "Ability to handle change",
      ],

      challenges: [
        "Restlessness",
        "Impulsiveness",
        "Inconsistency",
        "Risk-taking",
        "Difficulty with routine",
        "Desire for excessive freedom",
      ],
    },

    6: {
      title: "Birthday Number 6",
      theme: "Responsibility & Harmony",

      description:
        "Birthday Number 6 represents responsibility, family, harmony, care and service. " +
        "These people often feel naturally responsible for the wellbeing of people around them.",

      strengths: [
        "Caring nature",
        "Responsibility",
        "Protectiveness",
        "Loyalty",
        "Love of harmony and beauty",
        "Family orientation",
      ],

      challenges: [
        "Taking excessive responsibility",
        "Possessiveness",
        "Perfectionism",
        "Interfering in others' matters",
        "Difficulty saying no",
      ],
    },

    7: {
      title: "Birthday Number 7",
      theme: "Analysis & Wisdom",

      description:
        "Birthday Number 7 represents analysis, introspection, research, wisdom and the search for deeper knowledge. " +
        "These people often prefer to understand things deeply rather than accepting everything at face value.",

      strengths: [
        "Analytical ability",
        "Observation",
        "Intuition",
        "Research mindset",
        "Independent thinking",
        "Interest in deeper knowledge",
      ],

      challenges: [
        "Overthinking",
        "Isolation",
        "Emotional distance",
        "Excessive doubt",
        "Difficulty opening up emotionally",
      ],
    },

    8: {
      title: "Birthday Number 8",
      theme: "Power & Responsibility",

      description:
        "Birthday Number 8 represents authority, ambition, power, management and material responsibility. " +
        "These people can develop strong determination and an ability to handle serious responsibilities.",

      strengths: [
        "Determination",
        "Management ability",
        "Ambition",
        "Endurance",
        "Authority",
        "Responsibility",
      ],

      challenges: [
        "Excessive pressure",
        "Need for control",
        "Material stress",
        "Power struggles",
        "Extreme approach to success",
      ],
    },

    9: {
      title: "Birthday Number 9",
      theme: "Courage & Compassion",

      description:
        "Birthday Number 9 represents courage, compassion, generosity, emotional intensity and a broad humanitarian outlook. " +
        "These people can have strong emotional energy and a desire to help or protect others.",

      strengths: [
        "Courage",
        "Generosity",
        "Compassion",
        "Strong emotional energy",
        "Broad-mindedness",
        "Humanitarian nature",
      ],

      challenges: [
        "Emotional intensity",
        "Impatience",
        "Anger when provoked",
        "Difficulty letting go",
        "Taking situations too personally",
      ],
    },
  },
  // =====================================
  // Compound Birthday Interpretations
  // Traditional Chaldean
  // =====================================

  compoundBirthday: {
    10: {
      title: "Compound Number 10",
      theme: "Wheel of Fortune",
      description:
        "Compound Number 10 is associated with opportunity, recognition, confidence and changing circumstances.",
    },

    11: {
      title: "Compound Number 11",
      theme: "Warning & Hidden Dangers",
      description:
        "Compound Number 11 indicates sensitivity, intuition and the need for caution regarding hidden opposition or difficult situations.",
    },

    12: {
      title: "Compound Number 12",
      theme: "The Sacrifice",
      description:
        "Compound Number 12 is associated with sacrifice, patience and learning through difficult or demanding experiences.",
    },

    13: {
      title: "Compound Number 13",
      theme: "Transformation & Rebuilding",
      description:
        "Compound Number 13 represents transformation, rebuilding and progress through disciplined effort and change.",
    },

    14: {
      title: "Compound Number 14",
      theme: "Movement & Risk",
      description:
        "Compound Number 14 is associated with movement, communication, adaptability and caution against impulsive risk.",
    },

    15: {
      title: "Compound Number 15",
      theme: "The Magician",
      description:
        "Compound Number 15 is associated with charm, magnetism, influence, creativity and persuasive ability.",
    },

    16: {
      title: "Compound Number 16",
      theme: "The Shattered Citadel",
      description:
        "Compound Number 16 is associated with sudden disruption, humility, self-reflection and rebuilding on stronger foundations.",
    },

    17: {
      title: "Compound Number 17",
      theme: "The Star of the Magi",
      description:
        "Compound Number 17 is associated with recognition, spiritual strength, perseverance and lasting achievement.",
    },

    18: {
      title: "Compound Number 18",
      theme: "Conflict & Struggle",
      description:
        "Compound Number 18 is associated with conflict, opposition, emotional pressure and the need for careful judgment.",
    },

    19: {
      title: "Compound Number 19",
      theme: "The Prince of Heaven",
      description:
        "Compound Number 19 is associated with success, honour, recognition and victory after difficulties.",
    },

    20: {
      title: "Compound Number 20",
      theme: "The Awakening",
      description:
        "Compound Number 20 represents awakening, reflection, purpose and progress that may require patience and timing.",
    },

    21: {
      title: "Compound Number 21",
      theme: "The Crown of the Magi",
      description:
        "Compound Number 21 is associated with advancement, recognition, achievement and success after effort.",
    },

    22: {
      title: "Compound Number 22",
      theme: "Warning & Illusion",
      description:
        "Compound Number 22 calls for careful judgment and awareness of illusion, deception or misleading influences.",
    },

    23: {
      title: "Compound Number 23",
      theme: "Royal Star of the Lion",
      description:
        "Compound Number 23 is associated with protection, support, opportunity and favourable assistance from others.",
    },

    24: {
      title: "Compound Number 24",
      theme: "Love, Support & Gain",
      description:
        "Compound Number 24 is associated with relationships, affection, support and gains through helpful associations.",
    },

    25: {
      title: "Compound Number 25",
      theme: "Strength Through Experience",
      description:
        "Compound Number 25 represents wisdom, observation and strong judgment developed through experience.",
    },

    26: {
      title: "Compound Number 26",
      theme: "Partnerships & Troubles",
      description:
        "Compound Number 26 calls for caution regarding partnerships, agreements and financial associations.",
    },

    27: {
      title: "Compound Number 27",
      theme: "The Sceptre",
      description:
        "Compound Number 27 is associated with authority, intelligent planning, courage and purposeful achievement.",
    },

    28: {
      title: "Compound Number 28",
      theme: "Trust & Reversal",
      description:
        "Compound Number 28 indicates potential for success but also warns against misplaced trust and poor judgment.",
    },

    29: {
      title: "Compound Number 29",
      theme: "Emotional Tests & Uncertainty",
      description:
        "Compound Number 29 is associated with emotional tests, uncertainty, relationship lessons and careful trust.",
    },

    30: {
      title: "Compound Number 30",
      theme: "The Loner Philosopher",
      description:
        "Compound Number 30 is associated with intellect, reflection, independent thought and philosophical understanding.",
    },

    31: {
      title: "Compound Number 31",
      theme: "The Hermit",
      description:
        "Compound Number 31 is associated with independence, solitude, self-reliance and intellectual depth.",
    },
  },
  // =====================================
  // Birthday Number Helper
  // =====================================

  getBirthdayInterpretation(number) {
    const value = Number(number);

    return this.birthday[value] || null;
  },

  // =====================================
  // Compound Birthday Helper
  // =====================================

  getCompoundBirthdayInterpretation(number) {
    const value = Number(number);

    return this.compoundBirthday[value] || null;
  },

  // =====================================
  // Complete Birthday Interpretation
  // =====================================

  getBirthdayResult(birthdayData) {
    if (!birthdayData || typeof birthdayData !== "object") {
      return null;
    }

    const compound = Number(birthdayData.original);
    const finalNumber = Number(birthdayData.final);

    // =====================================
    // Root Number Interpretation
    // =====================================

    const interpretation = this.getBirthdayInterpretation(finalNumber);

    // =====================================
    // Compound Number Interpretation
    // =====================================

    const compoundInterpretation =
      this.getCompoundBirthdayInterpretation(compound);

    if (!interpretation) {
      return null;
    }

    return {
      // Numbers
      compound: compound,
      final: finalNumber,

      // Root Interpretation
      title: interpretation.title,
      theme: interpretation.theme,
      description: interpretation.description,

      strengths: interpretation.strengths,
      challenges: interpretation.challenges,

      // Compound Interpretation
      compoundTitle: compoundInterpretation
        ? compoundInterpretation.title
        : null,

      compoundTheme: compoundInterpretation
        ? compoundInterpretation.theme
        : null,

      compoundDescription: compoundInterpretation
        ? compoundInterpretation.description
        : null,
    };
  },

  // =====================================
  // Life Path Number
  // Traditional Chaldean
  // =====================================

  lifePath: {
    1: {
      title: "Life Path Number 1",
      theme: "Leadership & Independence",

      description:
        "Life Path Number 1 represents leadership, independence, initiative and originality. " +
        "This path encourages the person to develop self-confidence, take responsibility for decisions and create an individual direction in life.",

      strengths: [
        "Natural leadership",
        "Independent thinking",
        "Strong initiative",
        "Original ideas",
        "Self-confidence",
        "Ambition",
      ],

      challenges: [
        "Ego or excessive pride",
        "Stubbornness",
        "Impatience",
        "Difficulty accepting advice",
        "Trying to control situations",
      ],
    },

    2: {
      title: "Life Path Number 2",
      theme: "Cooperation & Diplomacy",

      description:
        "Life Path Number 2 represents cooperation, diplomacy, sensitivity and partnership. " +
        "This path encourages patience, emotional understanding, teamwork and the ability to create harmony with others.",

      strengths: [
        "Diplomatic nature",
        "Cooperation",
        "Emotional sensitivity",
        "Intuition",
        "Good listening ability",
        "Partnership skills",
      ],

      challenges: [
        "Over-sensitivity",
        "Indecision",
        "Dependence on approval",
        "Mood fluctuations",
        "Difficulty handling criticism",
      ],
    },

    3: {
      title: "Life Path Number 3",
      theme: "Creativity & Communication",

      description:
        "Life Path Number 3 represents creativity, communication, expression and optimism. " +
        "This path encourages the person to express ideas, develop creative abilities and connect with others through communication.",

      strengths: [
        "Creativity",
        "Communication ability",
        "Self-expression",
        "Social nature",
        "Optimism",
        "Ability to inspire others",
      ],

      challenges: [
        "Scattered attention",
        "Lack of discipline",
        "Over-talking",
        "Emotional ups and downs",
        "Difficulty maintaining consistency",
      ],
    },

    4: {
      title: "Life Path Number 4",
      theme: "Structure & Discipline",

      description:
        "Life Path Number 4 represents structure, discipline, practicality and hard work. " +
        "This path encourages the person to build stable foundations through patience, organization and consistent effort.",

      strengths: [
        "Practical thinking",
        "Organization",
        "Reliability",
        "Persistence",
        "Strong work ethic",
        "Discipline",
      ],

      challenges: [
        "Rigidity",
        "Stubbornness",
        "Being overly serious",
        "Resistance to change",
        "Excessive attachment to routine",
      ],
    },

    5: {
      title: "Life Path Number 5",
      theme: "Freedom & Adaptability",

      description:
        "Life Path Number 5 represents freedom, movement, adaptability and experience. " +
        "This path encourages learning through experience, communication, exploration and the ability to adapt to changing circumstances.",

      strengths: [
        "Adaptability",
        "Quick learning",
        "Versatility",
        "Communication skills",
        "Courage",
        "Ability to handle change",
      ],

      challenges: [
        "Restlessness",
        "Impulsiveness",
        "Inconsistency",
        "Risk-taking",
        "Difficulty with routine",
        "Desire for excessive freedom",
      ],
    },

    6: {
      title: "Life Path Number 6",
      theme: "Responsibility & Harmony",

      description:
        "Life Path Number 6 represents responsibility, harmony, family, care and service. " +
        "This path encourages the person to create balance, support others and take responsibility while maintaining healthy personal boundaries.",

      strengths: [
        "Caring nature",
        "Responsibility",
        "Protectiveness",
        "Loyalty",
        "Family orientation",
        "Love of harmony and beauty",
      ],

      challenges: [
        "Taking excessive responsibility",
        "Trying to solve everyone's problems",
        "Over-protection",
        "Perfectionism",
        "Difficulty saying no",
        "Interfering in others' matters",
      ],
    },

    7: {
      title: "Life Path Number 7",
      theme: "Analysis & Wisdom",

      description:
        "Life Path Number 7 represents analysis, introspection, research, wisdom and the search for deeper knowledge. " +
        "This path encourages the person to develop understanding through observation, study, reflection and independent thinking.",

      strengths: [
        "Analytical ability",
        "Observation",
        "Intuition",
        "Research mindset",
        "Independent thinking",
        "Interest in deeper knowledge",
      ],

      challenges: [
        "Overthinking",
        "Isolation",
        "Emotional distance",
        "Excessive doubt",
        "Difficulty opening up",
      ],
    },

    8: {
      title: "Life Path Number 8",
      theme: "Power & Achievement",

      description:
        "Life Path Number 8 represents authority, ambition, management, responsibility and material achievement. " +
        "This path encourages the person to develop discipline, leadership and responsible use of power and resources.",

      strengths: [
        "Determination",
        "Management ability",
        "Ambition",
        "Leadership",
        "Endurance",
        "Responsibility",
      ],

      challenges: [
        "Excessive pressure",
        "Need for control",
        "Material stress",
        "Power struggles",
        "Work-life imbalance",
      ],
    },

    9: {
      title: "Life Path Number 9",
      theme: "Courage & Compassion",

      description:
        "Life Path Number 9 represents courage, compassion, generosity, completion and a broad humanitarian outlook. " +
        "This path encourages the person to use experience and emotional strength in ways that can benefit others.",

      strengths: [
        "Courage",
        "Generosity",
        "Compassion",
        "Broad-mindedness",
        "Strong emotional energy",
        "Humanitarian nature",
      ],

      challenges: [
        "Emotional intensity",
        "Impatience",
        "Difficulty letting go",
        "Taking situations personally",
        "Emotional attachment to the past",
      ],
    },
  },
  // =====================================
  // Life Path Number Helper
  // =====================================

  getLifePathInterpretation(number) {
    const value = Number(number);

    return this.lifePath[value] || null;
  },

  // =====================================
  // Complete Life Path Result
  // =====================================

  getLifePathResult(lifePathData) {
    if (!lifePathData || typeof lifePathData !== "object") {
      return null;
    }

    const compound = Number(lifePathData.reduction.compound);
    const finalNumber = Number(lifePathData.reduction.final);

    const interpretation = this.getLifePathInterpretation(finalNumber);

    const compoundInterpretation =
      this.getLifePathCompoundInterpretation(compound);

    if (!interpretation) {
      return null;
    }

    return {
      compound,
      final: finalNumber,

      title: interpretation.title,
      theme: interpretation.theme,
      description: interpretation.description,

      strengths: interpretation.strengths,
      challenges: interpretation.challenges,

      compoundTitle: compoundInterpretation
        ? compoundInterpretation.title
        : null,

      compoundTheme: compoundInterpretation
        ? compoundInterpretation.theme
        : null,

      compoundDescription: compoundInterpretation
        ? compoundInterpretation.description
        : null,
    };
  },
  // =====================================
  // Life Path Compound Numbers
  // Traditional Chaldean
  // =====================================

  lifePathCompound: {
    10: {
      title: "Compound Number 10",
      theme: "Wheel of Fortune",
      description:
        "Compound Number 10 is traditionally associated with the Wheel of Fortune. It indicates opportunities, recognition, honour and the possibility of success through favourable circumstances. It can also indicate changes and fluctuations in circumstances.",
      strengths: [
        "Opportunity recognition",
        "Self-confidence",
        "Leadership ability",
        "Recognition and honour",
        "Ability to benefit from favourable circumstances",
      ],
      challenges: [
        "Sudden changes",
        "Overconfidence",
        "Dependence on favourable circumstances",
        "Fluctuations in success",
      ],
    },

    11: {
      title: "Compound Number 11",
      theme: "Warning & Hidden Dangers",
      description:
        "Compound Number 11 carries a strong intuitive and creative vibration, but traditionally it is also considered a warning number. It can indicate hidden opposition, deception or difficult situations that require careful judgment.",
      strengths: [
        "Intuition",
        "Creative ability",
        "Sensitivity",
        "Strong perception",
        "Ability to sense hidden situations",
      ],
      challenges: [
        "Hidden opposition",
        "Deception",
        "Emotional sensitivity",
        "Difficult situations",
        "Lack of clear judgment",
      ],
    },

    12: {
      title: "Compound Number 12",
      theme: "The Sacrifice",
      description:
        "Compound Number 12 is traditionally associated with sacrifice and learning through difficult experiences. It can indicate a tendency to put others first while experiencing mental pressure or anxiety.",
      strengths: [
        "Self-sacrifice",
        "Compassion",
        "Learning through experience",
        "Understanding others",
        "Emotional awareness",
      ],
      challenges: [
        "Unnecessary sacrifice",
        "Mental anxiety",
        "Putting others before self",
        "Feeling unappreciated",
        "Difficulty maintaining personal boundaries",
      ],
    },

    13: {
      title: "Compound Number 13",
      theme: "Transformation & Rebuilding",
      description:
        "Compound Number 13 represents transformation and regeneration. Traditional Chaldean interpretation connects it with the breaking of old structures and the rebuilding of life through discipline, effort and change.",
      strengths: [
        "Transformation",
        "Regeneration",
        "Ability to rebuild",
        "Persistence",
        "Practical problem-solving",
      ],
      challenges: [
        "Sudden changes",
        "Upheaval",
        "Resistance to transformation",
        "Difficult rebuilding periods",
        "Need for discipline",
      ],
    },

    14: {
      title: "Compound Number 14",
      theme: "Movement & Risk",
      description:
        "Compound Number 14 is associated with movement, communication, adaptability and business activity. It can bring opportunities through change and movement, but traditionally warns against impulsiveness and unnecessary risk.",
      strengths: [
        "Adaptability",
        "Communication",
        "Business ability",
        "Quick thinking",
        "Ability to handle change",
      ],
      challenges: [
        "Impulsiveness",
        "Restlessness",
        "Unnecessary risk",
        "Inconsistency",
        "Poor decision-making under pressure",
      ],
    },

    15: {
      title: "Compound Number 15",
      theme: "The Magician",
      description:
        "Compound Number 15 is traditionally associated with charm, magnetism, influence and persuasive ability. It can indicate a powerful capacity to attract people, opportunities and support, especially when influence is used ethically.",
      strengths: [
        "Charm",
        "Magnetism",
        "Persuasive ability",
        "Influence",
        "Creativity",
        "Ability to attract support",
      ],
      challenges: [
        "Manipulation",
        "Misuse of influence",
        "Overdependence on charm",
        "Emotional control through others",
        "Temptation to use influence selfishly",
      ],
    },

    16: {
      title: "Compound Number 16",
      theme: "The Shattered Citadel",
      description:
        "Compound Number 16 is traditionally associated with sudden disruption, the breaking of old structures, humility and deep self-reflection. It represents rebuilding life on stronger foundations after difficult changes.",
      strengths: [
        "Self-reflection",
        "Inner wisdom",
        "Ability to rebuild",
        "Humility",
        "Learning from difficult experiences",
      ],
      challenges: [
        "Sudden disruption",
        "Unexpected changes",
        "Loss of old structures",
        "Pride and ego lessons",
        "Emotional upheaval",
      ],
    },

    17: {
      title: "Compound Number 17",
      theme: "The Star of the Magi",
      description:
        "Compound Number 17 is traditionally considered a fortunate compound associated with recognition, lasting success and the ability to overcome adversity. It also carries a strong spiritual dimension.",
      strengths: [
        "Recognition",
        "Persistence",
        "Spiritual strength",
        "Ability to overcome adversity",
        "Long-term success",
      ],
      challenges: [
        "Pressure to maintain success",
        "High expectations",
        "Overconfidence",
        "Difficulty balancing material and spiritual goals",
      ],
    },

    18: {
      title: "Compound Number 18",
      theme: "Conflict & Struggle",
      description:
        "Compound Number 18 is traditionally associated with conflict, opposition and emotional or material struggles. It calls for careful judgment, integrity and awareness of hidden complications.",
      strengths: [
        "Courage",
        "Emotional awareness",
        "Ability to face opposition",
        "Strong determination",
        "Learning through challenges",
      ],
      challenges: [
        "Conflict",
        "Opposition",
        "Emotional struggles",
        "Material difficulties",
        "Deception or hidden complications",
      ],
    },

    19: {
      title: "Compound Number 19",
      theme: "The Prince of Heaven",
      description:
        "Compound Number 19 is traditionally associated with success, honour, recognition and victory after difficulties. It is considered a fortunate compound that can indicate protection and achievement.",
      strengths: [
        "Success",
        "Recognition",
        "Leadership",
        "Honour",
        "Victory after difficulties",
      ],
      challenges: [
        "Pride",
        "Overconfidence",
        "Pressure of responsibility",
        "Difficulty accepting setbacks",
      ],
    },

    20: {
      title: "Compound Number 20",
      theme: "The Awakening",
      description:
        "Compound Number 20 is associated with awakening, judgment and a new sense of purpose. It can indicate a calling toward a greater purpose, while progress may require patience and careful timing.",
      strengths: [
        "Awareness",
        "Intuition",
        "Sense of purpose",
        "Reflection",
        "Ability to recognize opportunities",
      ],
      challenges: [
        "Delays",
        "Waiting for the right opportunity",
        "Indecision",
        "Overthinking",
        "Difficulty trusting timing",
      ],
    },

    21: {
      title: "Compound Number 21",
      theme: "The Crown of the Magi",
      description:
        "Compound Number 21 is traditionally considered a fortunate compound associated with advancement, recognition, achievement and victory after struggle.",
      strengths: [
        "Achievement",
        "Recognition",
        "Creativity",
        "Advancement",
        "Success after effort",
      ],
      challenges: [
        "Overconfidence",
        "Pressure to succeed",
        "Scattered creativity",
        "Difficulty maintaining consistency",
      ],
    },

    22: {
      title: "Compound Number 22",
      theme: "Warning & Illusion",
      description:
        "Compound Number 22 is traditionally treated as a cautionary compound in the Chaldean system. It can indicate illusion, deception, poor judgment or becoming affected by the mistakes or influence of others.",
      strengths: [
        "Large-scale thinking",
        "Awareness of hidden situations",
        "Strategic thinking",
        "Ability to recognize patterns",
        "Practical experience",
      ],
      challenges: [
        "Illusion",
        "Deception",
        "Poor judgment",
        "Being misled by others",
        "Consequences of others' mistakes",
      ],
    },

    23: {
      title: "Compound Number 23",
      theme: "Royal Star of the Lion",
      description:
        "Compound Number 23 is traditionally considered a highly fortunate compound. It indicates protection, support, timely assistance and success through influential or helpful people.",
      strengths: [
        "Protection",
        "Support from others",
        "Influence",
        "Communication",
        "Opportunity",
        "Timely assistance",
      ],
      challenges: [
        "Overdependence on others",
        "Taking support for granted",
        "Overconfidence",
        "Poor choice of associations",
      ],
    },

    24: {
      title: "Compound Number 24",
      theme: "Love, Support & Gain",
      description:
        "Compound Number 24 is traditionally associated with gain through relationships, love, family support and helpful associations. It can indicate assistance from influential or supportive people.",
      strengths: [
        "Relationship support",
        "Love",
        "Family harmony",
        "Helpful associations",
        "Ability to attract support",
      ],
      challenges: [
        "Overdependence on relationships",
        "Possessiveness",
        "Emotional expectations",
        "Difficulty separating personal and practical decisions",
      ],
    },

    25: {
      title: "Compound Number 25",
      theme: "Strength Through Experience",
      description:
        "Compound Number 25 represents wisdom gained through observation, experience and trials. It is traditionally connected with learning from past experiences and developing strong judgment.",
      strengths: [
        "Wisdom",
        "Observation",
        "Experience",
        "Strong judgment",
        "Introspection",
        "Learning from mistakes",
      ],
      challenges: [
        "Slow progress",
        "Over-analysis",
        "Learning through difficult experiences",
        "Emotional withdrawal",
      ],
    },

    26: {
      title: "Compound Number 26",
      theme: "Partnerships & Troubles",
      description:
        "Compound Number 26 carries a caution regarding partnerships and agreements. Traditional interpretation suggests that difficulties may arise through people, partnerships or financial associations if judgment is not careful.",
      strengths: [
        "Partnership ability",
        "Responsibility",
        "Service",
        "Practical judgment",
        "Ability to manage complex situations",
      ],
      challenges: [
        "Partnership difficulties",
        "Financial complications",
        "Trust issues",
        "Poor agreements",
        "Misjudging people",
      ],
    },

    27: {
      title: "Compound Number 27",
      theme: "The Sceptre",
      description:
        "Compound Number 27 is traditionally associated with leadership, authority, intelligent planning and purposeful action. It indicates success through courage, strategy and the ability to execute ideas.",
      strengths: [
        "Leadership",
        "Authority",
        "Strategic thinking",
        "Courage",
        "Intelligent planning",
        "Execution ability",
      ],
      challenges: [
        "Authority struggles",
        "Overconfidence",
        "Impatience",
        "Excessive control",
      ],
    },

    28: {
      title: "Compound Number 28",
      theme: "Trust & Reversal",
      description:
        "Compound Number 28 indicates strong potential but also the possibility of reversal. Traditional interpretation warns that success may be affected by poor judgment, misplaced trust or overconfidence.",
      strengths: [
        "Ambition",
        "Leadership",
        "Ability to create success",
        "Independence",
        "Strong determination",
      ],
      challenges: [
        "Reversal of circumstances",
        "Misplaced trust",
        "Poor judgment",
        "Overconfidence",
        "Loss through wrong decisions",
      ],
    },

    29: {
      title: "Compound Number 29",
      theme: "Emotional Tests & Uncertainty",
      description:
        "Compound Number 29 is traditionally associated with emotional tests, relationship uncertainty, hidden opposition and disappointment. It requires emotional balance, clear judgment and careful trust.",
      strengths: [
        "Emotional intelligence",
        "Intuition",
        "Resilience",
        "Understanding relationships",
        "Ability to learn from emotional experiences",
      ],
      challenges: [
        "Relationship uncertainty",
        "Emotional disappointment",
        "Hidden opposition",
        "Over-sensitivity",
        "Difficulty trusting others",
      ],
    },

    30: {
      title: "Compound Number 30",
      theme: "The Loner Philosopher",
      description:
        "Compound Number 30 is associated with deep thought, intellectual ability, reflection and independent thinking. Traditionally it is neither strongly fortunate nor unfortunate, with results depending greatly on how its qualities are used.",
      strengths: [
        "Intellectual ability",
        "Independent thinking",
        "Reflection",
        "Creativity",
        "Philosophical thinking",
      ],
      challenges: [
        "Isolation",
        "Overthinking",
        "Difficulty expressing emotions",
        "Excessive independence",
      ],
    },

    31: {
      title: "Compound Number 31",
      theme: "The Hermit",
      description:
        "Compound Number 31 is traditionally associated with independence, solitude, intellectual depth and self-reliance. It often indicates a person who prefers to build success independently rather than relying heavily on social support.",
      strengths: [
        "Self-reliance",
        "Independent thinking",
        "Intellectual depth",
        "Persistence",
        "Self-made achievement",
      ],
      challenges: [
        "Isolation",
        "Difficulty asking for help",
        "Social distance",
        "Excessive independence",
        "Feeling misunderstood",
      ],
    },
  },
  // =====================================
  // Complete Life Path Compound Result
  // =====================================

  getLifePathCompoundInterpretation(number) {
    const value = Number(number);

    return this.lifePathCompound[value] || null;
  },

  getLifePathCompoundResult(lifePathData) {
    if (!lifePathData || typeof lifePathData !== "object") {
      return null;
    }

    const compound = Number(lifePathData.reduction.compound);

    const interpretation = this.getLifePathCompoundInterpretation(compound);

    if (!interpretation) {
      return null;
    }

    return {
      compound,
      title: interpretation.title,
      theme: interpretation.theme,
      description: interpretation.description,
      strengths: interpretation.strengths,
      challenges: interpretation.challenges,
    };
  },

  // =====================================
  // EXPRESSION NUMBER — CHALDEAN
  // =====================================

  expressionCompound: {
    10: {
      title: "Wheel of Fortune",
      theme: "Honour, confidence & changing fortunes",
      description:
        "A name vibration connected with honour, faith, confidence and the ability to carry plans forward. It can bring recognition, but also shows cycles of rise and fall.",
      strengths: [
        "Confidence",
        "Recognition",
        "Initiative",
        "Ability to execute plans",
      ],
      challenges: [
        "Pride",
        "Overconfidence",
        "Sudden changes",
        "Rise-and-fall cycles",
      ],
    },

    11: {
      title: "Clenched Hand",
      theme: "Hidden dangers & trials",
      description:
        "A sensitive compound carrying warnings about hidden opposition, trials and possible betrayal. Strong awareness and careful judgment are important.",
      strengths: ["Intuition", "Awareness", "Caution", "Inner strength"],
      challenges: [
        "Hidden opposition",
        "Trust issues",
        "Unexpected difficulties",
        "Emotional pressure",
      ],
    },

    12: {
      title: "The Sacrifice",
      theme: "Service, sacrifice & emotional burden",
      description:
        "This vibration can indicate sacrifice for others, anxiety and situations where personal interests may be placed aside for another person's plans.",
      strengths: ["Service", "Compassion", "Patience", "Selflessness"],
      challenges: [
        "Over-sacrifice",
        "Anxiety",
        "Being used by others",
        "Emotional burden",
      ],
    },

    13: {
      title: "Transformation",
      theme: "Change, rebuilding & power",
      description:
        "A powerful transformation vibration. Old structures may need to change before something stronger can be built. It rewards disciplined use of personal power.",
      strengths: [
        "Transformation",
        "Resilience",
        "Rebuilding",
        "Determination",
      ],
      challenges: [
        "Sudden changes",
        "Destruction of old patterns",
        "Resistance to change",
        "Misuse of power",
      ],
    },

    14: {
      title: "Movement & Risk",
      theme: "Freedom, movement & opportunity",
      description:
        "A dynamic vibration connected with movement, communication, business and change. It can bring opportunity but also risk through impulsive decisions or unreliable circumstances.",
      strengths: [
        "Adaptability",
        "Communication",
        "Business ability",
        "Quick thinking",
      ],
      challenges: [
        "Impulsiveness",
        "Risk-taking",
        "Instability",
        "Poor judgment",
      ],
    },

    15: {
      title: "The Magician",
      theme: "Charm, influence & personal magnetism",
      description:
        "A magnetic name vibration associated with eloquence, creativity, artistic ability and influence. It can attract support, opportunities and favours when used ethically.",
      strengths: ["Charisma", "Communication", "Creativity", "Influence"],
      challenges: [
        "Manipulation",
        "Excessive charm",
        "Self-interest",
        "Using influence unethically",
      ],
    },

    16: {
      title: "The Shattered Citadel",
      theme: "Sudden change & rebuilding",
      description:
        "A strong warning vibration connected with sudden disruption, defeat of plans and the breaking of old structures. It encourages humility, preparation and rebuilding.",
      strengths: ["Self-awareness", "Rebuilding", "Resilience", "Adaptation"],
      challenges: [
        "Sudden setbacks",
        "Unexpected changes",
        "Broken plans",
        "Overconfidence",
      ],
    },

    17: {
      title: "Star of the Magi",
      theme: "Spiritual strength & lasting recognition",
      description:
        "A highly fortunate and spiritual vibration. It indicates rising above difficulties, recognition and the possibility that one's work or name leaves a lasting impression.",
      strengths: [
        "Recognition",
        "Spiritual strength",
        "Perseverance",
        "Long-term success",
      ],
      challenges: [
        "Ego",
        "Isolation through success",
        "Pressure to maintain reputation",
      ],
    },

    18: {
      title: "The Rayed Moon",
      theme: "Conflict, deception & material struggle",
      description:
        "A difficult compound connected with conflict, family disputes, deception and struggles between material desires and higher values. Integrity and caution are important.",
      strengths: [
        "Courage",
        "Awareness",
        "Strategic thinking",
        "Ability to face conflict",
      ],
      challenges: ["Conflict", "Deception", "Betrayal", "Material pressure"],
    },

    19: {
      title: "Prince of Heaven",
      theme: "Success, honour & achievement",
      description:
        "One of the more fortunate compounds, associated with success, happiness, esteem, honour and fulfilment of important plans.",
      strengths: ["Success", "Recognition", "Leadership", "Achievement"],
      challenges: ["Pride", "Overconfidence", "Pressure of expectations"],
    },

    20: {
      title: "The Awakening",
      theme: "Purpose, calling & inner awakening",
      description:
        "A vibration of awakening, new purpose and a call toward meaningful work or responsibility. Material results may require patience.",
      strengths: ["Purpose", "Awareness", "Vision", "Inner development"],
      challenges: [
        "Delays",
        "Self-doubt",
        "Slow material progress",
        "Waiting periods",
      ],
    },

    21: {
      title: "Crown of the Magi",
      theme: "Advancement, honour & victory",
      description:
        "A fortunate vibration associated with advancement, honours, elevation and success after determination, effort and testing.",
      strengths: ["Achievement", "Recognition", "Advancement", "Determination"],
      challenges: [
        "Long testing periods",
        "Pressure to succeed",
        "Delayed rewards",
      ],
    },

    22: {
      title: "The Good Man Blinded",
      theme: "Illusion, influence & judgment",
      description:
        "A cautionary vibration connected with illusion, false judgment and being affected by the mistakes or influence of others. Clear independent thinking is important.",
      strengths: [
        "Good intentions",
        "Awareness",
        "Empathy",
        "Learning through experience",
      ],
      challenges: [
        "Illusion",
        "Poor judgment",
        "Wrong influence",
        "Trusting the wrong people",
      ],
    },

    23: {
      title: "Royal Star of the Lion",
      theme: "Protection, support & success",
      description:
        "A highly fortunate compound associated with protection, support from influential people and successful completion of plans.",
      strengths: ["Protection", "Opportunity", "Leadership", "Support"],
      challenges: [
        "Dependence on influential people",
        "Overconfidence",
        "Expecting easy success",
      ],
    },

    24: {
      title: "Gain Through Love",
      theme: "Support, relationships & gain",
      description:
        "A favourable relationship-oriented vibration connected with assistance, love, helpful associations and gains through supportive people.",
      strengths: ["Relationships", "Support", "Cooperation", "Social goodwill"],
      challenges: [
        "Dependence on relationships",
        "Emotional attachment",
        "People-pleasing",
      ],
    },

    25: {
      title: "Strength Through Experience",
      theme: "Wisdom through trials",
      description:
        "This compound develops strength through observation, experience and difficult lessons. Success tends to become stronger with maturity.",
      strengths: ["Wisdom", "Observation", "Experience", "Judgment"],
      challenges: [
        "Early struggles",
        "Slow progress",
        "Over-analysis",
        "Trust issues",
      ],
    },

    26: {
      title: "Grave Warning",
      theme: "Partnerships, advice & financial caution",
      description:
        "A serious cautionary vibration connected with partnerships, associations, financial decisions and bad advice. Careful selection of people is essential.",
      strengths: [
        "Caution",
        "Strategic judgment",
        "Risk awareness",
        "Discernment",
      ],
      challenges: [
        "Bad partnerships",
        "Financial loss",
        "Wrong advice",
        "Misplaced trust",
      ],
    },

    27: {
      title: "The Sceptre",
      theme: "Authority, intellect & achievement",
      description:
        "A favourable compound associated with authority, command, productive intellect and rewards from creative or strategic work.",
      strengths: ["Leadership", "Authority", "Intelligence", "Creativity"],
      challenges: [
        "Ego",
        "Control",
        "Impatience",
        "Difficulty accepting advice",
      ],
    },

    28: {
      title: "Trust & Reversal",
      theme: "Potential, competition & reversals",
      description:
        "A contradictory vibration showing strong possibilities but also risk of loss through misplaced trust, competition, legal matters or poor preparation.",
      strengths: ["Potential", "Ambition", "Persistence", "Ability to restart"],
      challenges: [
        "Loss through trust",
        "Competition",
        "Reversals",
        "Repeated rebuilding",
      ],
    },

    29: {
      title: "Emotional Tests",
      theme: "Uncertainty, deception & relationship lessons",
      description:
        "A sensitive compound connected with uncertainty, emotional tests, unreliable associations and possible disappointment. Emotional balance and discernment are important.",
      strengths: [
        "Intuition",
        "Emotional awareness",
        "Discernment",
        "Resilience",
      ],
      challenges: [
        "Uncertainty",
        "Disappointment",
        "Trust issues",
        "Emotional instability",
      ],
    },

    30: {
      title: "The Loner Philosopher",
      theme: "Thought, intellect & independence",
      description:
        "A mental-plane vibration associated with thoughtful deduction, reflection, intellectual ability and independent thinking. Its results depend strongly on personal choices.",
      strengths: ["Intellect", "Analysis", "Reflection", "Independent thought"],
      challenges: [
        "Isolation",
        "Overthinking",
        "Detachment",
        "Ignoring material matters",
      ],
    },

    31: {
      title: "The Hermit",
      theme: "Independence, solitude & intellectual depth",
      description:
        "A highly self-contained vibration associated with independence, solitude and intellectual depth. It favours self-reliance more than social dependence.",
      strengths: [
        "Self-reliance",
        "Intelligence",
        "Independence",
        "Deep thinking",
      ],
      challenges: [
        "Isolation",
        "Loneliness",
        "Difficulty connecting",
        "Limited worldly support",
      ],
    },
    32: {
      title: "The Command Number",
      theme: "Communication, influence & independent judgment",
      description:
        "A powerful communication and influence vibration. It can bring success through people and combinations, provided personal judgment is not surrendered to others.",
      strengths: ["Communication", "Influence", "Networking", "Leadership"],
      challenges: [
        "Wrong influence",
        "Dependence on others",
        "Stubborn opposition",
        "Poor judgment",
      ],
    },

    33: {
      title: "Gain Through Love",
      theme: "Support & favourable relationships",
      description:
        "This compound carries the same traditional vibration as 24, emphasizing helpful relationships, support, association and gain through others.",
      strengths: ["Relationships", "Support", "Cooperation", "Social goodwill"],
      challenges: ["Dependence", "Attachment", "People-pleasing"],
    },

    34: {
      title: "Strength Through Experience",
      theme: "Wisdom through observation",
      description:
        "Traditionally carries the same vibration as 25, indicating strength, wisdom and benefits gained through experience and observation.",
      strengths: ["Wisdom", "Observation", "Experience", "Judgment"],
      challenges: ["Early struggles", "Slow development", "Over-analysis"],
    },

    35: {
      title: "Partnership Warning",
      theme: "Associations & caution",
      description:
        "Traditionally carries the same vibration as 26, warning about partnerships, financial associations and decisions influenced by others.",
      strengths: ["Discernment", "Caution", "Strategic thinking"],
      challenges: ["Bad partnerships", "Financial problems", "Wrong advice"],
    },

    36: {
      title: "The Sceptre",
      theme: "Authority & creative achievement",
      description:
        "Traditionally carries the same vibration as 27, emphasizing authority, productive intellect, creativity and achievement.",
      strengths: ["Leadership", "Creativity", "Intellect", "Achievement"],
      challenges: ["Control", "Ego", "Impatience"],
    },

    37: {
      title: "Fortunate Partnerships",
      theme: "Friendship, love & cooperation",
      description:
        "A distinct fortunate vibration associated with good friendships, love, partnerships and beneficial combinations with others.",
      strengths: ["Partnership", "Friendship", "Love", "Cooperation"],
      challenges: [
        "Over-dependence",
        "Emotional attachment",
        "Trusting too quickly",
      ],
    },

    38: {
      title: "Emotional Tests",
      theme: "Uncertainty & relationship lessons",
      description:
        "Traditionally carries the vibration of 29, emphasizing uncertainty, emotional tests, unreliable associations and the need for discernment.",
      strengths: ["Intuition", "Awareness", "Resilience"],
      challenges: ["Deception", "Disappointment", "Emotional uncertainty"],
    },

    39: {
      title: "The Philosopher",
      theme: "Thought, reflection & intellect",
      description:
        "Traditionally carries the vibration of 30, emphasizing intellectual ability, reflection, deduction and independent mental development.",
      strengths: ["Intellect", "Analysis", "Reflection"],
      challenges: ["Detachment", "Isolation", "Overthinking"],
    },

    40: {
      title: "The Hermit",
      theme: "Self-containment & independence",
      description:
        "Traditionally carries the vibration of 31, emphasizing independence, solitude, self-reliance and intellectual depth.",
      strengths: ["Independence", "Self-reliance", "Intelligence"],
      challenges: ["Isolation", "Loneliness", "Social distance"],
    },

    41: {
      title: "The Command Number",
      theme: "Communication & independent judgment",
      description:
        "Traditionally carries the vibration of 32, emphasizing communication, combinations with others and success through independent judgment.",
      strengths: ["Communication", "Influence", "Networking"],
      challenges: ["Wrong influence", "Dependence", "Poor judgment"],
    },

    42: {
      title: "Gain Through Love",
      theme: "Relationships & assistance",
      description:
        "Traditionally carries the vibration of 24, emphasizing gain, assistance, favourable relationships and support from others.",
      strengths: ["Relationships", "Support", "Cooperation"],
      challenges: ["Attachment", "Dependence", "People-pleasing"],
    },

    43: {
      title: "Revolution & Upheaval",
      theme: "Conflict, disruption & caution",
      description:
        "A traditionally difficult compound associated with upheaval, conflict, failure and obstruction. It calls for careful judgment and controlled action.",
      strengths: ["Resilience", "Courage", "Ability to rebuild"],
      challenges: [
        "Conflict",
        "Disruption",
        "Obstacles",
        "Unexpected setbacks",
      ],
    },

    44: {
      title: "Grave Warning",
      theme: "Partnership & financial caution",
      description:
        "Traditionally carries the vibration of 26, emphasizing caution around partnerships, financial decisions, associations and advice from others.",
      strengths: ["Discernment", "Strategic judgment", "Caution"],
      challenges: ["Bad partnerships", "Financial loss", "Wrong advice"],
    },

    45: {
      title: "The Sceptre",
      theme: "Authority & achievement",
      description:
        "Traditionally carries the vibration of 27, emphasizing authority, intellect, creativity and rewards from purposeful action.",
      strengths: ["Leadership", "Intellect", "Creativity", "Achievement"],
      challenges: ["Control", "Ego", "Impatience"],
    },

    46: {
      title: "Fortunate Partnerships",
      theme: "Love, friendship & cooperation",
      description:
        "Traditionally carries the vibration of 37, emphasizing fortunate friendships, love, partnerships and beneficial associations.",
      strengths: ["Partnership", "Friendship", "Love", "Cooperation"],
      challenges: ["Attachment", "Dependence", "Trust issues"],
    },

    47: {
      title: "Emotional Tests",
      theme: "Uncertainty & discernment",
      description:
        "Traditionally carries the vibration of 29, emphasizing emotional tests, uncertainty and the need for careful judgment in relationships.",
      strengths: ["Intuition", "Awareness", "Resilience"],
      challenges: ["Deception", "Disappointment", "Emotional uncertainty"],
    },

    48: {
      title: "The Philosopher",
      theme: "Intellect & reflection",
      description:
        "Traditionally carries the vibration of 30, emphasizing thought, deduction, reflection and intellectual independence.",
      strengths: ["Intellect", "Analysis", "Reflection"],
      challenges: ["Isolation", "Overthinking", "Detachment"],
    },

    49: {
      title: "The Hermit",
      theme: "Independence & self-reliance",
      description:
        "Traditionally carries the vibration of 31, emphasizing independence, solitude and intellectual depth.",
      strengths: ["Self-reliance", "Independence", "Deep thinking"],
      challenges: ["Isolation", "Loneliness", "Social distance"],
    },

    50: {
      title: "The Command Number",
      theme: "Communication & influence",
      description:
        "Traditionally carries the vibration of 32, emphasizing communication, influence, combinations and independent judgment.",
      strengths: ["Communication", "Influence", "Networking"],
      challenges: ["Wrong influence", "Dependence on others", "Poor judgment"],
    },

    51: {
      title: "The Warrior",
      theme: "Power, advancement & leadership",
      description:
        "A powerful compound associated with sudden advancement, leadership and fighting spirit. It also carries a warning concerning enemies, danger and conflict.",
      strengths: [
        "Courage",
        "Leadership",
        "Determination",
        "Rapid advancement",
      ],
      challenges: [
        "Conflict",
        "Enemies",
        "Aggression",
        "Danger through confrontation",
      ],
    },

    52: {
      title: "Revolution & Upheaval",
      theme: "Conflict, obstruction & caution",
      description:
        "Traditionally carries the vibration of 43, emphasizing upheaval, conflict, obstacles and the need for careful decisions.",
      strengths: ["Resilience", "Courage", "Ability to rebuild"],
      challenges: ["Conflict", "Obstacles", "Disruption", "Setbacks"],
    },
  },

  getExpressionCompoundInterpretation(number) {
    const value = Number(number);
    return this.expressionCompound[value] || null;
  },

  getExpressionResult(expressionData) {
    if (!expressionData || typeof expressionData !== "object") {
      return null;
    }

    const compound = Number(expressionData.reduction.compound);
    const finalNumber = Number(expressionData.reduction.final);

    const interpretation = this.getExpressionCompoundInterpretation(compound);

    if (!interpretation) {
      return null;
    }

    return {
      compound,
      final: finalNumber,
      title: interpretation.title,
      theme: interpretation.theme,
      description: interpretation.description,
      strengths: interpretation.strengths,
      challenges: interpretation.challenges,
    };
  },
  // =====================================
  // Expression Number
  // Traditional Chaldean Root Numbers
  // =====================================

  expression: {
    1: {
      title: "Expression Number 1",
      theme: "Leadership & Independence",
      description:
        "Expression Number 1 represents independence, leadership, initiative and originality. It indicates a strong desire to act independently and create an individual direction.",
      strengths: [
        "Leadership",
        "Initiative",
        "Independence",
        "Originality",
        "Self-confidence",
      ],
      challenges: [
        "Ego",
        "Stubbornness",
        "Impatience",
        "Difficulty accepting guidance",
      ],
    },

    2: {
      title: "Expression Number 2",
      theme: "Cooperation & Diplomacy",
      description:
        "Expression Number 2 represents cooperation, sensitivity, diplomacy and partnership. It favours working with others and creating harmony.",
      strengths: [
        "Diplomacy",
        "Cooperation",
        "Sensitivity",
        "Intuition",
        "Partnership ability",
      ],
      challenges: [
        "Over-sensitivity",
        "Indecision",
        "Dependence on approval",
        "Emotional fluctuations",
      ],
    },

    3: {
      title: "Expression Number 3",
      theme: "Creativity & Communication",
      description:
        "Expression Number 3 represents creativity, communication, imagination and self-expression. It supports artistic and social expression.",
      strengths: [
        "Creativity",
        "Communication",
        "Optimism",
        "Self-expression",
        "Social ability",
      ],
      challenges: [
        "Scattered energy",
        "Lack of discipline",
        "Inconsistency",
        "Over-talking",
      ],
    },

    4: {
      title: "Expression Number 4",
      theme: "Structure & Discipline",
      description:
        "Expression Number 4 represents practicality, structure, discipline and consistent effort. It favours stable and organized development.",
      strengths: [
        "Organization",
        "Reliability",
        "Discipline",
        "Persistence",
        "Practical thinking",
      ],
      challenges: [
        "Rigidity",
        "Stubbornness",
        "Resistance to change",
        "Excessive seriousness",
      ],
    },

    5: {
      title: "Expression Number 5",
      theme: "Freedom & Adaptability",
      description:
        "Expression Number 5 represents freedom, communication, adaptability and movement. It favours variety, experience and changing circumstances.",
      strengths: [
        "Adaptability",
        "Communication",
        "Versatility",
        "Quick thinking",
        "Curiosity",
      ],
      challenges: [
        "Restlessness",
        "Impulsiveness",
        "Inconsistency",
        "Risk-taking",
      ],
    },

    6: {
      title: "Expression Number 6",
      theme: "Responsibility & Harmony",
      description:
        "Expression Number 6 represents responsibility, harmony, care and service. It favours supportive relationships and a strong sense of duty.",
      strengths: [
        "Responsibility",
        "Care",
        "Loyalty",
        "Harmony",
        "Supportiveness",
      ],
      challenges: [
        "Over-responsibility",
        "Possessiveness",
        "Perfectionism",
        "Difficulty saying no",
      ],
    },

    7: {
      title: "Expression Number 7",
      theme: "Analysis & Inner Wisdom",
      description:
        "Expression Number 7 represents analysis, introspection, knowledge and independent thought. It favours research and deeper understanding.",
      strengths: [
        "Analysis",
        "Observation",
        "Intuition",
        "Research ability",
        "Independent thinking",
      ],
      challenges: ["Overthinking", "Isolation", "Doubt", "Emotional distance"],
    },

    8: {
      title: "Expression Number 8",
      theme: "Authority & Achievement",
      description:
        "Expression Number 8 represents authority, ambition, management and material responsibility. It favours organization, leadership and achievement.",
      strengths: [
        "Leadership",
        "Management",
        "Determination",
        "Ambition",
        "Endurance",
      ],
      challenges: [
        "Need for control",
        "Power struggles",
        "Material pressure",
        "Work-life imbalance",
      ],
    },

    9: {
      title: "Expression Number 9",
      theme: "Courage & Compassion",
      description:
        "Expression Number 9 represents courage, generosity, compassion and broad-minded expression. It can indicate strong emotional and humanitarian energy.",
      strengths: [
        "Courage",
        "Generosity",
        "Compassion",
        "Broad-mindedness",
        "Emotional strength",
      ],
      challenges: [
        "Emotional intensity",
        "Impatience",
        "Difficulty letting go",
        "Taking situations personally",
      ],
    },
  },

  // =====================================
  // Expression Number Helper
  // =====================================

  getExpressionInterpretation(number) {
    const value = Number(number);

    return this.expression[value] || null;
  },

  getExpressionResult(expressionData) {
    if (!expressionData || typeof expressionData !== "object") {
      return null;
    }

    const compound = Number(expressionData.reduction.compound);
    const finalNumber = Number(expressionData.reduction.final);

    // Root Expression Number
    const interpretation = this.getExpressionInterpretation(finalNumber);

    // Compound Expression Number
    const compoundInterpretation =
      this.getExpressionCompoundInterpretation(compound);

    if (!interpretation) {
      return null;
    }

    return {
      compound,
      final: finalNumber,

      // Root Interpretation
      title: interpretation.title,
      theme: interpretation.theme,
      description: interpretation.description,
      strengths: interpretation.strengths,
      challenges: interpretation.challenges,

      // Compound Interpretation
      compoundTitle: compoundInterpretation
        ? compoundInterpretation.title
        : null,

      compoundTheme: compoundInterpretation
        ? compoundInterpretation.theme
        : null,

      compoundDescription: compoundInterpretation
        ? compoundInterpretation.description
        : null,
    };
  },
  // =====================================
  // 06. Soul Urge Number
  // Pythagorean Interpretation Fallback
  // Compound Meaning: Traditional Chaldean
  // =====================================

  soulUrge: {
    1: {
      title: "Soul Urge Number 1",
      theme: "Independence & Achievement",
      description:
        "Soul Urge Number 1 indicates an inner desire for independence, personal achievement and the freedom to make one's own decisions. Deep inside, the person wants to lead, initiate and create an individual path.",
      strengths: [
        "Inner independence",
        "Strong ambition",
        "Self-motivation",
        "Leadership desire",
        "Original thinking",
      ],
      challenges: [
        "Inner impatience",
        "Pride",
        "Difficulty depending on others",
        "Strong need for control",
      ],
    },

    2: {
      title: "Soul Urge Number 2",
      theme: "Harmony & Partnership",
      description:
        "Soul Urge Number 2 indicates an inner desire for peace, emotional connection, cooperation and harmonious relationships. The person deeply values understanding, companionship and emotional security.",
      strengths: [
        "Cooperation",
        "Emotional sensitivity",
        "Diplomacy",
        "Empathy",
        "Relationship awareness",
      ],
      challenges: [
        "Over-sensitivity",
        "Dependence on approval",
        "Fear of conflict",
        "Emotional insecurity",
      ],
    },

    3: {
      title: "Soul Urge Number 3",
      theme: "Expression & Creativity",
      description:
        "Soul Urge Number 3 indicates an inner desire for creativity, communication, joy and self-expression. The person wants freedom to express thoughts, emotions and imagination openly.",
      strengths: [
        "Creativity",
        "Communication",
        "Imagination",
        "Optimism",
        "Expressive nature",
      ],
      challenges: [
        "Scattered emotions",
        "Difficulty staying focused",
        "Need for attention",
        "Emotional inconsistency",
      ],
    },

    4: {
      title: "Soul Urge Number 4",
      theme: "Security & Stability",
      description:
        "Soul Urge Number 4 indicates an inner desire for stability, structure, order and dependable foundations. The person feels secure when life is organized and responsibilities are clearly defined.",
      strengths: [
        "Practicality",
        "Reliability",
        "Discipline",
        "Loyalty",
        "Strong sense of responsibility",
      ],
      challenges: [
        "Rigidity",
        "Resistance to change",
        "Excessive caution",
        "Difficulty relaxing",
      ],
    },

    5: {
      title: "Soul Urge Number 5",
      theme: "Freedom & Experience",
      description:
        "Soul Urge Number 5 indicates an inner desire for freedom, variety, movement and new experiences. The person is emotionally stimulated by change, exploration and independence.",
      strengths: [
        "Adaptability",
        "Curiosity",
        "Versatility",
        "Love of experience",
        "Open-mindedness",
      ],
      challenges: [
        "Restlessness",
        "Impulsiveness",
        "Difficulty with routine",
        "Fear of restriction",
      ],
    },

    6: {
      title: "Soul Urge Number 6",
      theme: "Love & Responsibility",
      description:
        "Soul Urge Number 6 indicates an inner desire for love, family harmony, responsibility and meaningful relationships. The person wants to care for others and create a stable emotional environment.",
      strengths: [
        "Love",
        "Responsibility",
        "Loyalty",
        "Care",
        "Protective nature",
      ],
      challenges: [
        "Over-responsibility",
        "Possessiveness",
        "Perfectionism",
        "Difficulty setting boundaries",
      ],
    },

    7: {
      title: "Soul Urge Number 7",
      theme: "Knowledge & Inner Understanding",
      description:
        "Soul Urge Number 7 indicates an inner desire for knowledge, privacy, deeper understanding and personal reflection. The person seeks truth and often needs private time to think and understand life deeply.",
      strengths: [
        "Analysis",
        "Intuition",
        "Observation",
        "Deep thinking",
        "Independent thought",
      ],
      challenges: [
        "Isolation",
        "Overthinking",
        "Emotional withdrawal",
        "Difficulty trusting others",
      ],
    },

    8: {
      title: "Soul Urge Number 8",
      theme: "Power & Achievement",
      description:
        "Soul Urge Number 8 indicates an inner desire for achievement, authority, financial stability and meaningful success. The person wants to develop strength, influence and control over material circumstances.",
      strengths: [
        "Ambition",
        "Determination",
        "Leadership",
        "Management ability",
        "Strong achievement drive",
      ],
      challenges: [
        "Need for control",
        "Material pressure",
        "Work obsession",
        "Power struggles",
      ],
    },

    9: {
      title: "Soul Urge Number 9",
      theme: "Compassion & Higher Purpose",
      description:
        "Soul Urge Number 9 indicates an inner desire to contribute, help others and live according to meaningful values. The person may feel fulfilled through compassion, generosity and service.",
      strengths: [
        "Compassion",
        "Generosity",
        "Idealism",
        "Emotional depth",
        "Humanitarian outlook",
      ],
      challenges: [
        "Emotional intensity",
        "Difficulty letting go",
        "Idealistic expectations",
        "Over-sacrifice",
      ],
    },
  },

  // =====================================
  // Soul Urge Root Helper
  // =====================================

  getSoulUrgeInterpretation(number) {
    const value = Number(number);

    return this.soulUrge[value] || null;
  },

  // =====================================
  // Soul Urge Compound Helper
  // Traditional Chaldean Compound Meaning
  // =====================================

  getSoulUrgeCompoundInterpretation(number) {
    const value = Number(number);

    return this.expressionCompound[value] || null;
  },

  // =====================================
  // Complete Soul Urge Result
  // =====================================

  getSoulUrgeResult(soulUrgeData) {
    if (!soulUrgeData || typeof soulUrgeData !== "object") {
      return null;
    }

    const compound = Number(soulUrgeData.reduction.compound);
    const finalNumber = Number(soulUrgeData.reduction.final);

    // Root interpretation
    const interpretation = this.getSoulUrgeInterpretation(finalNumber);

    // Traditional Chaldean compound interpretation
    const compoundInterpretation =
      this.getSoulUrgeCompoundInterpretation(compound);

    if (!interpretation) {
      return null;
    }

    return {
      compound,
      final: finalNumber,

      // Root Interpretation
      title: interpretation.title,
      theme: interpretation.theme,
      description: interpretation.description,
      strengths: interpretation.strengths,
      challenges: interpretation.challenges,

      // Compound Interpretation
      compoundTitle: compoundInterpretation
        ? compoundInterpretation.title
        : null,

      compoundTheme: compoundInterpretation
        ? compoundInterpretation.theme
        : null,

      compoundDescription: compoundInterpretation
        ? compoundInterpretation.description
        : null,
    };
  },
  // =====================================
  // 09. Personality Number
  // Root Interpretation: Fallback
  // Compound Meaning: Traditional Chaldean
  // =====================================

  personality: {
    1: {
      title: "Personality Number 1",
      theme: "Strong & Independent Presence",
      description:
        "Personality Number 1 gives an outward impression of confidence, independence and leadership. Others may see the person as direct, self-reliant and capable of taking initiative.",
      strengths: [
        "Confidence",
        "Leadership presence",
        "Independence",
        "Initiative",
        "Strong identity",
      ],
      challenges: [
        "Appearing dominant",
        "Impatience",
        "Stubbornness",
        "Difficulty appearing approachable",
      ],
    },

    2: {
      title: "Personality Number 2",
      theme: "Gentle & Cooperative Presence",
      description:
        "Personality Number 2 gives an outward impression of sensitivity, cooperation and diplomacy. Others may see the person as calm, understanding and relationship-oriented.",
      strengths: [
        "Diplomacy",
        "Cooperation",
        "Sensitivity",
        "Good manners",
        "Approachability",
      ],
      challenges: [
        "Appearing overly sensitive",
        "Indecision",
        "Shyness",
        "Dependence on others",
      ],
    },

    3: {
      title: "Personality Number 3",
      theme: "Expressive & Social Presence",
      description:
        "Personality Number 3 gives an outward impression of creativity, communication and social energy. Others may see the person as expressive, optimistic and entertaining.",
      strengths: [
        "Communication",
        "Creativity",
        "Social charm",
        "Optimism",
        "Expressiveness",
      ],
      challenges: [
        "Appearing scattered",
        "Talking too much",
        "Inconsistency",
        "Lack of seriousness",
      ],
    },

    4: {
      title: "Personality Number 4",
      theme: "Practical & Reliable Presence",
      description:
        "Personality Number 4 gives an outward impression of stability, discipline and reliability. Others may see the person as practical, organized and dependable.",
      strengths: [
        "Reliability",
        "Discipline",
        "Organization",
        "Practical thinking",
        "Consistency",
      ],
      challenges: [
        "Appearing rigid",
        "Seriousness",
        "Resistance to change",
        "Conservative behavior",
      ],
    },

    5: {
      title: "Personality Number 5",
      theme: "Dynamic & Adaptable Presence",
      description:
        "Personality Number 5 gives an outward impression of freedom, adaptability and versatility. Others may see the person as energetic, curious and open to new experiences.",
      strengths: [
        "Adaptability",
        "Versatility",
        "Communication",
        "Curiosity",
        "Energetic presence",
      ],
      challenges: [
        "Restlessness",
        "Impulsiveness",
        "Inconsistency",
        "Appearing unreliable",
      ],
    },

    6: {
      title: "Personality Number 6",
      theme: "Warm & Responsible Presence",
      description:
        "Personality Number 6 gives an outward impression of responsibility, care and harmony. Others may see the person as supportive, dependable and family-oriented.",
      strengths: [
        "Responsibility",
        "Warmth",
        "Loyalty",
        "Supportiveness",
        "Harmony",
      ],
      challenges: [
        "Appearing controlling",
        "Over-responsibility",
        "Perfectionism",
        "Interfering in others' matters",
      ],
    },

    7: {
      title: "Personality Number 7",
      theme: "Private & Analytical Presence",
      description:
        "Personality Number 7 gives an outward impression of intelligence, privacy and observation. Others may see the person as thoughtful, analytical and somewhat reserved.",
      strengths: [
        "Intelligence",
        "Observation",
        "Analysis",
        "Depth",
        "Independent thinking",
      ],
      challenges: [
        "Appearing distant",
        "Reserved behavior",
        "Difficulty opening up",
        "Overthinking",
      ],
    },

    8: {
      title: "Personality Number 8",
      theme: "Powerful & Authoritative Presence",
      description:
        "Personality Number 8 gives an outward impression of authority, ambition and strength. Others may see the person as capable, serious and achievement-oriented.",
      strengths: [
        "Authority",
        "Confidence",
        "Management ability",
        "Determination",
        "Professional presence",
      ],
      challenges: [
        "Appearing intimidating",
        "Need for control",
        "Power struggles",
        "Excessive seriousness",
      ],
    },

    9: {
      title: "Personality Number 9",
      theme: "Compassionate & Strong Presence",
      description:
        "Personality Number 9 gives an outward impression of courage, generosity and emotional depth. Others may see the person as broad-minded, caring and strong-willed.",
      strengths: [
        "Compassion",
        "Courage",
        "Generosity",
        "Broad-mindedness",
        "Emotional strength",
      ],
      challenges: [
        "Emotional intensity",
        "Impatience",
        "Appearing dramatic",
        "Difficulty letting go",
      ],
    },
  },

  // =====================================
  // Personality Root Helper
  // =====================================

  getPersonalityInterpretation(number) {
    const value = Number(number);

    return this.personality[value] || null;
  },

  // =====================================
  // Personality Compound Helper
  // Traditional Chaldean
  // =====================================

  getPersonalityCompoundInterpretation(number) {
    const value = Number(number);

    return this.expressionCompound[value] || null;
  },

  // =====================================
  // Complete Personality Result
  // =====================================

  getPersonalityResult(personalityData) {
    if (!personalityData || typeof personalityData !== "object") {
      return null;
    }

    const compound = Number(personalityData.reduction.compound);
    const finalNumber = Number(personalityData.reduction.final);

    const interpretation = this.getPersonalityInterpretation(finalNumber);

    const compoundInterpretation =
      this.getPersonalityCompoundInterpretation(compound);

    if (!interpretation) {
      return null;
    }

    return {
      compound,
      final: finalNumber,

      title: interpretation.title,
      theme: interpretation.theme,
      description: interpretation.description,
      strengths: interpretation.strengths,
      challenges: interpretation.challenges,

      compoundTitle: compoundInterpretation
        ? compoundInterpretation.title
        : null,

      compoundTheme: compoundInterpretation
        ? compoundInterpretation.theme
        : null,

      compoundDescription: compoundInterpretation
        ? compoundInterpretation.description
        : null,
    };
  },
  // =====================================
  // 10. Balance Number
  // Modern / Pythagorean Fallback
  // Root Number Only
  // =====================================

  balance: {
    1: {
      title: "Balance Number 1",
      theme: "Independent Response",
      description:
        "Balance Number 1 suggests that during pressure or difficult situations, the person tends to rely on independence, initiative and direct action.",
      strengths: [
        "Decisiveness",
        "Self-reliance",
        "Leadership under pressure",
        "Initiative",
      ],
      challenges: [
        "Impatience",
        "Stubbornness",
        "Trying to handle everything alone",
        "Difficulty accepting help",
      ],
    },

    2: {
      title: "Balance Number 2",
      theme: "Diplomatic Response",
      description:
        "Balance Number 2 suggests that during difficult situations, the person tends to seek cooperation, patience and peaceful solutions.",
      strengths: [
        "Diplomacy",
        "Patience",
        "Cooperation",
        "Emotional awareness",
      ],
      challenges: [
        "Indecision",
        "Over-sensitivity",
        "Avoiding necessary confrontation",
        "Dependence on others",
      ],
    },

    3: {
      title: "Balance Number 3",
      theme: "Expressive Response",
      description:
        "Balance Number 3 suggests that communication, creativity and optimism are important ways of handling pressure and difficult situations.",
      strengths: [
        "Communication",
        "Optimism",
        "Creativity",
        "Ability to lighten difficult situations",
      ],
      challenges: [
        "Avoiding serious issues",
        "Scattered thinking",
        "Over-talking",
        "Emotional inconsistency",
      ],
    },

    4: {
      title: "Balance Number 4",
      theme: "Practical Response",
      description:
        "Balance Number 4 suggests handling difficult situations through structure, patience, planning and practical action.",
      strengths: [
        "Practical thinking",
        "Discipline",
        "Organization",
        "Persistence",
      ],
      challenges: [
        "Rigidity",
        "Resistance to change",
        "Over-seriousness",
        "Difficulty adapting quickly",
      ],
    },

    5: {
      title: "Balance Number 5",
      theme: "Flexible Response",
      description:
        "Balance Number 5 suggests handling pressure through adaptability, movement, communication and willingness to change direction when needed.",
      strengths: [
        "Adaptability",
        "Quick thinking",
        "Versatility",
        "Problem-solving through change",
      ],
      challenges: [
        "Impulsiveness",
        "Restlessness",
        "Inconsistency",
        "Avoiding responsibility",
      ],
    },

    6: {
      title: "Balance Number 6",
      theme: "Responsible Response",
      description:
        "Balance Number 6 suggests handling difficult situations through responsibility, care, protection and a desire to restore harmony.",
      strengths: [
        "Responsibility",
        "Care",
        "Loyalty",
        "Problem-solving through support",
      ],
      challenges: [
        "Taking too much responsibility",
        "Interfering",
        "Perfectionism",
        "Emotional burden",
      ],
    },

    7: {
      title: "Balance Number 7",
      theme: "Analytical Response",
      description:
        "Balance Number 7 suggests responding to pressure through analysis, reflection, observation and careful understanding before taking action.",
      strengths: [
        "Analysis",
        "Observation",
        "Thoughtful decisions",
        "Intuition",
      ],
      challenges: [
        "Overthinking",
        "Withdrawal",
        "Delay in taking action",
        "Difficulty expressing emotions",
      ],
    },

    8: {
      title: "Balance Number 8",
      theme: "Authoritative Response",
      description:
        "Balance Number 8 suggests handling difficult situations through control, discipline, management and strong practical decision-making.",
      strengths: [
        "Authority",
        "Management ability",
        "Determination",
        "Strong decision-making",
      ],
      challenges: [
        "Excessive control",
        "Power struggles",
        "Harsh reactions",
        "Material pressure",
      ],
    },

    9: {
      title: "Balance Number 9",
      theme: "Compassionate Response",
      description:
        "Balance Number 9 suggests handling difficult situations with courage, compassion, broad perspective and emotional understanding.",
      strengths: [
        "Compassion",
        "Courage",
        "Generosity",
        "Broad-minded thinking",
      ],
      challenges: [
        "Emotional intensity",
        "Taking things personally",
        "Difficulty letting go",
        "Over-sacrifice",
      ],
    },
  },

  // =====================================
  // Balance Number Helper
  // =====================================

  getBalanceInterpretation(number) {
    const value = Number(number);

    return this.balance[value] || null;
  },

  // =====================================
  // Complete Balance Result
  // =====================================

  getBalanceResult(balanceData) {
    if (!balanceData || typeof balanceData !== "object") {
      return null;
    }

    const compound = Number(balanceData.reduction.compound);
    const finalNumber = Number(balanceData.reduction.final);

    const interpretation = this.getBalanceInterpretation(finalNumber);

    if (!interpretation) {
      return null;
    }

    return {
      compound,
      final: finalNumber,

      title: interpretation.title,
      theme: interpretation.theme,
      description: interpretation.description,
      strengths: interpretation.strengths,
      challenges: interpretation.challenges,
    };
  },
  // =====================================
  // 11. Hidden Passion Number
  // Pythagorean / Modern Numerology
  // =====================================

  hiddenPassion: {
    1: {
      title: "Hidden Passion Number 1",
      theme: "Leadership & Independence",
      description:
        "Hidden Passion Number 1 indicates a strong inner drive toward leadership, independence, achievement and originality. The person naturally wants to initiate, lead and act according to personal judgment.",
      strengths: [
        "Leadership",
        "Initiative",
        "Independence",
        "Original thinking",
        "Strong ambition",
      ],
      challenges: [
        "Ego",
        "Impatience",
        "Stubbornness",
        "Difficulty accepting direction",
      ],
    },

    2: {
      title: "Hidden Passion Number 2",
      theme: "Cooperation & Sensitivity",
      description:
        "Hidden Passion Number 2 indicates a strong inner attraction toward partnership, harmony, diplomacy and emotional connection. The person often prefers cooperation over confrontation.",
      strengths: [
        "Diplomacy",
        "Cooperation",
        "Sensitivity",
        "Empathy",
        "Relationship awareness",
      ],
      challenges: [
        "Over-sensitivity",
        "Indecision",
        "Dependence on approval",
        "Avoiding confrontation",
      ],
    },

    3: {
      title: "Hidden Passion Number 3",
      theme: "Creativity & Expression",
      description:
        "Hidden Passion Number 3 indicates a strong desire for creativity, communication, expression and social interaction. The person is naturally drawn toward sharing ideas, emotions and imagination.",
      strengths: [
        "Creativity",
        "Communication",
        "Imagination",
        "Optimism",
        "Self-expression",
      ],
      challenges: [
        "Scattered energy",
        "Lack of focus",
        "Inconsistency",
        "Need for attention",
      ],
    },

    4: {
      title: "Hidden Passion Number 4",
      theme: "Structure & Discipline",
      description:
        "Hidden Passion Number 4 indicates a strong attraction toward stability, organization, practical work and disciplined achievement. The person naturally prefers building things carefully and systematically.",
      strengths: [
        "Discipline",
        "Organization",
        "Reliability",
        "Persistence",
        "Practical thinking",
      ],
      challenges: [
        "Rigidity",
        "Resistance to change",
        "Stubbornness",
        "Excessive seriousness",
      ],
    },

    5: {
      title: "Hidden Passion Number 5",
      theme: "Freedom & Experience",
      description:
        "Hidden Passion Number 5 indicates a powerful attraction toward freedom, variety, movement, communication and new experiences. The person naturally seeks change and stimulation.",
      strengths: [
        "Adaptability",
        "Versatility",
        "Curiosity",
        "Communication",
        "Quick learning",
      ],
      challenges: [
        "Restlessness",
        "Impulsiveness",
        "Inconsistency",
        "Difficulty with routine",
      ],
    },

    6: {
      title: "Hidden Passion Number 6",
      theme: "Responsibility & Care",
      description:
        "Hidden Passion Number 6 indicates a strong inner desire to care for others, create harmony and take responsibility. The person is naturally attracted toward family, service and supportive roles.",
      strengths: [
        "Responsibility",
        "Loyalty",
        "Care",
        "Supportiveness",
        "Harmony",
      ],
      challenges: [
        "Over-responsibility",
        "Possessiveness",
        "Perfectionism",
        "Difficulty setting boundaries",
      ],
    },

    7: {
      title: "Hidden Passion Number 7",
      theme: "Knowledge & Analysis",
      description:
        "Hidden Passion Number 7 indicates a strong desire for knowledge, analysis, research and deeper understanding. The person naturally wants to investigate, observe and understand what lies beneath the surface.",
      strengths: [
        "Analysis",
        "Research ability",
        "Observation",
        "Intuition",
        "Deep thinking",
      ],
      challenges: [
        "Isolation",
        "Overthinking",
        "Emotional distance",
        "Difficulty trusting others",
      ],
    },

    8: {
      title: "Hidden Passion Number 8",
      theme: "Power & Achievement",
      description:
        "Hidden Passion Number 8 indicates a strong attraction toward achievement, authority, business, management and material success. The person naturally wants to build influence and accomplish substantial goals.",
      strengths: [
        "Ambition",
        "Leadership",
        "Management ability",
        "Determination",
        "Achievement drive",
      ],
      challenges: [
        "Need for control",
        "Power struggles",
        "Material pressure",
        "Work obsession",
      ],
    },

    9: {
      title: "Hidden Passion Number 9",
      theme: "Compassion & Higher Purpose",
      description:
        "Hidden Passion Number 9 indicates a strong attraction toward compassion, service, idealism and meaningful contribution. The person may naturally want to help others or work toward causes larger than personal benefit.",
      strengths: [
        "Compassion",
        "Generosity",
        "Idealism",
        "Emotional depth",
        "Humanitarian outlook",
      ],
      challenges: [
        "Over-sacrifice",
        "Emotional intensity",
        "Difficulty letting go",
        "Unrealistic expectations",
      ],
    },
  },

  // =====================================
  // Hidden Passion Helper
  // =====================================

  getHiddenPassionInterpretation(number) {
    const value = Number(number);

    return this.hiddenPassion[value] || null;
  },

  // =====================================
  // Complete Hidden Passion Result
  // Supports Multiple Hidden Passions
  // =====================================

  getHiddenPassionResult(hiddenPassionData) {
    if (!hiddenPassionData || !Array.isArray(hiddenPassionData.hiddenPassion)) {
      return [];
    }

    return hiddenPassionData.hiddenPassion
      .map((number) => {
        const interpretation = this.getHiddenPassionInterpretation(number);

        if (!interpretation) {
          return null;
        }

        return {
          number,
          highestCount: hiddenPassionData.highestCount,

          title: interpretation.title,
          theme: interpretation.theme,
          description: interpretation.description,
          strengths: interpretation.strengths,
          challenges: interpretation.challenges,
        };
      })
      .filter(Boolean);
  },

  // =====================================
  // 12. Karmic Lesson Number
  // Pythagorean / Modern Numerology
  // =====================================

  karmicLesson: {
    1: {
      title: "Karmic Lesson Number 1",
      theme: "Independence & Self-Confidence",
      description:
        "Karmic Lesson 1 indicates a need to develop independence, initiative, self-confidence and the ability to make personal decisions without excessive dependence on others.",
      strengths: [
        "Self-reliance",
        "Initiative",
        "Leadership development",
        "Personal courage",
      ],
      challenges: [
        "Dependence on others",
        "Low self-confidence",
        "Fear of taking initiative",
        "Difficulty asserting oneself",
      ],
    },

    2: {
      title: "Karmic Lesson Number 2",
      theme: "Cooperation & Emotional Balance",
      description:
        "Karmic Lesson 2 indicates a need to develop patience, cooperation, diplomacy and emotional understanding in relationships.",
      strengths: [
        "Diplomacy",
        "Patience",
        "Cooperation",
        "Emotional awareness",
      ],
      challenges: [
        "Over-sensitivity",
        "Impatience with others",
        "Difficulty cooperating",
        "Relationship insecurity",
      ],
    },

    3: {
      title: "Karmic Lesson Number 3",
      theme: "Expression & Creativity",
      description:
        "Karmic Lesson 3 indicates a need to develop communication, creativity and healthy self-expression. The person may need to learn how to express thoughts and emotions more openly.",
      strengths: ["Communication", "Creativity", "Optimism", "Self-expression"],
      challenges: [
        "Difficulty expressing emotions",
        "Fear of criticism",
        "Scattered communication",
        "Lack of confidence in creativity",
      ],
    },

    4: {
      title: "Karmic Lesson Number 4",
      theme: "Discipline & Stability",
      description:
        "Karmic Lesson 4 indicates a need to develop discipline, organization, patience and a practical approach to responsibilities.",
      strengths: [
        "Discipline",
        "Organization",
        "Persistence",
        "Practical thinking",
      ],
      challenges: [
        "Lack of consistency",
        "Avoiding routine",
        "Difficulty with structure",
        "Poor planning",
      ],
    },

    5: {
      title: "Karmic Lesson Number 5",
      theme: "Freedom With Responsibility",
      description:
        "Karmic Lesson 5 indicates a need to learn how to handle freedom, change and new experiences responsibly without becoming impulsive or unstable.",
      strengths: [
        "Adaptability",
        "Versatility",
        "Curiosity",
        "Ability to handle change",
      ],
      challenges: [
        "Fear of change",
        "Restlessness",
        "Impulsiveness",
        "Difficulty balancing freedom and responsibility",
      ],
    },

    6: {
      title: "Karmic Lesson Number 6",
      theme: "Responsibility & Relationships",
      description:
        "Karmic Lesson 6 indicates a need to develop responsibility, commitment, care and balanced involvement in family and relationships.",
      strengths: ["Responsibility", "Care", "Loyalty", "Commitment"],
      challenges: [
        "Avoiding responsibility",
        "Relationship difficulties",
        "Perfectionism",
        "Difficulty balancing personal and family needs",
      ],
    },

    7: {
      title: "Karmic Lesson Number 7",
      theme: "Inner Wisdom & Trust",
      description:
        "Karmic Lesson 7 indicates a need to develop inner understanding, patience, trust, analysis and deeper self-knowledge.",
      strengths: [
        "Analysis",
        "Observation",
        "Inner awareness",
        "Independent thinking",
      ],
      challenges: [
        "Excessive doubt",
        "Difficulty trusting",
        "Isolation",
        "Avoiding deeper self-examination",
      ],
    },

    8: {
      title: "Karmic Lesson Number 8",
      theme: "Power & Material Responsibility",
      description:
        "Karmic Lesson 8 indicates a need to develop responsible use of authority, money, ambition and practical power.",
      strengths: ["Management", "Ambition", "Practical judgment", "Leadership"],
      challenges: [
        "Financial difficulties",
        "Problems with authority",
        "Fear of responsibility",
        "Misuse or avoidance of power",
      ],
    },

    9: {
      title: "Karmic Lesson Number 9",
      theme: "Compassion & Letting Go",
      description:
        "Karmic Lesson 9 indicates a need to develop compassion, tolerance, generosity and the ability to release emotional attachments when necessary.",
      strengths: [
        "Compassion",
        "Generosity",
        "Broad-mindedness",
        "Emotional maturity",
      ],
      challenges: [
        "Difficulty letting go",
        "Emotional attachment",
        "Narrow judgment",
        "Difficulty forgiving",
      ],
    },
  },

  // =====================================
  // Karmic Lesson Helper
  // =====================================

  getKarmicLessonInterpretation(number) {
    const value = Number(number);

    return this.karmicLesson[value] || null;
  },

  // =====================================
  // Complete Karmic Lesson Result
  // Supports Multiple Lessons
  // =====================================

  getKarmicLessonResult(karmicLessonData) {
    if (!karmicLessonData || !Array.isArray(karmicLessonData.karmicLessons)) {
      return [];
    }

    return karmicLessonData.karmicLessons
      .map((number) => {
        const interpretation = this.getKarmicLessonInterpretation(number);

        if (!interpretation) {
          return null;
        }

        return {
          number,
          title: interpretation.title,
          theme: interpretation.theme,
          description: interpretation.description,
          strengths: interpretation.strengths,
          challenges: interpretation.challenges,
        };
      })
      .filter(Boolean);
  },
  // =====================================
  // 13. Subconscious Self Number
  // Pythagorean / Modern Numerology
  // =====================================

  subconsciousSelf: {
    1: {
      title: "Subconscious Self Number 1",
      theme: "Direct & Independent Response",
      description:
        "Subconscious Self Number 1 suggests that in unexpected or difficult situations, the person tends to respond independently and directly. There is a natural tendency to rely on personal initiative.",
      strengths: [
        "Quick initiative",
        "Self-reliance",
        "Direct action",
        "Independent response",
      ],
      challenges: [
        "Impatience",
        "Acting alone too quickly",
        "Difficulty accepting help",
        "Strong self-focus under pressure",
      ],
    },

    2: {
      title: "Subconscious Self Number 2",
      theme: "Sensitive & Cooperative Response",
      description:
        "Subconscious Self Number 2 suggests a natural tendency to seek cooperation, emotional understanding and support when facing unexpected situations.",
      strengths: [
        "Cooperation",
        "Diplomacy",
        "Sensitivity",
        "Awareness of others",
      ],
      challenges: [
        "Over-sensitivity",
        "Indecision",
        "Dependence on reassurance",
        "Difficulty acting quickly",
      ],
    },

    3: {
      title: "Subconscious Self Number 3",
      theme: "Expressive & Creative Response",
      description:
        "Subconscious Self Number 3 suggests that communication, creativity and expression naturally emerge when the person is under pressure or facing unexpected situations.",
      strengths: [
        "Communication",
        "Creativity",
        "Optimism",
        "Expressive thinking",
      ],
      challenges: [
        "Scattered reactions",
        "Avoiding serious issues",
        "Emotional inconsistency",
        "Difficulty maintaining focus",
      ],
    },

    4: {
      title: "Subconscious Self Number 4",
      theme: "Practical & Structured Response",
      description:
        "Subconscious Self Number 4 suggests a natural tendency to create structure, organize circumstances and respond practically when facing difficulties.",
      strengths: [
        "Organization",
        "Practical thinking",
        "Discipline",
        "Persistence",
      ],
      challenges: [
        "Rigidity",
        "Resistance to sudden change",
        "Over-caution",
        "Difficulty adapting quickly",
      ],
    },

    5: {
      title: "Subconscious Self Number 5",
      theme: "Adaptive & Flexible Response",
      description:
        "Subconscious Self Number 5 suggests that the person naturally responds to unexpected situations through adaptability, movement and quick adjustment.",
      strengths: [
        "Adaptability",
        "Quick thinking",
        "Versatility",
        "Ability to handle change",
      ],
      challenges: [
        "Restlessness",
        "Impulsiveness",
        "Inconsistent reactions",
        "Difficulty remaining settled",
      ],
    },

    6: {
      title: "Subconscious Self Number 6",
      theme: "Responsible & Protective Response",
      description:
        "Subconscious Self Number 6 suggests a natural tendency to protect, support and take responsibility when difficult situations arise.",
      strengths: ["Responsibility", "Care", "Loyalty", "Protective nature"],
      challenges: [
        "Taking too much responsibility",
        "Emotional burden",
        "Interfering in others' problems",
        "Difficulty setting boundaries",
      ],
    },

    7: {
      title: "Subconscious Self Number 7",
      theme: "Analytical & Reflective Response",
      description:
        "Subconscious Self Number 7 suggests that the person naturally responds to unexpected situations by observing, analysing and trying to understand the deeper cause before acting.",
      strengths: [
        "Analysis",
        "Observation",
        "Intuition",
        "Thoughtful response",
      ],
      challenges: [
        "Overthinking",
        "Withdrawal",
        "Delayed action",
        "Difficulty sharing concerns",
      ],
    },

    8: {
      title: "Subconscious Self Number 8",
      theme: "Strong & Controlled Response",
      description:
        "Subconscious Self Number 8 suggests a natural ability to take control, organize resources and respond with determination when pressure or responsibility increases.",
      strengths: [
        "Management ability",
        "Determination",
        "Authority",
        "Practical control",
      ],
      challenges: [
        "Excessive control",
        "Power struggles",
        "Harsh reactions",
        "Material stress",
      ],
    },

    9: {
      title: "Subconscious Self Number 9",
      theme: "Broad & Compassionate Response",
      description:
        "Subconscious Self Number 9 suggests a broad, compassionate and emotionally aware response to unexpected situations. The person may naturally consider the wider impact on others.",
      strengths: [
        "Compassion",
        "Courage",
        "Broad perspective",
        "Emotional awareness",
      ],
      challenges: [
        "Emotional intensity",
        "Over-involvement",
        "Difficulty letting go",
        "Taking situations personally",
      ],
    },
  },

  // =====================================
  // Subconscious Self Helper
  // =====================================

  getSubconsciousSelfInterpretation(number) {
    const value = Number(number);

    return this.subconsciousSelf[value] || null;
  },

  // =====================================
  // Complete Subconscious Self Result
  // =====================================

  getSubconsciousSelfResult(subconsciousSelfData) {
    if (!subconsciousSelfData || typeof subconsciousSelfData !== "object") {
      return null;
    }

    const number = Number(subconsciousSelfData.subconsciousSelf);

    const interpretation = this.getSubconsciousSelfInterpretation(number);

    if (!interpretation) {
      return null;
    }

    return {
      number,
      title: interpretation.title,
      theme: interpretation.theme,
      description: interpretation.description,
      strengths: interpretation.strengths,
      challenges: interpretation.challenges,
    };
  },
  // =====================================
  // 14. Rational Thought Number
  // Pythagorean / Modern Numerology
  // Root Number Only
  // =====================================

  rationalThought: {
    1: {
      title: "Rational Thought Number 1",
      theme: "Independent & Direct Thinking",
      description:
        "Rational Thought Number 1 indicates an independent, direct and self-reliant mental approach. The person tends to trust personal judgment and prefers making decisions without excessive outside influence.",
      strengths: [
        "Independent thinking",
        "Quick decisions",
        "Initiative",
        "Strong personal judgment",
      ],
      challenges: [
        "Stubborn thinking",
        "Impatience",
        "Difficulty accepting advice",
        "Overconfidence in personal judgment",
      ],
    },

    2: {
      title: "Rational Thought Number 2",
      theme: "Diplomatic & Sensitive Thinking",
      description:
        "Rational Thought Number 2 indicates a thoughtful, cooperative and sensitive mental approach. The person often considers different viewpoints before making decisions.",
      strengths: [
        "Diplomacy",
        "Patience",
        "Awareness of others",
        "Balanced consideration",
      ],
      challenges: [
        "Indecision",
        "Over-sensitivity",
        "Overthinking others' opinions",
        "Difficulty making quick decisions",
      ],
    },

    3: {
      title: "Rational Thought Number 3",
      theme: "Creative & Expressive Thinking",
      description:
        "Rational Thought Number 3 indicates a creative, imaginative and communicative way of thinking. The person often solves problems through ideas, expression and flexible thinking.",
      strengths: [
        "Creativity",
        "Communication",
        "Imagination",
        "Optimistic thinking",
      ],
      challenges: [
        "Scattered thoughts",
        "Lack of focus",
        "Avoiding details",
        "Difficulty maintaining consistency",
      ],
    },

    4: {
      title: "Rational Thought Number 4",
      theme: "Practical & Structured Thinking",
      description:
        "Rational Thought Number 4 indicates a practical, organized and methodical mental approach. The person prefers facts, structure and step-by-step reasoning.",
      strengths: [
        "Organization",
        "Practical judgment",
        "Logical planning",
        "Attention to detail",
      ],
      challenges: [
        "Rigidity",
        "Resistance to new ideas",
        "Over-caution",
        "Difficulty adapting quickly",
      ],
    },

    5: {
      title: "Rational Thought Number 5",
      theme: "Flexible & Adaptive Thinking",
      description:
        "Rational Thought Number 5 indicates a flexible, curious and adaptable mental approach. The person often thinks quickly and adjusts easily to changing circumstances.",
      strengths: ["Adaptability", "Quick thinking", "Versatility", "Curiosity"],
      challenges: [
        "Restlessness",
        "Impulsive decisions",
        "Difficulty staying focused",
        "Changing direction too often",
      ],
    },

    6: {
      title: "Rational Thought Number 6",
      theme: "Responsible & Balanced Thinking",
      description:
        "Rational Thought Number 6 indicates a responsible, caring and balanced mental approach. Decisions are often influenced by duty, relationships and the desire to create harmony.",
      strengths: [
        "Responsibility",
        "Fair judgment",
        "Supportive thinking",
        "Strong sense of duty",
      ],
      challenges: [
        "Taking too much responsibility",
        "Perfectionism",
        "Emotional involvement in decisions",
        "Difficulty separating personal feelings from logic",
      ],
    },

    7: {
      title: "Rational Thought Number 7",
      theme: "Analytical & Investigative Thinking",
      description:
        "Rational Thought Number 7 indicates an analytical, reflective and investigative mental approach. The person prefers understanding the deeper cause of situations before reaching conclusions.",
      strengths: [
        "Analysis",
        "Research ability",
        "Observation",
        "Independent reasoning",
      ],
      challenges: [
        "Overthinking",
        "Excessive doubt",
        "Mental isolation",
        "Delayed decisions",
      ],
    },

    8: {
      title: "Rational Thought Number 8",
      theme: "Strategic & Practical Thinking",
      description:
        "Rational Thought Number 8 indicates a strategic, ambitious and results-oriented mental approach. The person tends to evaluate situations in terms of efficiency, authority and practical outcomes.",
      strengths: [
        "Strategic thinking",
        "Management judgment",
        "Decision-making",
        "Practical ambition",
      ],
      challenges: [
        "Excessive control",
        "Material focus",
        "Harsh judgment",
        "Power-oriented decisions",
      ],
    },

    9: {
      title: "Rational Thought Number 9",
      theme: "Broad & Humanitarian Thinking",
      description:
        "Rational Thought Number 9 indicates a broad-minded, compassionate and idealistic mental approach. The person often considers the wider impact of decisions on other people.",
      strengths: [
        "Broad perspective",
        "Compassion",
        "Idealism",
        "Understanding of people",
      ],
      challenges: [
        "Emotional judgment",
        "Idealistic expectations",
        "Difficulty focusing on practical details",
        "Taking situations personally",
      ],
    },
  },

  // =====================================
  // Rational Thought Helper
  // =====================================

  getRationalThoughtInterpretation(number) {
    const value = Number(number);

    return this.rationalThought[value] || null;
  },

  // =====================================
  // Complete Rational Thought Result
  // =====================================

  getRationalThoughtResult(rationalThoughtData) {
    if (!rationalThoughtData || typeof rationalThoughtData !== "object") {
      return null;
    }

    const number = Number(rationalThoughtData.reduction.final);

    const interpretation = this.getRationalThoughtInterpretation(number);

    if (!interpretation) {
      return null;
    }

    return {
      number,
      title: interpretation.title,
      theme: interpretation.theme,
      description: interpretation.description,
      strengths: interpretation.strengths,
      challenges: interpretation.challenges,
    };
  },
  // =====================================
  // 15. Maturity Number
  // Pythagorean / Modern Numerology
  // Root Number Only
  // =====================================

  maturity: {
    1: {
      title: "Maturity Number 1",
      theme: "Independence & Leadership",
      description:
        "Maturity Number 1 indicates that with age and experience, the person tends to become more independent, self-directed and confident in taking initiative.",
      strengths: [
        "Leadership",
        "Independence",
        "Initiative",
        "Self-confidence",
      ],
      challenges: [
        "Stubbornness",
        "Impatience",
        "Excessive independence",
        "Difficulty accepting guidance",
      ],
    },

    2: {
      title: "Maturity Number 2",
      theme: "Cooperation & Diplomacy",
      description:
        "Maturity Number 2 indicates growing sensitivity, cooperation and diplomatic ability. With maturity, relationships and partnership become increasingly important.",
      strengths: [
        "Diplomacy",
        "Cooperation",
        "Patience",
        "Emotional awareness",
      ],
      challenges: [
        "Indecision",
        "Over-sensitivity",
        "Dependence on others",
        "Avoiding confrontation",
      ],
    },

    3: {
      title: "Maturity Number 3",
      theme: "Creativity & Expression",
      description:
        "Maturity Number 3 indicates increasing creativity, communication and self-expression. Over time, the person may feel a stronger need to express ideas and talents.",
      strengths: ["Creativity", "Communication", "Optimism", "Self-expression"],
      challenges: [
        "Scattered focus",
        "Lack of discipline",
        "Emotional inconsistency",
        "Difficulty completing projects",
      ],
    },

    4: {
      title: "Maturity Number 4",
      theme: "Stability & Discipline",
      description:
        "Maturity Number 4 indicates a growing emphasis on stability, organization, discipline and practical achievement.",
      strengths: ["Discipline", "Organization", "Reliability", "Persistence"],
      challenges: [
        "Rigidity",
        "Resistance to change",
        "Overwork",
        "Excessive seriousness",
      ],
    },

    5: {
      title: "Maturity Number 5",
      theme: "Freedom & Adaptability",
      description:
        "Maturity Number 5 indicates an increasing desire for freedom, variety, movement and new experiences as life progresses.",
      strengths: [
        "Adaptability",
        "Versatility",
        "Curiosity",
        "Progressive thinking",
      ],
      challenges: [
        "Restlessness",
        "Impulsiveness",
        "Lack of consistency",
        "Difficulty with commitment",
      ],
    },

    6: {
      title: "Maturity Number 6",
      theme: "Responsibility & Service",
      description:
        "Maturity Number 6 indicates increasing responsibility, concern for family, service and the desire to create harmony and stability for others.",
      strengths: ["Responsibility", "Care", "Loyalty", "Supportiveness"],
      challenges: [
        "Over-responsibility",
        "Perfectionism",
        "Interference",
        "Difficulty setting boundaries",
      ],
    },

    7: {
      title: "Maturity Number 7",
      theme: "Wisdom & Inner Development",
      description:
        "Maturity Number 7 indicates increasing introspection, analysis, spiritual inquiry and the search for deeper understanding.",
      strengths: ["Analysis", "Research", "Intuition", "Inner wisdom"],
      challenges: [
        "Isolation",
        "Overthinking",
        "Skepticism",
        "Emotional distance",
      ],
    },

    8: {
      title: "Maturity Number 8",
      theme: "Achievement & Authority",
      description:
        "Maturity Number 8 indicates increasing focus on achievement, management, authority and practical material success.",
      strengths: [
        "Leadership",
        "Business ability",
        "Management",
        "Strategic thinking",
      ],
      challenges: [
        "Control",
        "Materialism",
        "Work obsession",
        "Harsh judgment",
      ],
    },

    9: {
      title: "Maturity Number 9",
      theme: "Compassion & Humanitarian Growth",
      description:
        "Maturity Number 9 indicates increasing compassion, broad-mindedness and a desire to contribute to society or meaningful causes.",
      strengths: [
        "Compassion",
        "Broad perspective",
        "Generosity",
        "Humanitarian outlook",
      ],
      challenges: [
        "Emotional idealism",
        "Difficulty letting go",
        "Over-sacrifice",
        "Unrealistic expectations",
      ],
    },
  },

  getMaturityInterpretation(number) {
    const value = Number(number);
    return this.maturity[value] || null;
  },

  getMaturityResult(maturityData) {
    if (!maturityData || typeof maturityData !== "object") {
      return null;
    }

    const number = Number(maturityData.reduction.final);

    const interpretation = this.getMaturityInterpretation(number);

    if (!interpretation) {
      return null;
    }

    return {
      number,
      title: interpretation.title,
      theme: interpretation.theme,
      description: interpretation.description,
      strengths: interpretation.strengths,
      challenges: interpretation.challenges,
    };
  },
  // =====================================
  // 16. Bridge Numbers
  // Pythagorean / Modern Numerology
  // =====================================

  bridge: {
    0: {
      title: "Bridge Number 0",
      theme: "Natural Harmony",
      description:
        "Bridge Number 0 indicates little or no gap between the two compared core numbers. Their energies tend to work together naturally, so less conscious adjustment may be required.",
      strengths: [
        "Natural compatibility",
        "Internal consistency",
        "Smooth integration",
      ],
      challenges: [
        "Taking natural strengths for granted",
        "Lack of conscious development",
        "Overconfidence in familiar patterns",
      ],
    },

    1: {
      title: "Bridge Number 1",
      theme: "Independence & Initiative",
      description:
        "Bridge Number 1 indicates that greater independence, initiative and self-confidence help connect the two areas represented by the compared numbers.",
      strengths: [
        "Initiative",
        "Self-confidence",
        "Independent action",
        "Leadership",
      ],
      challenges: [
        "Ego",
        "Impatience",
        "Stubbornness",
        "Difficulty accepting support",
      ],
    },

    2: {
      title: "Bridge Number 2",
      theme: "Cooperation & Sensitivity",
      description:
        "Bridge Number 2 indicates that cooperation, patience, diplomacy and sensitivity help create greater harmony between the two core numbers.",
      strengths: [
        "Diplomacy",
        "Cooperation",
        "Patience",
        "Awareness of others",
      ],
      challenges: [
        "Indecision",
        "Over-sensitivity",
        "Dependence",
        "Avoiding necessary confrontation",
      ],
    },

    3: {
      title: "Bridge Number 3",
      theme: "Expression & Creativity",
      description:
        "Bridge Number 3 indicates that communication, creativity and open self-expression help connect the two areas represented by the core numbers.",
      strengths: ["Communication", "Creativity", "Optimism", "Self-expression"],
      challenges: [
        "Scattered focus",
        "Superficial communication",
        "Emotional inconsistency",
        "Difficulty maintaining discipline",
      ],
    },

    4: {
      title: "Bridge Number 4",
      theme: "Discipline & Structure",
      description:
        "Bridge Number 4 indicates that organization, discipline, patience and practical effort are important for bringing the two core energies into balance.",
      strengths: [
        "Discipline",
        "Organization",
        "Reliability",
        "Practical thinking",
      ],
      challenges: [
        "Rigidity",
        "Resistance to change",
        "Overwork",
        "Excessive caution",
      ],
    },

    5: {
      title: "Bridge Number 5",
      theme: "Freedom & Adaptability",
      description:
        "Bridge Number 5 indicates that flexibility, adaptability and willingness to experience change help connect the two core numbers.",
      strengths: [
        "Adaptability",
        "Versatility",
        "Curiosity",
        "Open-mindedness",
      ],
      challenges: [
        "Restlessness",
        "Impulsiveness",
        "Lack of consistency",
        "Difficulty with commitment",
      ],
    },

    6: {
      title: "Bridge Number 6",
      theme: "Responsibility & Harmony",
      description:
        "Bridge Number 6 indicates that responsibility, care, commitment and balanced involvement with others help create harmony between the compared numbers.",
      strengths: ["Responsibility", "Care", "Commitment", "Supportiveness"],
      challenges: [
        "Over-responsibility",
        "Perfectionism",
        "Interference",
        "Difficulty setting boundaries",
      ],
    },

    7: {
      title: "Bridge Number 7",
      theme: "Understanding & Inner Wisdom",
      description:
        "Bridge Number 7 indicates that reflection, analysis, patience and deeper understanding help reconcile the two core energies.",
      strengths: ["Analysis", "Observation", "Intuition", "Inner awareness"],
      challenges: [
        "Overthinking",
        "Isolation",
        "Excessive doubt",
        "Difficulty expressing feelings",
      ],
    },

    8: {
      title: "Bridge Number 8",
      theme: "Power & Practical Achievement",
      description:
        "Bridge Number 8 indicates that organization, authority, practical judgment and responsible use of power help connect the two core numbers.",
      strengths: [
        "Management",
        "Authority",
        "Strategic thinking",
        "Practical judgment",
      ],
      challenges: [
        "Control",
        "Materialism",
        "Harsh judgment",
        "Power struggles",
      ],
    },
  },

  getBridgeInterpretation(number) {
    const value = Number(number);
    return this.bridge[value] || null;
  },

  getBridgeResult(bridgeData) {
    if (!bridgeData || typeof bridgeData !== "object") {
      return null;
    }

    const lifePathBridgeNumber = Number(
      bridgeData.lifePathBridge.reduction.final,
    );

    const birthdayBridgeNumber = Number(
      bridgeData.birthdayBridge.reduction.final,
    );

    const lifePathBridgeInterpretation =
      this.getBridgeInterpretation(lifePathBridgeNumber);

    const birthdayBridgeInterpretation =
      this.getBridgeInterpretation(birthdayBridgeNumber);

    return {
      lifePathBridge: lifePathBridgeInterpretation
        ? {
            number: lifePathBridgeNumber,
            title: lifePathBridgeInterpretation.title,
            theme: lifePathBridgeInterpretation.theme,
            description: lifePathBridgeInterpretation.description,
            strengths: lifePathBridgeInterpretation.strengths,
            challenges: lifePathBridgeInterpretation.challenges,
          }
        : null,

      birthdayBridge: birthdayBridgeInterpretation
        ? {
            number: birthdayBridgeNumber,
            title: birthdayBridgeInterpretation.title,
            theme: birthdayBridgeInterpretation.theme,
            description: birthdayBridgeInterpretation.description,
            strengths: birthdayBridgeInterpretation.strengths,
            challenges: birthdayBridgeInterpretation.challenges,
          }
        : null,
    };
  },
  // =====================================
  // 17. Pinnacle Number
  // Pythagorean / Modern Numerology
  // 1-9 + Master 11 & 22
  // =====================================

  pinnacle: {
    1: {
      title: "Pinnacle Number 1",
      theme: "Independence & Leadership",
      description:
        "Pinnacle Number 1 represents a period of independence, initiative, leadership and personal development. This cycle encourages the person to rely more strongly on personal ability and direction.",
      strengths: [
        "Leadership",
        "Initiative",
        "Independence",
        "Self-confidence",
      ],
      challenges: [
        "Impatience",
        "Stubbornness",
        "Ego",
        "Difficulty accepting support",
      ],
    },

    2: {
      title: "Pinnacle Number 2",
      theme: "Cooperation & Relationships",
      description:
        "Pinnacle Number 2 represents a period focused on cooperation, patience, relationships, diplomacy and emotional sensitivity.",
      strengths: [
        "Diplomacy",
        "Cooperation",
        "Patience",
        "Partnership ability",
      ],
      challenges: [
        "Over-sensitivity",
        "Indecision",
        "Dependence",
        "Fear of confrontation",
      ],
    },

    3: {
      title: "Pinnacle Number 3",
      theme: "Creativity & Expression",
      description:
        "Pinnacle Number 3 represents a period of communication, creativity, social expression and development of artistic or expressive abilities.",
      strengths: ["Creativity", "Communication", "Optimism", "Social ability"],
      challenges: [
        "Scattered focus",
        "Lack of discipline",
        "Emotional inconsistency",
        "Difficulty completing projects",
      ],
    },

    4: {
      title: "Pinnacle Number 4",
      theme: "Work, Structure & Stability",
      description:
        "Pinnacle Number 4 represents a period of practical development, discipline, organization, responsibility and building secure foundations.",
      strengths: [
        "Discipline",
        "Organization",
        "Persistence",
        "Practical ability",
      ],
      challenges: [
        "Heavy responsibilities",
        "Rigidity",
        "Overwork",
        "Resistance to change",
      ],
    },

    5: {
      title: "Pinnacle Number 5",
      theme: "Freedom & Change",
      description:
        "Pinnacle Number 5 represents a period of change, freedom, movement, exploration and new experiences.",
      strengths: [
        "Adaptability",
        "Versatility",
        "Curiosity",
        "Progressive thinking",
      ],
      challenges: [
        "Restlessness",
        "Impulsiveness",
        "Instability",
        "Difficulty maintaining commitment",
      ],
    },

    6: {
      title: "Pinnacle Number 6",
      theme: "Responsibility, Family & Service",
      description:
        "Pinnacle Number 6 represents a period focused on family, responsibility, relationships, care, service and creating harmony.",
      strengths: ["Responsibility", "Care", "Loyalty", "Supportiveness"],
      challenges: [
        "Over-responsibility",
        "Perfectionism",
        "Interference",
        "Difficulty setting boundaries",
      ],
    },

    7: {
      title: "Pinnacle Number 7",
      theme: "Knowledge & Inner Development",
      description:
        "Pinnacle Number 7 represents a period of analysis, research, introspection, spiritual development and deeper understanding.",
      strengths: ["Analysis", "Research", "Intuition", "Inner awareness"],
      challenges: [
        "Isolation",
        "Overthinking",
        "Excessive doubt",
        "Emotional distance",
      ],
    },

    8: {
      title: "Pinnacle Number 8",
      theme: "Achievement & Authority",
      description:
        "Pinnacle Number 8 represents a period concerned with achievement, management, authority, financial development and practical success.",
      strengths: [
        "Management",
        "Leadership",
        "Strategic thinking",
        "Business ability",
      ],
      challenges: [
        "Control",
        "Materialism",
        "Power struggles",
        "Work obsession",
      ],
    },

    9: {
      title: "Pinnacle Number 9",
      theme: "Completion & Humanitarian Growth",
      description:
        "Pinnacle Number 9 represents a period of completion, compassion, broad awareness, service and learning to release what has fulfilled its purpose.",
      strengths: [
        "Compassion",
        "Broad perspective",
        "Generosity",
        "Humanitarian outlook",
      ],
      challenges: [
        "Difficulty letting go",
        "Emotional intensity",
        "Over-sacrifice",
        "Idealistic expectations",
      ],
    },

    11: {
      title: "Pinnacle Number 11",
      theme: "Intuition & Inspiration",
      description:
        "Pinnacle Number 11 is a Master Number period associated with heightened intuition, inspiration, sensitivity and the potential to influence or inspire others through ideas and awareness.",
      strengths: ["Intuition", "Inspiration", "Vision", "Spiritual awareness"],
      challenges: [
        "Nervous tension",
        "Over-sensitivity",
        "Self-doubt",
        "Difficulty grounding ideas",
      ],
    },

    22: {
      title: "Pinnacle Number 22",
      theme: "Master Building & Achievement",
      description:
        "Pinnacle Number 22 is a Master Number period associated with large-scale achievement, practical vision, organization and the ability to turn important ideas into tangible results.",
      strengths: [
        "Large-scale vision",
        "Organization",
        "Leadership",
        "Practical achievement",
      ],
      challenges: [
        "Heavy responsibility",
        "Pressure",
        "Fear of failure",
        "Misuse of authority",
      ],
    },
  },

  getPinnacleInterpretation(number) {
    const value = Number(number);
    return this.pinnacle[value] || null;
  },

  getPinnacleResult(pinnacleData) {
    if (!pinnacleData || typeof pinnacleData !== "object") {
      return null;
    }

    const buildResult = (pinnacle, ageRange) => {
      const number = Number(pinnacle.reduction.final);

      const interpretation = this.getPinnacleInterpretation(number);

      if (!interpretation) {
        return null;
      }

      return {
        number,
        title: interpretation.title,
        theme: interpretation.theme,
        description: interpretation.description,
        strengths: interpretation.strengths,
        challenges: interpretation.challenges,
        ageRange,
      };
    };

    return {
      first: buildResult(pinnacleData.first, pinnacleData.ageRanges.first),

      second: buildResult(pinnacleData.second, pinnacleData.ageRanges.second),

      third: buildResult(pinnacleData.third, pinnacleData.ageRanges.third),

      fourth: buildResult(pinnacleData.fourth, pinnacleData.ageRanges.fourth),
    };
  },
  // =====================================
  // 18. Challenge Number
  // Pythagorean / Modern Numerology
  // 0-9
  // =====================================
  challenge: {
    0: {
      title: "Challenge Number 0",
      theme: "Open Potential & Broad Lessons",
      description:
        "Challenge Number 0 does not mean there are no challenges. It indicates that lessons may come from many different areas of life rather than one single dominant pattern.",
      strengths: [
        "Adaptability",
        "Broad potential",
        "Flexibility",
        "Spiritual awareness",
      ],
      challenges: [
        "Lack of clear direction",
        "Feeling pulled in many directions",
        "Difficulty identifying the main lesson",
        "Need for stronger inner guidance",
      ],
    },

    1: {
      title: "Challenge Number 1",
      theme: "Independence & Self-Confidence",
      description:
        "Challenge Number 1 focuses on developing independence, courage, initiative and confidence in personal decisions.",
      strengths: ["Initiative", "Leadership", "Self-reliance", "Courage"],
      challenges: [
        "Self-doubt",
        "Dependence on approval",
        "Ego",
        "Difficulty asserting oneself properly",
      ],
    },

    2: {
      title: "Challenge Number 2",
      theme: "Sensitivity & Cooperation",
      description:
        "Challenge Number 2 focuses on emotional sensitivity, patience, cooperation and learning how to work harmoniously with others.",
      strengths: [
        "Diplomacy",
        "Patience",
        "Cooperation",
        "Emotional awareness",
      ],
      challenges: [
        "Over-sensitivity",
        "Indecision",
        "Fear of criticism",
        "Dependence on others",
      ],
    },

    3: {
      title: "Challenge Number 3",
      theme: "Expression & Confidence",
      description:
        "Challenge Number 3 focuses on learning to express thoughts, emotions and creativity openly and confidently.",
      strengths: ["Creativity", "Communication", "Optimism", "Self-expression"],
      challenges: [
        "Fear of expression",
        "Scattered focus",
        "Emotional inconsistency",
        "Concern about others' opinions",
      ],
    },

    4: {
      title: "Challenge Number 4",
      theme: "Discipline & Stability",
      description:
        "Challenge Number 4 focuses on developing discipline, organization, patience and the ability to build stable foundations.",
      strengths: [
        "Discipline",
        "Organization",
        "Persistence",
        "Practical ability",
      ],
      challenges: [
        "Resistance to structure",
        "Rigidity",
        "Impatience with routine",
        "Difficulty maintaining consistency",
      ],
    },

    5: {
      title: "Challenge Number 5",
      theme: "Freedom & Self-Control",
      description:
        "Challenge Number 5 focuses on learning how to use freedom responsibly while developing adaptability and self-control.",
      strengths: [
        "Adaptability",
        "Versatility",
        "Curiosity",
        "Progressive thinking",
      ],
      challenges: [
        "Restlessness",
        "Impulsiveness",
        "Instability",
        "Difficulty with commitment",
      ],
    },

    6: {
      title: "Challenge Number 6",
      theme: "Responsibility & Relationships",
      description:
        "Challenge Number 6 focuses on responsibility, family, relationships and learning to balance care for others with healthy personal boundaries.",
      strengths: ["Responsibility", "Care", "Loyalty", "Commitment"],
      challenges: [
        "Perfectionism",
        "Over-responsibility",
        "Interference",
        "Difficulty accepting imperfections",
      ],
    },

    7: {
      title: "Challenge Number 7",
      theme: "Trust & Inner Understanding",
      description:
        "Challenge Number 7 focuses on developing trust, patience, inner understanding and confidence in personal insight.",
      strengths: ["Analysis", "Observation", "Intuition", "Inner awareness"],
      challenges: [
        "Excessive doubt",
        "Isolation",
        "Overthinking",
        "Difficulty trusting others",
      ],
    },

    8: {
      title: "Challenge Number 8",
      theme: "Power & Material Responsibility",
      description:
        "Challenge Number 8 focuses on learning the balanced use of authority, money, ambition and personal power.",
      strengths: [
        "Management",
        "Leadership",
        "Strategic thinking",
        "Practical judgment",
      ],
      challenges: [
        "Control",
        "Power struggles",
        "Material obsession",
        "Fear of financial insecurity",
      ],
    },

    9: {
      title: "Challenge Number 9",
      theme: "Compassion & Letting Go",
      description:
        "Challenge Number 9 focuses on compassion, emotional maturity and learning to release situations, expectations or relationships that have completed their purpose.",
      strengths: [
        "Compassion",
        "Broad understanding",
        "Generosity",
        "Emotional awareness",
      ],
      challenges: [
        "Difficulty letting go",
        "Over-sacrifice",
        "Emotional attachment",
        "Idealistic expectations",
      ],
    },
  },

  getChallengeInterpretation(number) {
    const value = Number(number);
    return this.challenge[value] || null;
  },

  getChallengeResult(challengeData) {
    if (!challengeData || typeof challengeData !== "object") {
      return null;
    }

    const buildResult = (challenge) => {
      const number = Number(challenge.reduction.final);

      const interpretation = this.getChallengeInterpretation(number);

      if (!interpretation) {
        return null;
      }

      return {
        number,
        title: interpretation.title,
        theme: interpretation.theme,
        description: interpretation.description,
        strengths: interpretation.strengths,
        challenges: interpretation.challenges,
      };
    };

    return {
      first: buildResult(challengeData.first),
      second: buildResult(challengeData.second),
      third: buildResult(challengeData.third),
      fourth: buildResult(challengeData.fourth),
    };
  },
  // =====================================
  // 19. Personal Year Number
  // Pythagorean / Modern Numerology
  // 1-9
  // =====================================

  personalYear: {
    1: {
      title: "Personal Year 1",
      theme: "New Beginnings & Initiative",
      description:
        "Personal Year 1 marks the beginning of a new nine-year cycle. It is a period for initiative, independence, new goals and creating a fresh direction.",
      strengths: ["Initiative", "New beginnings", "Leadership", "Independence"],
      challenges: [
        "Impatience",
        "Acting too quickly",
        "Ego",
        "Difficulty accepting help",
      ],
    },

    2: {
      title: "Personal Year 2",
      theme: "Patience & Partnership",
      description:
        "Personal Year 2 emphasizes cooperation, relationships, patience and gradual development. Progress may feel slower, but partnerships and emotional awareness become important.",
      strengths: [
        "Cooperation",
        "Diplomacy",
        "Patience",
        "Relationship growth",
      ],
      challenges: [
        "Over-sensitivity",
        "Indecision",
        "Dependence",
        "Frustration with slow progress",
      ],
    },

    3: {
      title: "Personal Year 3",
      theme: "Expression & Creativity",
      description:
        "Personal Year 3 emphasizes creativity, communication, social activity and self-expression. It can be a period of increased visibility and creative opportunities.",
      strengths: [
        "Creativity",
        "Communication",
        "Optimism",
        "Social opportunities",
      ],
      challenges: [
        "Scattered focus",
        "Overspending",
        "Lack of discipline",
        "Emotional inconsistency",
      ],
    },

    4: {
      title: "Personal Year 4",
      theme: "Work & Foundation Building",
      description:
        "Personal Year 4 focuses on discipline, organization, responsibility and building stable foundations through steady practical effort.",
      strengths: [
        "Discipline",
        "Organization",
        "Persistence",
        "Practical progress",
      ],
      challenges: [
        "Heavy workload",
        "Restrictions",
        "Rigidity",
        "Frustration with slow results",
      ],
    },

    5: {
      title: "Personal Year 5",
      theme: "Change & Freedom",
      description:
        "Personal Year 5 brings change, movement, variety and opportunities for new experiences. Flexibility becomes especially important.",
      strengths: [
        "Adaptability",
        "New opportunities",
        "Travel and movement",
        "Versatility",
      ],
      challenges: [
        "Restlessness",
        "Impulsiveness",
        "Instability",
        "Difficulty maintaining commitments",
      ],
    },

    6: {
      title: "Personal Year 6",
      theme: "Responsibility & Relationships",
      description:
        "Personal Year 6 emphasizes family, relationships, responsibility, service and creating greater harmony in personal life.",
      strengths: [
        "Responsibility",
        "Commitment",
        "Care",
        "Relationship development",
      ],
      challenges: [
        "Over-responsibility",
        "Family pressure",
        "Perfectionism",
        "Difficulty setting boundaries",
      ],
    },

    7: {
      title: "Personal Year 7",
      theme: "Reflection & Inner Development",
      description:
        "Personal Year 7 is a period of introspection, analysis, study and inner development. External progress may slow while understanding and self-awareness deepen.",
      strengths: ["Research", "Analysis", "Self-awareness", "Inner growth"],
      challenges: [
        "Isolation",
        "Overthinking",
        "Slower external progress",
        "Excessive doubt",
      ],
    },

    8: {
      title: "Personal Year 8",
      theme: "Achievement & Material Results",
      description:
        "Personal Year 8 emphasizes achievement, business, finances, authority and the practical results of previous efforts.",
      strengths: [
        "Business opportunities",
        "Leadership",
        "Financial awareness",
        "Achievement",
      ],
      challenges: [
        "Work pressure",
        "Power struggles",
        "Financial mistakes",
        "Excessive material focus",
      ],
    },

    9: {
      title: "Personal Year 9",
      theme: "Completion & Release",
      description:
        "Personal Year 9 completes the nine-year cycle. It emphasizes endings, completion, emotional release and preparing space for a new cycle.",
      strengths: ["Completion", "Compassion", "Closure", "Broad perspective"],
      challenges: [
        "Difficulty letting go",
        "Emotional endings",
        "Uncertainty about the future",
        "Holding onto completed situations",
      ],
    },
  },

  getPersonalYearInterpretation(number) {
    const value = Number(number);
    return this.personalYear[value] || null;
  },

  getPersonalYearResult(personalYearData) {
    if (!personalYearData || typeof personalYearData !== "object") {
      return null;
    }

    const number = Number(personalYearData.reduction.final);

    const interpretation = this.getPersonalYearInterpretation(number);

    if (!interpretation) {
      return null;
    }

    return {
      number,
      title: interpretation.title,
      theme: interpretation.theme,
      description: interpretation.description,
      strengths: interpretation.strengths,
      challenges: interpretation.challenges,
    };
  },
  // =====================================
  // 20. Personal Month Number
  // Pythagorean / Modern Numerology
  // 1-9
  // =====================================

  personalMonth: {
    1: {
      title: "Personal Month 1",
      theme: "Initiative & New Action",
      description:
        "Personal Month 1 brings a short-term emphasis on initiative, independence and beginning new activities. It is a good period for taking the lead and creating momentum.",
      strengths: [
        "Initiative",
        "Leadership",
        "Fresh starts",
        "Decisive action",
      ],
      challenges: [
        "Impatience",
        "Acting too quickly",
        "Ego conflicts",
        "Difficulty accepting support",
      ],
    },

    2: {
      title: "Personal Month 2",
      theme: "Patience & Cooperation",
      description:
        "Personal Month 2 emphasizes relationships, cooperation, patience and attention to details. Progress may be gradual and requires diplomacy.",
      strengths: [
        "Cooperation",
        "Diplomacy",
        "Patience",
        "Relationship awareness",
      ],
      challenges: [
        "Over-sensitivity",
        "Indecision",
        "Slow progress",
        "Dependence on others",
      ],
    },

    3: {
      title: "Personal Month 3",
      theme: "Creativity & Communication",
      description:
        "Personal Month 3 emphasizes expression, communication, creativity and social activity. It can be a lively period for sharing ideas and connecting with others.",
      strengths: [
        "Creativity",
        "Communication",
        "Optimism",
        "Social opportunities",
      ],
      challenges: [
        "Scattered focus",
        "Overspending",
        "Lack of discipline",
        "Difficulty completing tasks",
      ],
    },

    4: {
      title: "Personal Month 4",
      theme: "Work & Organization",
      description:
        "Personal Month 4 emphasizes structure, discipline, practical work and organization. Progress comes through consistency and attention to responsibilities.",
      strengths: [
        "Discipline",
        "Organization",
        "Practical progress",
        "Persistence",
      ],
      challenges: [
        "Heavy workload",
        "Restrictions",
        "Rigidity",
        "Frustration with slow results",
      ],
    },

    5: {
      title: "Personal Month 5",
      theme: "Change & Movement",
      description:
        "Personal Month 5 brings movement, variety, change and opportunities for different experiences. Flexibility and adaptability become important.",
      strengths: [
        "Adaptability",
        "New opportunities",
        "Versatility",
        "Movement",
      ],
      challenges: [
        "Restlessness",
        "Impulsiveness",
        "Instability",
        "Difficulty maintaining focus",
      ],
    },

    6: {
      title: "Personal Month 6",
      theme: "Relationships & Responsibility",
      description:
        "Personal Month 6 emphasizes family, responsibility, commitments, care and relationship matters. Attention may shift toward supporting others and maintaining harmony.",
      strengths: [
        "Responsibility",
        "Care",
        "Commitment",
        "Relationship development",
      ],
      challenges: [
        "Over-responsibility",
        "Family pressure",
        "Perfectionism",
        "Difficulty setting boundaries",
      ],
    },

    7: {
      title: "Personal Month 7",
      theme: "Reflection & Analysis",
      description:
        "Personal Month 7 emphasizes introspection, research, analysis and inner development. It is better suited to reflection and understanding than constant external activity.",
      strengths: ["Analysis", "Research", "Intuition", "Self-awareness"],
      challenges: [
        "Isolation",
        "Overthinking",
        "Slower external progress",
        "Excessive doubt",
      ],
    },

    8: {
      title: "Personal Month 8",
      theme: "Results & Achievement",
      description:
        "Personal Month 8 emphasizes business, finances, authority, achievement and practical results. It can bring opportunities to deal with important material matters.",
      strengths: [
        "Business focus",
        "Leadership",
        "Financial awareness",
        "Achievement",
      ],
      challenges: [
        "Work pressure",
        "Power struggles",
        "Financial mistakes",
        "Excessive material focus",
      ],
    },

    9: {
      title: "Personal Month 9",
      theme: "Completion & Release",
      description:
        "Personal Month 9 emphasizes completion, endings, emotional release and clearing unfinished matters before moving into a new monthly cycle.",
      strengths: ["Completion", "Compassion", "Closure", "Broad perspective"],
      challenges: [
        "Difficulty letting go",
        "Emotional endings",
        "Holding onto completed situations",
        "Uncertainty about what comes next",
      ],
    },
  },

  getPersonalMonthInterpretation(number) {
    const value = Number(number);
    return this.personalMonth[value] || null;
  },

  getPersonalMonthResult(personalMonthData) {
    if (!personalMonthData || typeof personalMonthData !== "object") {
      return null;
    }

    const number = Number(personalMonthData.reduction.final);

    const interpretation = this.getPersonalMonthInterpretation(number);

    if (!interpretation) {
      return null;
    }

    return {
      number,
      title: interpretation.title,
      theme: interpretation.theme,
      description: interpretation.description,
      strengths: interpretation.strengths,
      challenges: interpretation.challenges,
    };
  },
  // =====================================
  // 21. Personal Day Number
  // Pythagorean / Modern Numerology
  // 1-9
  // =====================================

  personalDay: {
    1: {
      title: "Personal Day 1",
      theme: "Initiative & Fresh Action",
      description:
        "Personal Day 1 favors initiative, independence and taking the first step. It can be a useful day for starting something, making decisions and acting with confidence.",
      strengths: [
        "Initiative",
        "Leadership",
        "Decisiveness",
        "Independent action",
      ],
      challenges: [
        "Impatience",
        "Acting too quickly",
        "Ego conflicts",
        "Ignoring advice",
      ],
    },

    2: {
      title: "Personal Day 2",
      theme: "Patience & Cooperation",
      description:
        "Personal Day 2 emphasizes cooperation, relationships, sensitivity and patience. It is better suited to coordination and diplomacy than forceful action.",
      strengths: [
        "Diplomacy",
        "Cooperation",
        "Patience",
        "Relationship awareness",
      ],
      challenges: [
        "Over-sensitivity",
        "Indecision",
        "Slow progress",
        "Dependence on others",
      ],
    },

    3: {
      title: "Personal Day 3",
      theme: "Expression & Creativity",
      description:
        "Personal Day 3 supports communication, creativity, social interaction and self-expression. It can be a lively day for sharing ideas and connecting with others.",
      strengths: ["Creativity", "Communication", "Optimism", "Social energy"],
      challenges: [
        "Scattered focus",
        "Talking more than acting",
        "Lack of discipline",
        "Emotional inconsistency",
      ],
    },

    4: {
      title: "Personal Day 4",
      theme: "Work & Practical Focus",
      description:
        "Personal Day 4 emphasizes discipline, routine, organization and practical responsibilities. It is useful for structured work and completing necessary tasks.",
      strengths: [
        "Discipline",
        "Organization",
        "Practical thinking",
        "Persistence",
      ],
      challenges: [
        "Rigidity",
        "Heavy workload",
        "Frustration",
        "Resistance to change",
      ],
    },

    5: {
      title: "Personal Day 5",
      theme: "Change & Movement",
      description:
        "Personal Day 5 brings variety, movement, change and flexibility. It can support travel, new experiences and adapting quickly to changing situations.",
      strengths: ["Adaptability", "Versatility", "Curiosity", "Quick thinking"],
      challenges: [
        "Restlessness",
        "Impulsiveness",
        "Distraction",
        "Lack of consistency",
      ],
    },

    6: {
      title: "Personal Day 6",
      theme: "Responsibility & Relationships",
      description:
        "Personal Day 6 emphasizes family, relationships, care, responsibility and harmony. Attention may naturally shift toward helping others or handling personal commitments.",
      strengths: ["Responsibility", "Care", "Commitment", "Supportiveness"],
      challenges: [
        "Over-responsibility",
        "Family pressure",
        "Perfectionism",
        "Difficulty setting boundaries",
      ],
    },

    7: {
      title: "Personal Day 7",
      theme: "Reflection & Analysis",
      description:
        "Personal Day 7 favors introspection, study, research and deeper thinking. It is often better suited to analysis and reflection than constant external activity.",
      strengths: ["Analysis", "Research", "Intuition", "Observation"],
      challenges: [
        "Overthinking",
        "Isolation",
        "Excessive doubt",
        "Slow outward progress",
      ],
    },

    8: {
      title: "Personal Day 8",
      theme: "Results & Practical Achievement",
      description:
        "Personal Day 8 emphasizes business, finances, authority and practical results. It can be a useful day for handling important material or professional matters.",
      strengths: [
        "Business focus",
        "Leadership",
        "Financial awareness",
        "Decision-making",
      ],
      challenges: [
        "Pressure",
        "Power struggles",
        "Financial mistakes",
        "Excessive control",
      ],
    },

    9: {
      title: "Personal Day 9",
      theme: "Completion & Release",
      description:
        "Personal Day 9 emphasizes completion, closure, compassion and letting go. It is useful for finishing matters and clearing space before a new short-term cycle begins.",
      strengths: ["Completion", "Compassion", "Closure", "Broad perspective"],
      challenges: [
        "Emotional intensity",
        "Difficulty letting go",
        "Over-sacrifice",
        "Holding onto completed situations",
      ],
    },
  },

  getPersonalDayInterpretation(number) {
    const value = Number(number);
    return this.personalDay[value] || null;
  },

  getPersonalDayResult(personalDayData) {
    if (!personalDayData || typeof personalDayData !== "object") {
      return null;
    }

    const number = Number(personalDayData.reduction.final);

    const interpretation = this.getPersonalDayInterpretation(number);

    if (!interpretation) {
      return null;
    }

    return {
      number,
      title: interpretation.title,
      theme: interpretation.theme,
      description: interpretation.description,
      strengths: interpretation.strengths,
      challenges: interpretation.challenges,
    };
  },
  // =====================================
  // 22. Universal Year Number
  // Modern / Pythagorean Numerology
  // 1-9
  // =====================================

  universalYear: {
    1: {
      title: "Universal Year 1",
      theme: "Global Beginnings & Initiative",
      description:
        "Universal Year 1 represents a collective period of new beginnings, initiative, independence and the start of a new nine-year cycle.",
      strengths: [
        "Innovation",
        "New beginnings",
        "Leadership",
        "Independent action",
      ],
      challenges: [
        "Impatience",
        "Conflict over control",
        "Rushed decisions",
        "Excessive individualism",
      ],
    },

    2: {
      title: "Universal Year 2",
      theme: "Cooperation & Diplomacy",
      description:
        "Universal Year 2 emphasizes cooperation, diplomacy, partnerships, patience and sensitivity in collective developments.",
      strengths: ["Diplomacy", "Partnership", "Patience", "Collaboration"],
      challenges: [
        "Indecision",
        "Over-sensitivity",
        "Slow progress",
        "Dependence",
      ],
    },

    3: {
      title: "Universal Year 3",
      theme: "Expression & Creativity",
      description:
        "Universal Year 3 emphasizes communication, creativity, social expression, media and the wider sharing of ideas.",
      strengths: [
        "Creativity",
        "Communication",
        "Optimism",
        "Social development",
      ],
      challenges: [
        "Scattered attention",
        "Superficiality",
        "Excess",
        "Lack of discipline",
      ],
    },

    4: {
      title: "Universal Year 4",
      theme: "Structure & Foundation",
      description:
        "Universal Year 4 emphasizes work, organization, discipline, systems and building stronger collective foundations.",
      strengths: [
        "Organization",
        "Discipline",
        "Practical development",
        "Stability",
      ],
      challenges: [
        "Restrictions",
        "Rigidity",
        "Heavy responsibilities",
        "Slow progress",
      ],
    },

    5: {
      title: "Universal Year 5",
      theme: "Change & Freedom",
      description:
        "Universal Year 5 emphasizes change, movement, freedom, experimentation and rapid shifts in collective conditions.",
      strengths: [
        "Adaptability",
        "Innovation",
        "Movement",
        "New opportunities",
      ],
      challenges: [
        "Instability",
        "Impulsiveness",
        "Restlessness",
        "Unpredictability",
      ],
    },

    6: {
      title: "Universal Year 6",
      theme: "Responsibility & Community",
      description:
        "Universal Year 6 emphasizes responsibility, family, community, service, care and efforts to create greater harmony.",
      strengths: ["Responsibility", "Community support", "Care", "Cooperation"],
      challenges: [
        "Over-responsibility",
        "Social pressure",
        "Perfectionism",
        "Conflict over obligations",
      ],
    },

    7: {
      title: "Universal Year 7",
      theme: "Analysis & Reflection",
      description:
        "Universal Year 7 emphasizes analysis, research, introspection, knowledge and deeper examination of collective issues.",
      strengths: ["Research", "Analysis", "Knowledge", "Reflection"],
      challenges: [
        "Isolation",
        "Excessive skepticism",
        "Slow outward progress",
        "Over-analysis",
      ],
    },

    8: {
      title: "Universal Year 8",
      theme: "Power & Material Results",
      description:
        "Universal Year 8 emphasizes finance, business, authority, material results and the consequences of previous collective decisions.",
      strengths: [
        "Achievement",
        "Business development",
        "Leadership",
        "Financial focus",
      ],
      challenges: [
        "Power struggles",
        "Economic pressure",
        "Materialism",
        "Control issues",
      ],
    },

    9: {
      title: "Universal Year 9",
      theme: "Completion & Transition",
      description:
        "Universal Year 9 represents completion of the collective nine-year cycle, emphasizing endings, release, humanitarian concerns and preparation for a new cycle.",
      strengths: ["Completion", "Compassion", "Global awareness", "Transition"],
      challenges: [
        "Difficulty letting go",
        "Collective uncertainty",
        "Emotional intensity",
        "Resistance to endings",
      ],
    },
  },

  getUniversalYearInterpretation(number) {
    const value = Number(number);
    return this.universalYear[value] || null;
  },

  getUniversalYearResult(universalYearData) {
    if (!universalYearData || typeof universalYearData !== "object") {
      return null;
    }

    const number = Number(universalYearData.reduction.final);

    const interpretation = this.getUniversalYearInterpretation(number);

    if (!interpretation) {
      return null;
    }

    return {
      number,
      title: interpretation.title,
      theme: interpretation.theme,
      description: interpretation.description,
      strengths: interpretation.strengths,
      challenges: interpretation.challenges,
    };
  },
  // =====================================
  // 23. Universal Month Number
  // Modern / Pythagorean Numerology
  // 1-9
  // =====================================

  universalMonth: {
    1: {
      title: "Universal Month 1",
      theme: "Collective Initiative & New Movement",
      description:
        "Universal Month 1 emphasizes new activity, initiative, independence and the beginning of fresh collective developments.",
      strengths: ["Initiative", "Innovation", "Leadership", "Fresh momentum"],
      challenges: [
        "Impatience",
        "Rushed decisions",
        "Conflict over control",
        "Excessive individualism",
      ],
    },

    2: {
      title: "Universal Month 2",
      theme: "Cooperation & Diplomacy",
      description:
        "Universal Month 2 emphasizes cooperation, diplomacy, partnerships, patience and greater sensitivity in collective situations.",
      strengths: ["Diplomacy", "Partnership", "Patience", "Collaboration"],
      challenges: [
        "Indecision",
        "Over-sensitivity",
        "Slow progress",
        "Dependence",
      ],
    },

    3: {
      title: "Universal Month 3",
      theme: "Communication & Creativity",
      description:
        "Universal Month 3 emphasizes communication, creativity, social activity, media and the exchange of ideas.",
      strengths: [
        "Creativity",
        "Communication",
        "Optimism",
        "Social connection",
      ],
      challenges: [
        "Scattered attention",
        "Superficiality",
        "Excess",
        "Lack of discipline",
      ],
    },

    4: {
      title: "Universal Month 4",
      theme: "Structure & Practical Development",
      description:
        "Universal Month 4 emphasizes work, organization, systems, discipline and practical collective responsibilities.",
      strengths: [
        "Organization",
        "Discipline",
        "Stability",
        "Practical progress",
      ],
      challenges: [
        "Restrictions",
        "Rigidity",
        "Heavy responsibilities",
        "Slow movement",
      ],
    },

    5: {
      title: "Universal Month 5",
      theme: "Change & Movement",
      description:
        "Universal Month 5 brings change, movement, variety and greater unpredictability in collective conditions.",
      strengths: [
        "Adaptability",
        "Innovation",
        "Movement",
        "New opportunities",
      ],
      challenges: [
        "Instability",
        "Impulsiveness",
        "Restlessness",
        "Unpredictability",
      ],
    },

    6: {
      title: "Universal Month 6",
      theme: "Community & Responsibility",
      description:
        "Universal Month 6 emphasizes responsibility, community, family, service and the need to create greater harmony.",
      strengths: ["Responsibility", "Community support", "Care", "Cooperation"],
      challenges: [
        "Over-responsibility",
        "Social pressure",
        "Perfectionism",
        "Conflict over obligations",
      ],
    },

    7: {
      title: "Universal Month 7",
      theme: "Analysis & Reflection",
      description:
        "Universal Month 7 emphasizes research, analysis, introspection, knowledge and deeper examination of current collective issues.",
      strengths: ["Research", "Analysis", "Knowledge", "Reflection"],
      challenges: [
        "Isolation",
        "Over-analysis",
        "Slow outward progress",
        "Excessive skepticism",
      ],
    },

    8: {
      title: "Universal Month 8",
      theme: "Power & Material Results",
      description:
        "Universal Month 8 emphasizes business, finance, authority, achievement and practical collective results.",
      strengths: [
        "Achievement",
        "Business focus",
        "Leadership",
        "Financial awareness",
      ],
      challenges: [
        "Power struggles",
        "Economic pressure",
        "Materialism",
        "Control issues",
      ],
    },

    9: {
      title: "Universal Month 9",
      theme: "Completion & Transition",
      description:
        "Universal Month 9 emphasizes completion, release, humanitarian concerns and clearing collective matters before a new monthly cycle begins.",
      strengths: ["Completion", "Compassion", "Closure", "Broad awareness"],
      challenges: [
        "Difficulty letting go",
        "Emotional intensity",
        "Uncertainty",
        "Resistance to endings",
      ],
    },
  },

  getUniversalMonthInterpretation(number) {
    const value = Number(number);
    return this.universalMonth[value] || null;
  },

  getUniversalMonthResult(universalMonthData) {
    if (!universalMonthData || typeof universalMonthData !== "object") {
      return null;
    }

    const number = Number(universalMonthData.reduction.final);

    const interpretation = this.getUniversalMonthInterpretation(number);

    if (!interpretation) {
      return null;
    }

    return {
      number,
      title: interpretation.title,
      theme: interpretation.theme,
      description: interpretation.description,
      strengths: interpretation.strengths,
      challenges: interpretation.challenges,
    };
  },
  // =====================================
  // 24. Universal Day Number
  // Modern / Pythagorean Numerology
  // 1-9
  // =====================================

  universalDay: {
    1: {
      title: "Universal Day 1",
      theme: "Initiative & New Momentum",
      description:
        "Universal Day 1 emphasizes initiative, independence and fresh collective movement. It can favor beginnings, decisions and forward action.",
      strengths: ["Initiative", "Leadership", "Decisiveness", "Fresh momentum"],
      challenges: [
        "Impatience",
        "Rushed decisions",
        "Ego conflicts",
        "Excessive individualism",
      ],
    },

    2: {
      title: "Universal Day 2",
      theme: "Cooperation & Sensitivity",
      description:
        "Universal Day 2 emphasizes cooperation, patience, diplomacy and greater sensitivity in collective interactions.",
      strengths: ["Diplomacy", "Cooperation", "Patience", "Partnership"],
      challenges: [
        "Indecision",
        "Over-sensitivity",
        "Slow progress",
        "Dependence",
      ],
    },

    3: {
      title: "Universal Day 3",
      theme: "Communication & Expression",
      description:
        "Universal Day 3 emphasizes communication, creativity, social interaction and the wider exchange of ideas.",
      strengths: [
        "Creativity",
        "Communication",
        "Optimism",
        "Social connection",
      ],
      challenges: [
        "Scattered attention",
        "Superficiality",
        "Excess",
        "Lack of focus",
      ],
    },

    4: {
      title: "Universal Day 4",
      theme: "Structure & Practical Work",
      description:
        "Universal Day 4 emphasizes organization, discipline, practical responsibilities and maintaining stable structures.",
      strengths: [
        "Organization",
        "Discipline",
        "Stability",
        "Practical progress",
      ],
      challenges: [
        "Restrictions",
        "Rigidity",
        "Heavy responsibilities",
        "Frustration",
      ],
    },

    5: {
      title: "Universal Day 5",
      theme: "Change & Movement",
      description:
        "Universal Day 5 emphasizes movement, variety, flexibility and rapidly changing collective conditions.",
      strengths: [
        "Adaptability",
        "Movement",
        "Versatility",
        "New opportunities",
      ],
      challenges: [
        "Instability",
        "Impulsiveness",
        "Restlessness",
        "Unpredictability",
      ],
    },

    6: {
      title: "Universal Day 6",
      theme: "Responsibility & Community",
      description:
        "Universal Day 6 emphasizes responsibility, community, family concerns, care and maintaining harmony.",
      strengths: ["Responsibility", "Care", "Community support", "Cooperation"],
      challenges: [
        "Over-responsibility",
        "Pressure from obligations",
        "Perfectionism",
        "Interference",
      ],
    },

    7: {
      title: "Universal Day 7",
      theme: "Reflection & Analysis",
      description:
        "Universal Day 7 emphasizes analysis, research, reflection and deeper examination of events and collective conditions.",
      strengths: ["Analysis", "Research", "Observation", "Reflection"],
      challenges: [
        "Overthinking",
        "Isolation",
        "Excessive skepticism",
        "Slow outward progress",
      ],
    },

    8: {
      title: "Universal Day 8",
      theme: "Achievement & Material Focus",
      description:
        "Universal Day 8 emphasizes finance, business, authority, practical decisions and visible material results.",
      strengths: [
        "Achievement",
        "Business focus",
        "Leadership",
        "Financial awareness",
      ],
      challenges: [
        "Power struggles",
        "Financial pressure",
        "Materialism",
        "Control issues",
      ],
    },

    9: {
      title: "Universal Day 9",
      theme: "Completion & Release",
      description:
        "Universal Day 9 emphasizes completion, closure, compassion and releasing matters that have reached the end of their current cycle.",
      strengths: ["Completion", "Compassion", "Closure", "Broad awareness"],
      challenges: [
        "Difficulty letting go",
        "Emotional intensity",
        "Resistance to endings",
        "Over-sacrifice",
      ],
    },
  },

  getUniversalDayInterpretation(number) {
    const value = Number(number);
    return this.universalDay[value] || null;
  },

  getUniversalDayResult(universalDayData) {
    if (!universalDayData || typeof universalDayData !== "object") {
      return null;
    }

    const number = Number(universalDayData.reduction.final);

    const interpretation = this.getUniversalDayInterpretation(number);

    if (!interpretation) {
      return null;
    }

    return {
      number,
      title: interpretation.title,
      theme: interpretation.theme,
      description: interpretation.description,
      strengths: interpretation.strengths,
      challenges: interpretation.challenges,
    };
  },
};
