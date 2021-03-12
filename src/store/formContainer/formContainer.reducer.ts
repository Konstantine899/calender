import {
  FormContainerAction,
  FormContainerState,
  FORM_CONTAINER,
} from "./FormContainer.types";

export const formContainerState: FormContainerState = {
  Q1: "",
  Q2: "",
  T1: "",
  T2: "",
  V1: "",
  V2: "",
  M1: "",
  M2: "",
  work_device: "",
  work_device_error: "",
  exampleFormControlTextarea1: "",
};

export const formContainerReducer = (
  state = formContainerState,
  { type, payload }: FormContainerAction
): FormContainerState => {
  let newState;

  switch (type) {
    case FORM_CONTAINER.SET_Q1: {
      newState = { ...state, Q1: payload };
      return newState;
    }

    case FORM_CONTAINER.SET_Q2: {
      newState = { ...state, Q2: payload };
      return newState;
    }

    default:
      return state;
  }
};
