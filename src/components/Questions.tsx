import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook/redux";
import { setAnswer } from "../store/questionSlice";
import { useLocation, useNavigate } from "react-router-dom";

type Questions = {
  question: string;
  choise: string[];
};

interface IPropsQuestions {
  questions: Questions;
  handleNext: () => void;
}

const Questions: React.FC<IPropsQuestions> = ({ questions, handleNext }) => {
  const dispatch = useAppDispatch();
  const [disabled, setDisabled] = useState(true);
  const { currentAnswer } = useAppSelector((state) => state.question);
  const navigateBack = useNavigate();
  const location = useLocation();
  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    dispatch(setAnswer(e.currentTarget.textContent!));
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
                className={`steps__item ${currentAnswer === item && "active"}`}
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="steps__button-countainer">
          <button
            className={`steps__button ${disabled && "disabled"}`}
            onClick={handleNext}
            disabled={disabled}
          >
            Next
          </button>

          <button
            className={`steps__button ${
              location.pathname === "/" ? "disabled" : ""
            }`}
            onClick={() => navigateBack(-1)}
            disabled={location.pathname === "/" ? true : false}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
