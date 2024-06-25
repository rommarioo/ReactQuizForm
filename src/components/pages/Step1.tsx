import { quizData } from "../../data";

import Header from "../Header";
import Questions from "../Questions";

const Step1 = () => {
  const { questions } = quizData;

  return (
    <>
      <Header />
      <Questions questions={questions[0]} nextStep={"step2"} />
    </>
  );
};

export default Step1;
