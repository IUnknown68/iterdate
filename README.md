# iterdate

Iterators for time ranges to iterate in steps of years, months, days, hours, minutes, or
seconds.

### `years(start, end, step = 1)`

Use to iterate between `start` and `end` in steps of `step` years. `start` and
`end` must be `Date`s. `step` must be >= 1 and defaults to 1.

Iterators are available for `years`, `months`, `days`, `hours`, `minutes`
and `seconds`.

##### Example:

```js
import {
  days,
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

### `makeYmdHmsDate(date)`

In addition to the iterators, `make...` functions are exported that return a date
used by the iterators to generate start and end dates. These set the other values
(e.g. hours, minutes, seconds and milliseconds in case of `makeYmdDate()`) to
0 (or 1 for day of month). See [`date2Array()`](#date2arraydate-precision--7-partial--false).

##### Example:

```js
import {
  makeYmDate,
} from './dist/iterdate.mjs';

// makeYmDate: Keep only year and month. Set everything else to start
// of June 2023.
const d = makeYmDate(new Date('2023-06-10T04:01:51.167Z'));
console.log(d.toLocaleString('en-US'));

// Output:
// 6/1/2023, 12:00:00 AM
```

The following functions are available: `makeYmdHmsDate`, `makeYmdHmDate`,
`makeYmdHDate`, `makeYmdDate`, `makeYmDate`, `makeYDate`.

### `date2Array(date, precision = 7, partial = false)`

Finally, `date2Array(date, precision, partial)` is exported. It's what is behind
everything else, and converts a `Date` into an `Array`. It uses only the first
`precision` values from the date, so for `precision = 3` it uses year, month and
day, while setting hours, minutes, seconds and milliseconds to 0.

Since the day of a month is 1-based, it obviously sets it to 1 instead of 0.

##### Example:

```js
import {
  date2Array,
} from './dist/iterdate.mjs';

const d = new Date('2023-06-10T04:01:51.167Z');
let ar = date2Array(d);
console.log(ar);
// Output (UTC+2):
// [2023, 5, 10, 6, 1, 51, 167]

// When `partial` is true, return only the first `precision` values:
ar = date2Array(d, 3, true);
console.log(ar);
// Output (UTC+2):
// [2023, 5, 10]
```

