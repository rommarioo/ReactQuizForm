import { useNavigate } from "react-router-dom";
import { quizData } from "../../data";
import { useAppDispatch, useAppSelector } from "../../store/hook/redux";
import { setAnswer, setStep2 } from "../../store/questionSlice";
import Header from "../Header";
import Questions from "../Questions";

const Step2 = () => {
  const { questions } = quizData;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.question);
  const { currentAnswer } = useAppSelector((state) => state.question);
  const handleNext = () => {
    dispatch(setStep2(currentAnswer));
    dispatch(setAnswer(""));
    navigate(`/step3`);
    console.log(state);
  };

  return (
    <>
      <Header />
      <Questions questions={questions[1]} handleNext={handleNext} />
    </>
  );
};

export default Step2;
