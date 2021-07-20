const theQuiz = {
  id: "some_id",
  name: "oceanography",
  questionList: [
    {
      question: "question1",
      answers: [
        {
          title: "q1 answer1",
          isCorrect: { type: Boolean, required: true },
        },
        {
          title: "q1 answer2",
          isCorrect: { type: Boolean, required: false },
        },
      ],
    },
    {
      question: "question2",
      answers: [
        {
          title: "q2 answer1",
          isCorrect: { type: Boolean, required: true },
        },
        {
          title: "q2 answer2",
          isCorrect: { type: Boolean, required: false },
        },
      ],
    },
  ],
};

const theUpdatedQuiz = {
  id: "some_id",
  name: "oceanography",
  questionList: [
    {
      question: "question1",
      answers: [
        {
          title: "q1 answer1",
          isCorrect: { type: Boolean, required: true },
        },
        {
          title: "q1 answer2",
          isCorrect: { type: Boolean, required: false },
        },
      ],
    },
    {
      question: "question2",
      answers: [
        {
          title: "q2 answer1 UPDATED",
          isCorrect: { type: Boolean, required: true },
        },
        {
          title: "q2 answer2",
          isCorrect: { type: Boolean, required: false },
        },
      ],
    },
  ],
};

const updateQuizAnswers = (theQuiz, updatedAnswerTitle = "q2 answer1 UPDATED", questionIndex, answerIndex) => {
  theQuiz.questionList[questionIndex].answers[answerIndex].title = updatedAnswerTitle
return theQuiz;

}
const updatedAnswer = updateQuizAnswers (theQuiz, "q2 answer1 UPDATED", 0, 0)
 console.log( JSON.stringify(updatedAnswer, null, 2))
 console.log(theQuiz)

// const updateQuizQuestion = (theQuiz, newQuestionTitle, questionIndex) => {
//   theQuiz.questionList[questionIndex].question = newQuestionTitle;
//   return theQuiz;
// };

// const updatedQuiz = updateQuizQuestion(theQuiz, "betterrer question le", 1);

// console.log(updatedQuiz);
// console.log(theQuiz);

// const arrarararay = [1, 2, 3, 4, 5];

// arrarararay[3] = 100;

// console.log(arrarararay);
// // [1, 2, 3, 100, 5]

// const barararara = [
//   { question: "one" },
//   { question: "two" },
//   { question: "treeee" },
//   { question: "fwaor" },
// ];

// barararara[2]= {question: "james is the best"}

// console.log(barararara);

// // [
// //   { question: "one" },
// //   { question: "two" },
// //   { question: "james is the best" },
// //   { question: "fwaor" },
// // ];
