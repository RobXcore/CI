import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ListState {
  items: any[];
}

const initialState: ListState = {
  items: []
};

export const ListSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    updateList: (state, { payload }: PayloadAction<any>) => {
      state.items = payload;
    }
  }
});

export const ListActions = ListSlice.actions;
export const ListReducer = ListSlice.reducer;

const selectSelfState = (state: any): ListState => state.list;
export const selectListItems = createSelector(
  selectSelfState,
  (state) => state.items
);
