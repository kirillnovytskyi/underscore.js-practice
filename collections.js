// #1 Each (forEach)

const each = (list, iteratee, context) => {
  if (context) iteratee = iteratee.bind(context);

  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      iteratee(list[i], i, list);
    }
  } else {
    for (let key in list) {
      if (list.hasOwnProperty(key)) {
        iteratee(list[key], key, list);
      }
    }
  }
  return list;
};

// #2 map

const map = (list, callback, context) => {
  if (context) callback = callback.bind(context);

  const result = [];

  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      result.push(callback(list[i], i, list));
    }
  } else {
    for (let key in list) {
      if (list.hasOwnProperty(key)) {
        result.push(callback(list[key], key, list));
      }
    }
  }

  return result;
};

// #3 reduce

const reduce = (list, callback, memo, context) => {
  if (context) callback = callback.bind(context);

  let idx = memo === void 0 ? 1 : 0;
  memo = memo === void 0 ? list[0] : memo;

  for (idx; idx < list.length; idx++) {
    memo = callback(memo, list[idx], idx, list);
  }

  return memo;
};

// #4 reduceRight

const reduceRight = (list, callback, memo, context) => {
  if (context) callback = callback.bind(context);

  let idx = memo === void 0 ? list.length - 2 : list.length - 1;
  memo = memo === void 0 ? list[list.length - 1] : memo;

  for (idx; idx >= 0; idx--) {
    memo = callback(memo, list[idx], idx, list);
  }

  return memo;
};

// #5 find

const find = (list, predicate, context) => {
  if (context) predicate = predicate.bind(context);

  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) return list[i];
  }
  return void 0;
};

// #6 filter

const filter = (list, predicate, context) => {
  if (context) predicate = predicate.bind(context);

  const result = [];

  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) result.push(list[i]);
  }
  return result;
};

// #7 where

const where = (list, properties) => {
  let result = [];

  for (let value of Object.values(list)) {
    let temp = { ...value, ...properties };
    if (JSON.stringify(temp) === JSON.stringify(value)) result.push(value);
  }

  return result;
};

// #8 findWhere

const findWhere = (list, properties) => {
  for (let value of Object.values(list)) {
    let temp = { ...value, ...properties };
    if (JSON.stringify(temp) === JSON.stringify(value)) return value;
  }

  return undefined;
};

// #9 reject

const reject = (list, predicate, context) => {
  if (context) predicate = predicate.bind(context);

  const result = [];

  for (let i = 0; i < list.length; i++) {
    if (!predicate(list[i])) result.push(list[i]);
  }
  return result;
};

// #10 every

const every = (list, predicate, context) => {
  if (context) predicate = predicate.bind(context);

  for (let i = 0; i < list.length; i++) {
    if (!predicate(list[i])) return false;
  }
  return true;
};

// #11 some

const some = (list, predicate, context) => {
  if (context) predicate = predicate.bind(context);

  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) return true;
  }
  return false;
};

// #12 contains

const contains = (list, value, fromIndex = 0) => {
  if (Array.isArray(list)) {
    for (let idx = fromIndex; idx < list.length; idx++) {
      if (list[idx] === value) return true;
    }
  } else {
    list = Object.values(list);

    for (let idx = fromIndex; idx < list.length; idx++) {
      if (list[idx] === value) return true;
    }
  }

  return false;
};

// #13 pluck

const pluck = (list, propertyName) => {
  const result = [];

  for (let i = 0; i < list.length; i++) {
    result.push(list[i][propertyName]);
  }

  return result;
};

// #14 shuffle

