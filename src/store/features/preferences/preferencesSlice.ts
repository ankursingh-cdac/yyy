import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PreferencesState {
  currency: "USD" | "INR";
  preferredProgramCategory: "all" | "ttc" | "retreat";
}

const initialState: PreferencesState = {
  currency: "USD",
  preferredProgramCategory: "all",
};

export const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<"USD" | "INR">) => {
      state.currency = action.payload;
    },
    setPreferredCategory: (
      state,
      action: PayloadAction<"all" | "ttc" | "retreat">
    ) => {
      state.preferredProgramCategory = action.payload;
    },
  },
});

export const { setCurrency, setPreferredCategory } = preferencesSlice.actions;

export default preferencesSlice.reducer;
