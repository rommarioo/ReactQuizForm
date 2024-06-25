import { quizData } from "../../data";
import Header from "../Header";
import Questions from "../Questions";
const Step3 = () => {
  const { questions } = quizData;

  return (
    <>
      <Header />
      <Questions questions={questions[2]} nextStep={"step4"} />
    </>
  );
};

export default Step3;
