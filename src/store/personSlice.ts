import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PersonState {
  name: string;
  phone: string;
  email: string;
}

const initialState: PersonState = {
  name: "",
  phone: "",
  email: "",
};

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    setPersonalData: (state, action: PayloadAction<PersonState>) => {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
    },
  },
});

export const { setPersonalData } = personSlice.actions;
export default personSlice.reducer;
