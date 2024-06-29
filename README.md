# iterdate

Iterates over a time range in steps of years, months, days, hours, minutes, or
seconds.

## `[years, months...](start, end, step = 1)`

##### Example:

```js
import {
  days
} from './dist/iterdate.mjs';

const startDate = new Date('2023-06-10T04:01:51.167Z');
const endDate = new Date('2023-06-13T04:01:51.167Z');

for (const value of days(startDate, endDate)) {
  console.log(value.toLocaleString('en-US'));
}

// Output:
// 6/10/2023, 12:00:00 AM
// 6/11/2023, 12:00:00 AM
// 6/12/2023, 12:00:00 AM
```

The returned date is set to the start of the respective interval, meaning for
`days()`, for example, the hour, minute, second, and millisecond are set to 0.

The iterator functions each accept an optional third parameter `step`, which
specifies the step size. Only integers >= 1 are allowed.

## `makeCCDate(date)`

In addition to the iterators, `make...` functions are exported that return a date
used by the iterators to generate start and end dates, setting milliseconds,
seconds, etc. to the beginning of the interval.

##### Example:

```js
import {
  makeYmDate
} from './dist/iterdate.mjs';

// makeYmDate: Keep only year and month. Set everything else to start
// of June 2023.
const d = makeYmDate(new Date('2023-06-10T04:01:51.167Z'));
console.log(d.toLocaleString('en-US'));

// Output:
// 6/1/2023, 12:00:00 AM
```

## `date2Array(date, precision = 7)`

Finally, `date2Array(date, precision)` is exported, which converts a `Date` into
an `Array`:

##### Example:

```js
import {
  date2Array
} from './dist/iterdate.mjs';

let ar = date2Array(new Date('2023-06-10T04:01:51.167Z'));
console.log(ar);
// Output:
// [2023, 5, 10, 6, 1, 51, 167]

ar = date2Array(new Date('2023-06-10T04:01:51.167Z'), 3);
console.log(ar);
// Output:
// [2023, 5, 10, 0, 0, 0, 0]
```

