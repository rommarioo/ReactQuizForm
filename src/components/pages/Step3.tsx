import { useNavigate } from "react-router-dom";
import { quizData } from "../../data";
import Header from "../Header";
import Questions from "../Questions";
import { useAppDispatch, useAppSelector } from "../../store/hook/redux";
import { setAnswer, setStep3 } from "../../store/questionSlice";
const Step3 = () => {
  const { questions } = quizData;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.question);
  const { currentAnswer } = useAppSelector((state) => state.question);
  const handleNext = () => {
    dispatch(setStep3(currentAnswer));
    dispatch(setAnswer(""));
    navigate(`/step4`);
    console.log(state);
  };

  return (
    <>
      <Header />
      <Questions questions={questions[2]} handleNext={handleNext} />
    </>
  );
};

export default Step3;
