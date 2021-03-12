import { Dispatch } from "redux";
import { RootState } from "../root.reducer";
import { FORM_CONTAINER } from "./formContainer.types";

export const setQ1Action = (valueInput: string) => ({
  payload: { Q1: valueInput },
  type: FORM_CONTAINER.SET_Q1,
});

export const setQ2Action = (valueInput: string) => ({
  payload: { Q2: valueInput },
  type: FORM_CONTAINER.SET_Q2,
});

export const clearFormAction = () => ({
  payload: {},
  type: FORM_CONTAINER.CLEAR_FORM,
});

export function submitFormThunk() {
  return async function (
    dispatch: Dispatch,
    getState: () => RootState
  ): Promise<void> {
    try {
      // тут отправка твоей формы. ф вынеси в Services
      // await logoutService();
      // await dispatch(authLogoutAction());
      // await dispatch(createNotifierAction("Вы вышли из системы", "info"));

      console.log("formContainer :>> ", getState().formContainer);
    } catch (error) {
      // dispatch(createNotifierAction(error.message, "warning"));
    }
  };
}
