import { combineReducers } from "redux";
import { formContainerReducer } from "./formContainer/formContainer.reducer";

export const rootReducer = combineReducers({
  formContainer: formContainerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
