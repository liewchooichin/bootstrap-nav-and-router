export const quizData = [
  {
    id: 1,
    questionType: "single",
    questionText: "Most insects are ",
    hintText: "Most insects hunt for their food.",
    explanationText: `About one-third of all insect species are carnivorous, and most hunt for their food rather than eating decaying meat or dung.
    Source: 'https://www.si.edu/spotlight/buginfo/fun-facts-bugs'`,
    answers : [
      {
        id: 1,
        answerText: "omnivorous",
        correct: false,
      },
      {
        id: 2,
        answerText: "carnivorous",
        correct: true,
      },
      {
        id: 3,
        answerText: "herbivorous",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    questionType: "single",
    questionText: "The ticks grows to the size of a ",
    hintText: "When they are young, they are the size of a grain of _.",
    explanationText: `Ticks can grow from the size of a grain of rice to the size of a marble. Source: 'https://www.si.edu/spotlight/buginfo/fun-facts-bugs'`,
    answers : [
      {
        id: 1,
        answerText: "marble",
        correct: true,
      },
      {
        id: 2,
        answerText: "rice",
        correct: false,
      },
      {
        id: 3,
        answerText: "pollen",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    questionType: "single",
    questionText: "How many silkworms are needed to produce one pound (about 454 grams) of silk?",
    hintText: "Many silkworms.",
    explanationText: `Approximately 2,000 silkworm cocoons are needed to produce one pound of silk. Source: 'https://www.si.edu/spotlight/buginfo/fun-facts-bugs'`,
    answers : [
      {
        id: 1,
        answerText: "10,000",
        correct: false,
      },
      {
        id: 2,
        answerText: "7,500",
        correct: false,
      },
      {
        id: 3,
        answerText: "2,000",
        correct: true,
      },
    ],
  },
  {
    id: 4,
    questionType: "radio",
    questionText: "What were the first living creatures to be sent into space?",
    hintText: "Think small.",
    explanationText: `Fruit flies were the first living creatures to be sent into space. Source: 'https://www.natgeokids.com/uk/discover/animals/insects/15-facts-about-bugs/`,
    answers : [
      {
        id: 1,
        answerText: "Dog",
        correct: false,
      },
      {
        id: 2,
        answerText: "Fruit flies",
        correct: true,
      },
      {
        id: 3,
        answerText: "Bees",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    questionType: "radio",
    questionText: "Butterflies taste with their ",
    hintText: "You will not have thought of this.",
    explanationText: `Butterflies taste with their feet. Source: 'https://www.natgeokids.com/uk/discover/animals/insects/15-facts-about-bugs/'`,
    answers : [
      {
        id: 1,
        answerText: "feet",
        correct: true,
      },
      {
        id: 2,
        answerText: "antenna",
        correct: false,
      },
      {
        id: 3,
        answerText: "wings",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    questionType: "radio",
    questionText: "What is the favourite food of a hornet?",
    hintText: "Hornets like honey.",
    explanationText: ` A hornet’s favourite food is a…bee! Source: 'https://www.natgeokids.com/uk/discover/animals/insects/15-facts-about-bugs/'`,
    answers : [
      {
        id: 1,
        answerText: "moth",
        correct: false,
      },
      {
        id: 2,
        answerText: "bee",
        correct: true,
      },
      {
        id: 3,
        answerText: "flies",
        correct: false,
      },
    ],
  },
]

export const quizLength = quizData.length;