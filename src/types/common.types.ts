export type EventOnChange = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

export interface FormContainerData {
  Q1: string;
  Q2: string;
  T1: string;
  T2: string;
  V1: string;
  V2: string;
  M1: string;
  M2: string;
  workDevice: string;
  workDeviceError: string;
  exampleFormControlTextarea1: string;
}
