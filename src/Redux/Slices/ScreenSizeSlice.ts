import { createSlice } from "@reduxjs/toolkit";

const screenSize: number = 0;

export const screenSizeSlice = createSlice({
  name: "screenSize",
  initialState: {
    value: screenSize,
  },
  reducers: {
    setScreenSize: (
      state,
      action: {
        payload: number;
        type: string;
      }
    ) => {
      state.value = action.payload;
    },
  },
});

export const { setScreenSize } = screenSizeSlice.actions;
export default screenSizeSlice.reducer;
