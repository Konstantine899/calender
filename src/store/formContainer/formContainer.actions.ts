import { FORM_CONTAINER } from "./FormContainer.types";

export const setQ1Action = (valueInput: string) => ({
  payload: valueInput,
  type: FORM_CONTAINER.SET_Q1,
});

export const setQ2Action = (valueInput: string) => ({
  payload: valueInput,
  type: FORM_CONTAINER.SET_Q2,
});
