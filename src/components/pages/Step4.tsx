import { quizData } from "../../data";

import Header from "../Header";
import Questions from "../Questions";

const Step4 = () => {
  const { questions } = quizData;

  return (
    <>
      <Header />
      <Questions questions={questions[3]} nextStep={"finaly"} />
    </>
  );
};

export default Step4;
