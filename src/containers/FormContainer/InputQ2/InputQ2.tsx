import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import { EventOnChange } from "../../../types/common.types";
import { useDispatch, useSelector } from "react-redux";
import { setQ2Action } from "../../../store/formContainer/formContainer.actions";
import { RootState } from "../../../store/root.reducer";

export const InputQ2 = () => {
  const dispatch = useDispatch();
  const formContainer = useSelector((state: RootState) => state.formContainer);

  useEffect(() => setState(() => formContainer.Q2), [formContainer]);

  const [value, setState] = useState(formContainer.Q2);

  const onChange = ({ target }: EventOnChange) => {
    const value = target.value.trimLeft();

    setState(() => {
      dispatch(setQ2Action(value));
      return value;
    });
  };

  return (
    <TextField
      multiline
      fullWidth
      size="small"
      type="text"
      label="Q2"
      placeholder="Введите значение Q2"
      variant="outlined"
      value={value}
      onChange={onChange}
    />
  );
};
