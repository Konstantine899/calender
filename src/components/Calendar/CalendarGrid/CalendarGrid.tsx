//components/CalendarGrid/CalendarGrid.js
import moment from "moment";
import React from "react";
import styled from "styled-components";
import "./CalendarGrid.scss";

const GridWrapper: any = styled.div`
  background-color: ${(props: any) => (props.isHeader ? "#1e1f21" : "#4d4c4d")};
  ${(props: any) => props.isHeader && "border-bottom: 1px solid #4d4c4d"}
`;

const CellWrapper: any = styled.div`
  background-color: ${(props: any) =>
    props.isWeekday ? "#27282A" : "#1E1F21"};
  min-height: ${(props: any) => (props.isHeader ? 24 : 80)}px;
  color: ${(props: any) => (props.isSelectedMonth ? "#DDDDDD" : "#555759")};
`;

const CurrentDay = styled("div")``;

const CalendarGrid = ({ startDay, today }: any) => {
  const day: any = startDay.clone().subtract(1, "day");
  const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());
  // window.daysArray = daysArray;
  // console.log(daysArray);

  const isCurrentDay = (day: any) => moment().isSame(day, "day");
  const isSelectedMonth = (day: any) => today.isSame(day, "month");

  return (
    <>
      <GridWrapper className="GridWrapper" isHeader>
        {[...Array(7)].map((_, i) => (
          <CellWrapper isHeader key={i}>
            <div className="RowInCell">
              <div className="DayColor">
                {moment()
                  .day(i + 1) // + 1 для понедельника
                  .format("dd")}
              </div>
            </div>
          </CellWrapper>
        ))}
      </GridWrapper>
      <GridWrapper className="GridWrapper">
        {daysArray.map((dayItem) => {
          return (
            <CellWrapper
              className="CellWrapper"
              key={dayItem.unix()}
              isWeekday={dayItem.day() === 6 || dayItem.day() === 0}
              isSelectedMonth={isSelectedMonth(dayItem)}
            >
              <div className="indexItem">
                <div className="RowInCell">
                  <div className="DayWrapper">
                    {!isCurrentDay(dayItem) && dayItem.format("D")}
                    {isCurrentDay(dayItem) && (
                      <CurrentDay className="CurrentDay">
                        {dayItem.format("D")}
                      </CurrentDay>
                    )}
                  </div>
                </div>
              </div>
            </CellWrapper>
          );
        })}
      </GridWrapper>
    </>
  );
};

export default CalendarGrid;
