import {
  FormContainerState,
  FormContainerAction,
  FORM_CONTAINER,
} from "./formContainer.types";

export const formContainerState: FormContainerState = {
  Q1: "",
  Q2: "",
  T1: "",
  T2: "",
  V1: "",
  V2: "",
  M1: "",
  M2: "",
  workDevice: "",
  workDeviceError: "",
  exampleFormControlTextarea1: "",
};

export const formContainerReducer = (
  state = formContainerState,
  { type, payload }: FormContainerAction
): FormContainerState => {
  switch (type) {
    case FORM_CONTAINER.SET_Q1: {
      return { ...state, ...payload };
    }

    case FORM_CONTAINER.SET_Q2: {
      return { ...state, ...payload };
    }

    case FORM_CONTAINER.CLEAR_FORM: {
      return { ...formContainerState };
    }

    default:
      return state;
  }
};
