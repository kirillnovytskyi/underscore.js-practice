// #1 Each (forEach)

// const each = (list, iteratee) => {
//   if (Array.isArray(list)) {
//     for (let i = 0; i < list.length; i++) {
//       iteratee(list[i], i, list);
//     }
//   } else {
//     for (let key in list) {
//       if (list.hasOwnProperty(key)) {
//           iteratee(list[key], key, list);
//       }
//     }
//   }
//   return list;
// };

// const test = {
//   name: 'Kirill',
//   age: '17',
// };

// each({ a: 1, b: 2, c: 3 }, (value, key, obj) => {
//   console.log(`${key}: ${value}`);
// });

// each(
//   [1, 2, 3, 4, 5],
//   (el, idx, arr) => {
//     console.log(this);
//     console.log(`Index: ${idx}, element: ${el}`);
//   }
// );

// #2 map

// const map = (list, callback) => {
//   const result = [];

//   if (Array.isArray(list)) {
//     for (let i = 0; i < list.length; i++) {
//       result.push(callback(list[i], i, list));
//     }
//   } else {
//     for (let key in list) {
//       if (list.hasOwnProperty(key)) {
//         result.push(callback(list[key], key, list));
//       }
//     }
//   }

//   return result;
// };

// const newArr1 = map([1, 2, 3], (el, idx, arr) => el + idx);
// const newArr2 = map({ a: 1, b: 2, c: 3 }, (value, key, obj) => value * 3);
// console.log(newArr1);
// console.log(newArr2);

// #3 reduce

// const reduce = (list, callback, memo) => {
//   let idx = memo === void 0 ? 1 : 0;
//   memo = memo === void 0 ? list[0] : memo;

//   for (idx; idx < list.length; idx++) {
//     memo = callback(memo, list[idx], idx, list);
//   }

//   return memo;
// };

// const result = reduce([1, 2, 3], (acc, el) => acc + el, 1);
// console.log(result);

// #4 reduceRight

// const reduceRight = (list, callback, memo) => {
//   let idx = memo === void 0 ? list.length - 2 : list.length - 1;
//   memo = memo === void 0 ? list[list.length - 1] : memo;

//   for (idx; idx >= 0; idx--) {
//     memo = callback(memo, list[idx], idx, list);
//   }

//   return memo;
// };

// const result = reduceRight(
//   [
//     [0, 1],
//     [2, 3],
//     [4, 5],
//   ],
//   (acc, el) => acc.concat(el),
//   []
// );

// console.log(result);

// #5 find

// const find = (list, predicate) => {
//   for (let i = 0; i < list.length; i++) {
//     if (predicate(list[i])) return list[i];
//   }
//   return void 0;
// };

// let wantedElement = find([1, 2, 4], el => el === 3);
// console.log(wantedElement);

// #6 filter

// const filter = (list, predicate) => {
//   const result = [];

//   for (let i = 0; i < list.length; i++) {
//     if (predicate(list[i])) result.push(list[i]);
//   }
//   return result;
// };

// let filteredArray = filter([1, 2, 4], el => el > 1);
// console.log(filteredArray);

// #7 where

// const where = (list, properties) => {
//   let result = [];

//   for (let value of Object.values(list)) {
//     let temp = { ...value, ...properties };
//     if (JSON.stringify(temp) === JSON.stringify(value)) result.push(value);
//   }

//   return result;
// };

// const listOfPlays = {
//   0: { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
//   1: { title: 'sdfsdf', author: 'sfdfsdf', year: 123 },
//   2: { title: 'Some', author: 'Shakespeare', year: 1611 },
//   3: { title: 'sdfsdf', author: 'sdfsdf', year: 123123 },
//   4: { title: 'Cum', author: 'Shakespeare', year: 1611 },
// };

// const arr = where(listOfPlays, { author: 'Shakespeare', year: 1611 });
// console.log(arr);

// #8 findWhere

// const findWhere = (list, properties) => {
//   for (let value of Object.values(list)) {
//     let temp = { ...value, ...properties };
//     if (JSON.stringify(temp) === JSON.stringify(value)) return value;
//   }

//   return undefined;
// };

// const listOfPlays = {
//   0: { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
//   1: { title: 'sdfsdf', author: 'sfdfsdf', year: 123 },
//   2: { title: 'Some', author: 'Shakespeare', year: 1611 },
//   3: { title: 'sdfsdf', author: 'sdfsdf', year: 123123 },
//   4: { title: 'Cum', author: 'Shakespeare', year: 1611 },
// };

// const arr = findWhere(listOfPlays, { author: 'Shakespeare', year: 1611 });
// console.log(arr);

// #9 reject

// const reject = (list, predicate) => {
//   const result = [];

//   for (let i = 0; i < list.length; i++) {
//     if (!predicate(list[i])) result.push(list[i]);
//   }
//   return result;
// };

// const rejected = reject([1, 2, 3, 4], el => el % 2 === 0);
// console.log(rejected);

// #10 every

// const every = (list, predicate) => {
//   for (let i = 0; i < list.length; i++) {
//     if (!predicate(list[i])) return false;
//   }
//   return true;
// };

// const ev = every([2, 2, 6, 4], el => el % 2 === 0);
// console.log(ev);

// #11 some

// const some = (list, predicate = () => {}) => {
//   for (let i = 0; i < list.length; i++) {
//     if (predicate(list[i])) return true;
//   }
//   return false;
// };

// const sm = some([null, 0, 'yes', false], el => el === 0);
// console.log(sm);

// #12 contains

// const contains = (list, value, fromIndex = 0) => {
//   if (Array.isArray(list)) {
//     for (let idx = fromIndex; idx < list.length; idx++) {
//       if (list[idx] === value) return true;
//     }
//   } else {
//     list = Object.values(list);

//     for (let idx = fromIndex; idx < list.length; idx++) {
//       if (list[idx] === value) return true;
//     }
//   }

//   return false;
// };

// const elem1 = contains([1, 2, 3], 3, 1);
// const elem2 = contains({ a: 1, b: 2, c: 3 }, 3, 1);

// console.log(elem1);
// console.log(elem2);

// #13 pluck

// const pluck = (list, propertyName) => {
//   const result = [];

//   for (let i = 0; i < list.length; i++) {
//     result.push(list[i][propertyName]);
//   }

//   return result;
// };

// const toPluck = [
//   { name: 'moe', age: 40 },
//   { name: 'larry', age: 50 },
//   { name: 'curly', age: 60 },
// ];

// const plucked = pluck(toPluck, 'name');
// console.log(plucked);

// #14 max

// const max = (list, iteratee) => {
//   if (list.length === 0) return -Infinity;

//   if (!iteratee) {
//     list = list.filter(el => typeof el === 'number');
//     return Math.max(...list);
//   } else {
//     const arr = [];

//     for (let i = 0; i < list.length; i++) {
//       arr.push(iteratee(list[i]));
//     }

//     const filtered = arr.filter(el => typeof el === 'number');
//   }
// };

// const maxNum = max([1, 5, 3, 7, 8, 'k', 'j']);
// console.log(maxNum);