const shuffle = list => {
  for (let i = list.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
};

// #15 sample

const sample = (list, n = 1) => {
  const result = [];

  for (let i = 0; i < n; i++) {
    let j = Math.floor(Math.random() * (list.length - 1 + 1));
    result.push(list[j]);
    list.splice(j, 1);
  }

  return result;
};

// #16 toArray

const toArray = list => Object.values(list);

// #17 size

const size = list => {
  if (Array.isArray(list)) {
    return list.length;
  } else {
    return Object.values(list).length;
  }
};
// #18 partition

const partition = (array, predicate) => {
  let passed = [];
  let failed = [];

  for (let i = 0; i < array.length; i++) {
    predicate(array[i]) ? passed.push(array[i]) : failed.push(array[i]);
  }

  return [passed, failed];
};

// #19 max

const max = (list, iteratee, context) => {
  if (list.length === 0) return -Infinity;
  if (context) iteratee = iteratee.bind(context);

  if (iteratee) {
    const criteria = [];

    for (let i = 0; i < list.length; i++) {
      const criterion = iteratee(list[i]);
      if (typeof criterion === 'number') criteria.push(criterion);
    }

    const maxCriterion = Math.max(...criteria);

    const maxElement = criteria.indexOf(maxCriterion);

    return list[maxElement];
  }

  list = list.filter(el => typeof el === 'number');

  return Math.max(...list);
};

// #20 min

const min = (list, iteratee, context) => {
  if (list.length === 0) return Infinity;
  if (context) iteratee = iteratee.bind(context);

  if (iteratee) {
    const criteria = [];

    for (let i = 0; i < list.length; i++) {
      const criterion = iteratee(list[i]);
      if (typeof criterion === 'number') criteria.push(criterion);
    }

    const minCriterion = Math.min(...criteria);

    const minElement = criteria.indexOf(minCriterion);

    return list[minElement];
  }

  list = list.filter(el => typeof el === 'number');

  return Math.min(...list);
};

// # 21 sortBy

const sortBy = (list, iteratee, context) => {
  if (context) iteratee = iteratee.bind(context);

  if (typeof iteratee === 'string') {
    list.sort((a, b) => {
      const iterateeA = a[iteratee];
      const iterateeB = b[iteratee];

      if (typeof iterateeA === 'string' && typeof iterateeB === 'string') {
        if (iterateeA > iterateeB) {
          return 1;
        }
        if (iterateeA < iterateeB) {
          return -1;
        }

        return 0;
      } else {
        return iterateeA - iterateeB;
      }
    });
  } else {
    list.sort((a, b) => {
      const iterateeA = iteratee(a);
      const iterateeB = iteratee(b);

      if (typeof iterateeA === 'string' && typeof iterateeB === 'string') {
        if (iterateeA > iterateeB) {
          return 1;
        }
        if (iterateeA < iterateeB) {
          return -1;
        }

        return 0;
      } else {
        return iterateeA - iterateeB;
      }
    });
  }

  return list;
};

// #22 groupBy

const groupBy = (list, iteratee, context) => {
  if (context) iteratee = iteratee.bind(context);
  const groups = {};

  if (typeof iteratee === 'string') {
    for (let i = 0; i < list.length; i++) {
      groups[list[i][iteratee]]
        ? groups[list[i][iteratee]].push(list[i])
        : (groups[list[i][iteratee]] = [list[i]]);
    }
  } else {
    for (let i = 0; i < list.length; i++) {
      groups[iteratee(list[i])]
        ? groups[iteratee(list[i])].push(list[i])
        : (groups[iteratee(list[i])] = [list[i]]);
    }
  }

  return groups;
};

// #23 indexBy

const indexBy = (list, iteratee, context) => {
  if (context) iteratee = iteratee.bind(context);

  const groups = {};

  if (typeof iteratee === 'string') {
    for (let i = 0; i < list.length; i++) {
      groups[list[i][iteratee]] = list[i];
    }
  } else {
    for (let i = 0; i < list.length; i++) {
      groups[iteratee(list[i])] = list[i];
    }
  }

  return groups;
};

// #24 countBy

const countBy = (list, iteratee, context) => {
  if (context) iteratee = iteratee.bind(context);
  const groups = {};

  if (typeof iteratee === 'string') {
    for (let i = 0; i < list.length; i++) {
      groups[list[i][iteratee]]
        ? groups[list[i][iteratee]]++
        : (groups[list[i][iteratee]] = 1);
    }
  } else {
    for (let i = 0; i < list.length; i++) {
      groups[iteratee(list[i])]
        ? groups[iteratee(list[i])]++
        : (groups[iteratee(list[i])] = 1);
    }
  }

  return groups;
};
