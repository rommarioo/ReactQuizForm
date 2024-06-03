export type Questions = {
  question: string;
  choise: string[];
};

export interface IQuizData {
  questions: Questions[];
}

export const quizData: IQuizData = {
  questions: [
    {
      question: "Question 1?",
      choise: ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5"],
    },
    {
      question: "Question 2?",
      choise: ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5"],
    },
    {
      question: "Question 3?",
      choise: ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5"],
    },
    {
      question: "Question 4?",
      choise: ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5"],
    },
  ],
};
