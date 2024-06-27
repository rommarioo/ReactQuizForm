import { useNavigate } from "react-router-dom";
import { quizData } from "../../data";

import Header from "../Header";
import Questions from "../Questions";
import { useAppDispatch, useAppSelector } from "../../store/hook/redux";
import { setAnswer, setStep1 } from "../../store/questionSlice";

const Step1 = () => {
  const { questions } = quizData;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.question);
  const { currentAnswer } = useAppSelector((state) => state.question);
  const handleNext = () => {
    dispatch(setStep1(currentAnswer));
    dispatch(setAnswer(""));
    navigate(`/step2`);

    console.log(state);
  };
  return (
    <>
      <Header />
      <Questions questions={questions[0]} handleNext={handleNext} />
    </>
  );
};

export default Step1;
