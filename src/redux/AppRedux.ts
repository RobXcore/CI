import { createSelector, createSlice } from "@reduxjs/toolkit";

export interface AppState {
  isReady: boolean;
}

const initialState: AppState = {
  isReady: false
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsReady: (state) => {
      state.isReady = true;
    }
  }
});

export const AppActions = AppSlice.actions;
export const AppReducer = AppSlice.reducer;

const selectSelfState = (state: any): AppState => state.app;
export const selectApp = createSelector(selectSelfState, (state) => state);
