import { combineReducers } from "redux";
import { formContainerReducer } from "./formContainer/FormContainer.reducer";

export const rootReducer = combineReducers({
  formContainer: formContainerReducer,
  // другие стейты добавлять сюда
});

export type RootState = ReturnType<typeof rootReducer>;
