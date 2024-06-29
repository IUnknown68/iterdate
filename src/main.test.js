/* eslint-disable no-unused-vars, no-empty */
import 'jest-extended';

import {
  date2Array,
  makeYmdHmsDate,
  makeYmdHmDate,
  makeYmdHDate,
  makeYmdDate,
  makeYmDate,
  makeYDate,
  seconds,
  minutes,
  hours,
  days,
  months,
  years,
} from './main.js';

describe('date2Array', () => {
  it('returns an array [y,m,d,h,m,s,ms]', () => {
    const d = new Date(2023, 9, 11, 4, 1, 51, 167);
    const result = date2Array(d);
    expect(result).toEqual([2023, 9, 11, 4, 1, 51, 167]);
  });
});

describe('make', () => {
  let testDate;

  beforeEach(() => {
    testDate = new Date(2023, 9, 11, 4, 1, 51, 167);
  });

  it('YmdHmsDate returns an array [y,m,d,h,m,s,0]', () => {
    const result = makeYmdHmsDate(testDate);
    expect(result.valueOf()).toEqual((new Date(2023, 9, 11, 4, 1, 51, 0)).valueOf());
  });

  it('YmdHmDate returns an array [y,m,d,h,m,0,0]', () => {
    const result = makeYmdHmDate(testDate);
    expect(result.valueOf()).toEqual((new Date(2023, 9, 11, 4, 1, 0, 0)).valueOf());
  });

  it('YmdHDate returns an array [y,m,d,h,0,0,0]', () => {
    const result = makeYmdHDate(testDate);
    expect(result.valueOf()).toEqual((new Date(2023, 9, 11, 4, 0, 0, 0)).valueOf());
  });

  it('YmdDate returns an array [y,m,d,0,0,0,0]', () => {
    const result = makeYmdDate(testDate);
    expect(result.valueOf()).toEqual((new Date(2023, 9, 11, 0, 0, 0, 0)).valueOf());
  });

  it('YmDate returns an array [y,m,1,0,0,0,0]', () => {
    const result = makeYmDate(testDate);
    expect(result.valueOf()).toEqual((new Date(2023, 9, 1, 0, 0, 0, 0)).valueOf());
  });

  it('YDate returns an array [y,0,1,0,0,0,0]', () => {
    const result = makeYDate(testDate);
    expect(result.valueOf()).toEqual((new Date(2023, 0, 1, 0, 0, 0, 0)).valueOf());
  });
});

describe('seconds', () => {
  it('iterates seconds', () => {
    let n = 0;
    for (const value of seconds(
      new Date('2023-11-10T04:01:51.167Z'),
      new Date('2023-11-10T04:02:51.167Z'),
    )) {
      ++n;
    }
    expect(n).toBe(60);
  });

  it('throws if step is < 1', () => {
    expect(() => {
      for (const value of seconds(
        new Date('2023-11-10T04:01:51.167Z'),
        new Date('2024-11-10T04:02:51.167Z'),
        0.5,
      )) {}
    }).toThrow();
  });
});

describe('minutes', () => {
  it('iterates minutes', () => {
    let n = 0;
    for (const value of minutes(
      new Date('2023-11-10T04:01:51.167Z'),
      new Date('2023-11-10T05:01:51.167Z'),
    )) {
      ++n;
    }
    expect(n).toBe(60);
  });

  it('throws if step is < 1', () => {
    expect(() => {
      for (const value of minutes(
        new Date('2023-11-10T04:01:51.167Z'),
        new Date('2024-11-10T04:02:51.167Z'),
        0.5,
      )) {}
    }).toThrow();
  });
});

describe('hours', () => {
  it('iterates hours', () => {
    let n = 0;
    for (const value of hours(
      new Date('2023-11-10T04:01:51.167Z'),
      new Date('2023-11-10T08:01:51.167Z'),
    )) {
      ++n;
    }
    expect(n).toBe(4);
  });

  it('throws if step is < 1', () => {
    expect(() => {
      for (const value of hours(
        new Date('2023-11-10T04:01:51.167Z'),
        new Date('2024-11-10T04:02:51.167Z'),
        0.5,
      )) {}
    }).toThrow();
  });
});

describe('days', () => {
  it('iterates days', () => {
    let n = 0;
    for (const value of days(
      new Date('2023-11-10T04:01:51.167Z'),
      new Date('2023-11-20T04:01:51.167Z'),
    )) {
      ++n;
    }
    expect(n).toBe(10);
  });

  it('throws if step is < 1', () => {
    expect(() => {
      for (const value of days(
        new Date('2023-11-10T04:01:51.167Z'),
        new Date('2024-11-10T04:02:51.167Z'),
        0.5,
      )) {}
    }).toThrow();
  });
});

describe('months', () => {
  it('iterates months', () => {
    let n = 0;
    for (const value of months(
      new Date('2023-11-10T04:01:51.167Z'),
      new Date('2024-11-10T04:01:51.167Z'),
    )) {
      ++n;
    }
    expect(n).toBe(12);
  });

  it('throws if step is < 1', () => {
    expect(() => {
      for (const value of months(
        new Date('2023-11-10T04:01:51.167Z'),
        new Date('2024-11-10T04:02:51.167Z'),
        0.5,
      )) {}
    }).toThrow();
  });
});

describe('years', () => {
  it('iterates years', () => {
    let n = 0;
    for (const value of years(
      new Date('2013-11-10T04:01:51.167Z'),
      new Date('2023-11-10T04:01:51.167Z'),
    )) {
      ++n;
    }
    expect(n).toBe(10);
  });

  it('throws if step is < 1', () => {
    expect(() => {
      for (const value of years(
        new Date('2023-11-10T04:01:51.167Z'),
        new Date('2024-11-10T04:02:51.167Z'),
        0.5,
      )) {}
    }).toThrow();
  });
});
