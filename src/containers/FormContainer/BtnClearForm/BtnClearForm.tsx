import React from "react";
import { Button } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { clearFormAction } from "../../../store/formContainer/formContainer.actions";

export const BtnClearForm = () => {
  const dispatch = useDispatch();

  const btnClickHandler = () => dispatch(clearFormAction());
  return (
    <Button variant="contained" color="primary" onClick={btnClickHandler}>
      BtnClearForm
    </Button>
  );
};
