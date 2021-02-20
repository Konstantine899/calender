import React from 'react';
import ReactDOM from 'react-dom';

import moment from 'moment';

// console.log(moment());

window.moment = moment; // запихиваю библиотеку в глабольный объект

moment.updateLocale('rus', { week: { down: 1 } });
const startDay = moment().startOf('month').startOf('week');
const endDay = moment().endOf('month').endOf('week');

const calendar = [];
const day = startDay.clone();

while (!day.isAfter(endDay)) {
  calendar.push(day.clone());
  day.add(1, 'day');
}
console.log(calendar);
window.startDay = startDay; //Это добавляю для удобства в консоли позже уберу
window.endDay = endDay; //
window.day = day;

const App = () => {
  return (
    <div>
      <p>Проверка перезагрузки</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
