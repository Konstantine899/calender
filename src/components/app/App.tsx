import React from "react";
import { Provider } from "react-redux";

import moment from "moment";
import styled from "styled-components";

import Header from "../Calendar/Header";
import Monitor from "../Calendar/Monitor";
import CalendarGrid from "../Calendar/CalendarGrid";
import thunk from "redux-thunk";

import "./App.scss";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../../store/root.reducer";
import FormContainer from "../../containers/FormContainer";
import { composeWithDevTools } from "redux-devtools-extension";

const FormCalendarWrapper = styled("div")``;
const ShadowWrapper = styled("div")``;
const BootstrapContainer = styled("div")``;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const App = () => {
  moment.updateLocale("ru", { week: { dow: 1 } });

  const [today, setToday] = React.useState(moment());
  const startDay = today.clone().startOf("month").startOf("week");

  window.moment = moment;

  const prevHandler = () => {
    setToday((prev) => prev.clone().subtract(1, "month"));
  };
  const todayHandler = () => {
    setToday(moment());
  };
  const nextHandler = () => {
    setToday((prev) => prev.clone().add(1, "month"));
  };

  return (
    <Provider store={store}>
      <BootstrapContainer className="container">
        <FormCalendarWrapper className="FormCalendarWrapper">
          <ShadowWrapper className="ShadowWrapper">
            <Header />
            <Monitor
              today={today}
              prevHandler={prevHandler}
              todayHandler={todayHandler}
              nextHandler={nextHandler}
            />
            <CalendarGrid startDay={startDay} today={today} />
          </ShadowWrapper>
        </FormCalendarWrapper>
        <FormContainer />
      </BootstrapContainer>
    </Provider>
  );
};
