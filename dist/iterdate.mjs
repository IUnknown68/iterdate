const noDate = [0, 0, 1, 0, 0, 0, 0];
function date2Array(date, precision = 7) {
  const ar = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  ];
  return [
    ...ar.slice(0, precision),
    ...noDate.slice(precision)
  ];
}
function makeYmdHmsDate(date) {
  return new Date(...date2Array(date, 6));
}
function makeYmdHmDate(date) {
  return new Date(...date2Array(date, 5));
}
function makeYmdHDate(date) {
  return new Date(...date2Array(date, 4));
}
function makeYmdDate(date) {
  return new Date(...date2Array(date, 3));
}
function makeYmDate(date) {
  return new Date(...date2Array(date, 2));
}
function makeYDate(date) {
  return new Date(...date2Array(date, 1));
}
function seconds(dtStart, dtEnd, step = 1) {
  if (step < 1) {
    throw new RangeError("Step must be >= 1");
  }
  const start = makeYmdHmsDate(dtStart);
  const end = makeYmdHmsDate(dtEnd);
  return {
    [Symbol.iterator]: () => mkIterator(start, end, (dt) => {
      dt.setSeconds(dt.getSeconds() + step);
    })
  };
}
function minutes(dtStart, dtEnd, step = 1) {
  if (step < 1) {
    throw new RangeError("Step must be >= 1");
  }
  const start = makeYmdHmDate(dtStart);
  const end = makeYmdHmDate(dtEnd);
  return {
    [Symbol.iterator]: () => mkIterator(start, end, (dt) => {
      dt.setMinutes(dt.getMinutes() + step);
    })
  };
}
function hours(dtStart, dtEnd, step = 1) {
  if (step < 1) {
    throw new RangeError("Step must be >= 1");
  }
  const start = makeYmdHDate(dtStart);
  const end = makeYmdHDate(dtEnd);
  return {
    [Symbol.iterator]: () => mkIterator(start, end, (dt) => {
      dt.setHours(dt.getHours() + step);
    })
  };
}
function days(dtStart, dtEnd, step = 1) {
  if (step < 1) {
    throw new RangeError("Step must be >= 1");
  }
  const start = makeYmdDate(dtStart);
  const end = makeYmdDate(dtEnd);
  return {
    [Symbol.iterator]: () => mkIterator(start, end, (dt) => {
      dt.setDate(dt.getDate() + step);
    })
  };
}
function months(dtStart, dtEnd, step = 1) {
  if (step < 1) {
    throw new RangeError("Step must be >= 1");
  }
  const start = makeYmDate(dtStart);
  const end = makeYmDate(dtEnd);
  return {
    [Symbol.iterator]: () => mkIterator(start, end, (dt) => {
      dt.setMonth(dt.getMonth() + step);
    })
  };
}
function years(dtStart, dtEnd, step = 1) {
  if (step < 1) {
    throw new RangeError("Step must be >= 1");
  }
  const start = makeYDate(dtStart);
  const end = makeYDate(dtEnd);
  return {
    [Symbol.iterator]: () => mkIterator(start, end, (dt) => {
      dt.setFullYear(dt.getFullYear() + step);
    })
  };
}
function mkIterator(start, end, increment) {
  const dt = new Date(start);
  return {
    next() {
      if (dt.valueOf() >= end.valueOf()) {
        return {
          done: true
        };
      }
      const value = new Date(dt);
      increment(dt);
      return {
        value,
        done: false
      };
    }
  };
}

export { date2Array, days, hours, makeYDate, makeYmDate, makeYmdDate, makeYmdHDate, makeYmdHmDate, makeYmdHmsDate, minutes, months, seconds, years };
//# sourceMappingURL=iterdate.mjs.map
