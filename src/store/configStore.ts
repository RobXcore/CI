import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "@redux";

export function configStore(initialState = {}, context = {}) {
  /* ------------- Assemble Store ------------- */
  const store: any = configureStore({
    reducer: rootReducer(),
    preloadedState: initialState
  });

  return { store };
}
