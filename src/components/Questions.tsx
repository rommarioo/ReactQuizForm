import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hook/redux";
import { setStep } from "../store/questionSlice";

type Questions = {
  question: string;
  choise: string[];
};

interface IPropsQuestions {
  questions: Questions;
  nextStep: string;
}

const Questions: React.FC<IPropsQuestions> = ({ questions, nextStep }) => {
  const [result, setResult] = useState("");
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const state = useAppSelector((state) => state.question);
  const dispatch = useAppDispatch();

  const handleNext = () => {
    dispatch(setStep(result));
    navigate(`/${nextStep}`);
    console.log(state);
  };

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setResult(e.currentTarget.textContent!);
    setDisabled(false);
  };
  return (
    <div className="steps">
      <h2>{questions.question}</h2>
      <div className="steps__content">
        <div className="steps__content-question">
          <ul className="steps__list">
            {questions.choise.map((item) => (
              <li
                onClick={handleClick}
                className={`steps__item ${result === item && "active"}`}
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <button
          className={`steps__button ${disabled && "disabled"}`}
          onClick={handleNext}
          disabled={disabled}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Questions;
