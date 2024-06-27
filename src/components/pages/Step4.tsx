import { useNavigate } from "react-router-dom";
import { quizData } from "../../data";

import Header from "../Header";
import Questions from "../Questions";
import { useAppDispatch, useAppSelector } from "../../store/hook/redux";
import { setAnswer, setStep4 } from "../../store/questionSlice";

const Step4 = () => {
  const { questions } = quizData;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.question);
  const { currentAnswer } = useAppSelector((state) => state.question);
  const handleNext = () => {
    dispatch(setStep4(currentAnswer));
    dispatch(setAnswer(""));
    navigate(`/finaly`);
    console.log(state);
  };

  return (
    <>
      <Header />
      <Questions questions={questions[3]} handleNext={handleNext} />
    </>
  );
};

export default Step4;
