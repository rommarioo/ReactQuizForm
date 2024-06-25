import { quizData } from "../../data";
import Header from "../Header";
import Questions from "../Questions";

const Step2 = () => {
  const { questions } = quizData;

  return (
    <>
      <Header />
      <Questions questions={questions[1]} nextStep={"step3"} />
    </>
  );
};

export default Step2;
