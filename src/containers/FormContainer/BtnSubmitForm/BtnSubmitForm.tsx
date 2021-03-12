import React from "react";
import { Button } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { submitFormThunk } from "../../../store/formContainer/formContainer.actions";

export const BtnSubmitForm = () => {
  const dispatch = useDispatch();

  const btnClickHandler = () => {
    dispatch(submitFormThunk());
  };

  return (
    <Button variant="contained" color="primary" onClick={btnClickHandler}>
      BtnSubmitForm
    </Button>
  );
};
