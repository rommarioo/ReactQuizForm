import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface QuestionState {
  quiz: string[];
}

const initialState: QuestionState = {
  quiz: [],
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  selectors: {
    selectAllQuestions: (state) => state,
  },
  reducers: {
    setStep: (state, action: PayloadAction<string>) => {
      if (state.quiz.length >= 4) return;
      state.quiz.push(action.payload);
      console.log(action);
    },
    setPersonalData: (state, action: PayloadAction<string>) => {},
  },
});

export const { setStep, setPersonalData } = questionSlice.actions;
export const { selectAllQuestions } = questionSlice.selectors;
export default questionSlice.reducer;
