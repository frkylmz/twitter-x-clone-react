import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backgroundColor: {
    primary: "#000",
    secondary: "#16181c",
    third: "#273340",
  },
  color: {
    primary: "#1d9bf0",
    secondary: "#8ecdf8",
  },
  fontSize: 16,
};

const appearance = createSlice({
  name: "modappearanceal",
  initialState,
  reducers: {
    _setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
    _setColor: (state) => {
      state.color = false;
    },
    _setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
  },
});

export const { _setBackgroundColor, _setColor, _setFontSize } =
  appearance.actions;
export default appearance.reducer;
