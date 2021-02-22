//components/CalendarGrid/CalendarGrid.js
import React from 'react';

import './CalendarGrid.scss';

const CalendarGrid = ({ startDay }) => {
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());
  // window.daysArray = daysArray;
  console.log(daysArray);

  return (
    <div className="GridWrapper">
      {daysArray.map((dayItem) => {
        return (
          <div
            className="CellWrapper"
            key={dayItem.format('DDMMYY')}
            isWeekday={dayItem.day === 6 || dayItem.day === 0}
          >
            <div className="indexItem">
              <div className="RowInCell">
                <div className="DayWrapper">{dayItem.format('D')}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CalendarGrid;
