# Декомпозиция

1. **Header**, **title** или что-то в этом роде. Имеет в себе переключатель День, Неделя, Месяц, год. Поиск.
2. Придумай название компонента. Имеет в зависимости от того что выбрано в **header** переключатель между месяц, год и т.д. С левой стороны отображение выбранного месяца и года.
3. Сетка календаря

Создаю компоненты **CalendarGrid**, **Header**, **Monitor**, **App**.

Разбивка на компоненты.

<br>
<br>
<hr>

Компонент **CalendarGrid**

```jsx
import React from 'react';
import './CalendarGrid.scss';

const CalendarGrid = () => {
  return <div>CalendarGrid</div>;
};

export default CalendarGrid;
```

```jsx
import CalendarGrid from './CalendarGrid';

export default CalendarGrid;
```

<br>
<br>
<hr>

Компонент **Header**

```jsx
import React from 'react';
import './Header.scss';

const Header = () => {
  return <div>Header</div>;
};

export default Header;
```

```jsx
import Header from './Header';

export default Header;
```

<br>
<br>
<hr>

Компонент **Monitor**

```jsx
import React from 'react';
import './Monitor.scss';

const Monitor = () => {
  return <div>Monitor</div>;
};

export default Monitor;
```

```jsx
import Monitor from './Monitor';

export default Monitor;
```

<br>
<br>
<hr>

Компонент **App**

```js
import React from 'react';

import moment from 'moment';

import Header from '../Header';
import Monitor from '../Monitor';
import CalendarGrid from '../CalendarGrid';

import './App.scss';

// console.log(moment());

window.moment = moment; // запихиваю библиотеку в глабольный объект

moment.updateLocale('ru', { week: { down: 1 } });
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
      <Header />
      <Monitor />
      <CalendarGrid />
    </div>
  );
};

export default App;
```

<br>
<br>
<hr>

**entry.point index.js**

```jsx
import App from './app';

export default App;
```

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/index';

ReactDOM.render(<App />, document.getElementById('root'));
```

<br>
<br>
<hr>

**Постановка задачи**.

Так же декомпозирую. Первая задача создать механику.

1. Календарь состоит из 6-ти недель. Это максимальное количество недель в месяце. Больше не бывает.
