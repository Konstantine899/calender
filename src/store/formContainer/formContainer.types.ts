import { FormContainerData } from "../../types/common.types";

export type FormContainerState = FormContainerData;

export enum FORM_CONTAINER {
  SET_Q1 = "FORM_CONTAINER.SET_Q1",
  SET_Q2 = "FORM_CONTAINER.SET_Q2",

  SUBMIT_FORM = "FORM_CONTAINER.SUBMIT_FORM",
  CLEAR_FORM = "FORM_CONTAINER.CLEAR_FORM",
}

export type FormContainerAction =
  | {
      type: FORM_CONTAINER.SET_Q1;
      payload: { Q1: string };
    }
  | {
      type: FORM_CONTAINER.SET_Q2;
      payload: { Q2: string };
    }
  | {
      type: FORM_CONTAINER.SUBMIT_FORM;
      payload: {};
    }
  | {
      type: FORM_CONTAINER.CLEAR_FORM;
      payload: {};
    };
