import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import { EventOnChange } from "../../../types/common.types";
import { useDispatch, useSelector } from "react-redux";
import { setQ1Action } from "../../../store/formContainer/formContainer.actions";
import { RootState } from "../../../store/root.reducer";

export const InputQ1 = () => {
  const dispatch = useDispatch();
  const formContainer = useSelector((state: RootState) => state.formContainer);

  useEffect(() => setState(() => formContainer.Q1), [formContainer]);

  const [value, setState] = useState(formContainer.Q1);

  const onChange = ({ target }: EventOnChange) => {
    const value = target.value.trimLeft();

    setState(() => {
      dispatch(setQ1Action(value));
      return value;
    });
  };

  return (
    <TextField
      multiline
      fullWidth
      size="small"
      type="text"
      label="Q1"
      placeholder="Введите значение Q1"
      variant="outlined"
      value={value}
      onChange={onChange}
    />
  );
};
