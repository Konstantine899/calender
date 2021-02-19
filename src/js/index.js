import React from 'react';
import ReactDOM from 'react-dom';

import moment from 'moment';

console.log(moment());

window.moment = moment; // запихиваю библиотеку в глабольный объект

moment.updateLocale('rus', { week: { down: 1 } });
const startDay = moment().startOf('month').startOf('week');
const endDay = moment().endOf('month').endOf('week');

// console.log(startDay.format('YYYY-MM-DD'));
// console.log(endDay.format('YYYY-MM-DD'));

window.startDay = startDay; //Это добавляю для удобства в консоли позже уберу
window.endDay = endDay; //

const calendar = [];
const day = startDay.clone();

window.day = day;

while (day.isSame(endDay)) {
  calendar.push(day);
  day.add(1, 'day');
}

const App = () => {
  return (
    <div>
      <p>Проверка перезагрузки</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
