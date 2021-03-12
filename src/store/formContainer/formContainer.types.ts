export interface FormContainerState {
  Q1: string;
  Q2: string;
  T1: string;
  T2: string;
  V1: string;
  V2: string;
  M1: string;
  M2: string;
  work_device: string;
  work_device_error: string;
  exampleFormControlTextarea1: string;
}

export enum FORM_CONTAINER {
  SET_Q1 = "FORM_CONTAINER.SET_Q1",
  SET_Q2 = "FORM_CONTAINER.SET_Q2",
  // допиши руками
}

export type FormContainerAction =
  | {
      type: FORM_CONTAINER.SET_Q1;
      payload: string;
    }
  | {
      type: FORM_CONTAINER.SET_Q2;
      payload: string;
    };
// попиши руками
