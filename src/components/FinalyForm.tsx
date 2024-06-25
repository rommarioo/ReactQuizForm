import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Dialog from "./Dialog";

interface IPersonData {
  Name: string;
  Phone: string;
  Email: string;
  agreement: boolean;
}
interface IPropsFinalyForm {
  nextStep: string;
}

const FinalyForm: React.FC<IPropsFinalyForm> = ({ nextStep }) => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<IPersonData>({
    mode: "all",
  });
  const navigate = useNavigate();

  const onSubmit = async (personData: IPersonData) => {
    reset();
    navigate(`/${nextStep}`);
  };

  const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const formattedValue = value
      .replace(/\D/g, "")
      .replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "+$1 ($2) $3 $4-$5");
    event.target.value = formattedValue;
  };
  return (
    <div className="finaly">
      <div className="finaly__content ">
        <form className="finaly__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="finaly__form-content">
            <label htmlFor="Name">
              Name*
              <input
                id="Name"
                type="text"
                {...register("Name", {
                  required: "This field is required",
                  minLength: {
                    value: 2,
                    message: "The name is too short",
                  },
                  maxLength: {
                    value: 20,
                    message: "The name is too long",
                  },
                  pattern: {
                    value:
                      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                    message: "Incorrect name",
                  },
                })}
                placeholder="Ivan Ivanov"
              />
            </label>
            {errors.Name && (
              <span className="error">{errors?.Name?.message || "Error"}</span>
            )}
            <label htmlFor="Phone">
              Phone*
              <input
                id="Phone"
                type="text"
                onInput={handlePhoneInput}
                {...register("Phone", {
                  required: "This field is required",
                  minLength: {
                    value: 10,
                    message: "The number is too short",
                  },
                  maxLength: {
                    value: 18,
                    message: "The number is too long",
                  },
                })}
                placeholder="+7 (999) 999-99-99"
                maxLength={18}
              />
            </label>
            {errors.Phone && (
              <span className="error">{errors?.Phone?.message || "Error"}</span>
            )}
            <label htmlFor="Email">
              E-mail*
              <input
                id="Email"
                type="text"
                placeholder="example@example.com"
                {...register("Email", {
                  required: "This field is required",

                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Incorrect E-mail",
                  },
                })}
              />
            </label>
            {errors.Email && (
              <span className="error">{errors?.Email?.message || "Error"}</span>
            )}
            <label htmlFor="agreement" className="agreement">
              <input
                type="checkbox"
                id="agreement"
                {...register("agreement", {
                  required: "Agreement must be accepted",
                })}
              />
              Consent to the processing of&nbsp;
              <span
                className="agreement__dialog"
                onClick={() => setIsOpenDialog(true)}
              >
                personal data
              </span>
              *
            </label>
            {errors.agreement && (
              <span className="error">
                {errors?.agreement?.message || "Error"}
              </span>
            )}
          </div>
        </form>

        <button
          className={`finaly__form-button ${!isValid && "disabled"}`}
          type="submit"
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid}
        >
          Submit
        </button>
        {isOpenDialog && <Dialog setIsOpenDialog={setIsOpenDialog} />}
      </div>
    </div>
  );
};

export default FinalyForm;
