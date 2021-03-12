import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export const InputQ1 = () => {
  // const dispatch = useDispatch();

  const [valueState, setState] = useState(1110);

  const changeValue = ({ target }: any) => {
    const value = target.value;

    setState(value);
  };

  return (
    <TextField
      multiline
      fullWidth
      size="small"
      type="text"
      label="Q1"
      variant="outlined"
      value={valueState}
      onChange={changeValue}
    />
  );
};
