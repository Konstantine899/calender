import { useState } from "react";
import { EventOnChange } from "../types/common.types";

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: EventOnChange) => {
    setValue(e.target.value);
  };

  return { value, onChange };
};
