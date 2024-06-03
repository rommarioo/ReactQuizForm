import { useContext, useState } from "react";
import { quizData } from "../../data";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../DataContext";
import Header from "../Header";

const Step4 = () => {
  const { questions } = quizData;
  const [result, setResult] = useState("");
  const navigate = useNavigate();
  const { setValues } = useContext(DataContext);
  const [disabled, setDisabled] = useState(true);

  const handleNext = () => {
    setValues({ step4: result });
    navigate("/finaly");
  };

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setResult(e.currentTarget.textContent!);
    setDisabled(false);
  };
  return (
    <>
      <Header />
      <div className="steps">
        <h2>{questions[3].question}</h2>
        <div className="steps__content">
          <div className="steps__content-question">
            <ul className="steps__list">
              {questions[3].choise.map((item) => (
                <li
                  className={`steps__item ${result === item && "active"}`}
                  key={item}
                  onClick={handleClick}
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
    </>
  );
};

export default Step4;
