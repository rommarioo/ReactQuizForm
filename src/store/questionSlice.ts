import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface QuestionState {
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  currentAnswer: string;
}

const initialState: QuestionState = {
  step1: "",
  step2: "",
  step3: "",
  step4: "",
  currentAnswer: "",
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setStep1: (state, action: PayloadAction<string>) => {
      state.step1 = action.payload;
    },
    setStep2: (state, action: PayloadAction<string>) => {
      state.step2 = action.payload;
    },
    setStep3: (state, action: PayloadAction<string>) => {
      state.step3 = action.payload;
    },
    setStep4: (state, action: PayloadAction<string>) => {
      state.step4 = action.payload;
    },
    setAnswer: (state, action: PayloadAction<string>) => {
      state.currentAnswer = action.payload;
    },
  },
});

export const { setStep1, setStep2, setStep3, setStep4, setAnswer } =
  questionSlice.actions;

export default questionSlice.reducer;
