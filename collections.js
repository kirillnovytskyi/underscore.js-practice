// #1 Each (forEach)

// const each = (list, iteratee, context) => {
//   if (context) iteratee = iteratee.bind(context);

//   if (Array.isArray(list)) {
//     for (let i = 0; i < list.length; i++) {
//       iteratee(list[i], i, list);
//     }
//   } else {
//     for (let key in list) {
//       if (list.hasOwnProperty(key)) {
//         iteratee(list[key], key, list);
//       }
//     }
//   }
//   return list;
// };

// const context = {
//   name: 'Kirill',
//   age: '17',
// };

// each({ a: 1, b: 2, c: 3 }, (value, key, obj) => {
//   console.log(`${key}: ${value}`);
// });

// each(
//   [1, 2, 3, 4, 5],
//   function callback(el, idx, arr) {
//     console.log('Context: ', this);
//     console.log(`Index: ${idx}, element: ${el}`);
//   },
//   context
// );

// #2 map

// const map = (list, callback, context) => {
// if (context) callback = callback.bind(context);

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
// const newArr3 = map(
//   [1, 2, 3],
//   function callback(el) {
//     return el * this.multiply;
//   },
//   { multiply: 2 }
// );
// console.log(newArr1);
// console.log(newArr2);
// console.log(newArr3);

// #3 reduce

// const reduce = (list, callback, memo, context) => {
// if (context) callback = callback.bind(context);

//   let idx = memo === void 0 ? 1 : 0;
//   memo = memo === void 0 ? list[0] : memo;

//   for (idx; idx < list.length; idx++) {
//     memo = callback(memo, list[idx], idx, list);
//   }

//   return memo;
// };

// const result1 = reduce([1, 2, 3], (acc, el) => acc + el, 0);
// const result2 = reduce(
//   [1, 2, 3],
//   function callback(acc, el) {
//     return acc + el + this.number;
//   },
//   0,
//   { number: 1 }
// );
// console.log(result1);
// console.log(result2);

// #4 reduceRight

// const reduceRight = (list, callback, memo, context) => {
// if (context) callback = callback.bind(context);

//   let idx = memo === void 0 ? list.length - 2 : list.length - 1;
//   memo = memo === void 0 ? list[list.length - 1] : memo;

//   for (idx; idx >= 0; idx--) {
//     memo = callback(memo, list[idx], idx, list);
//   }

//   return memo;
// };

// const result1 = reduceRight(
//   [
//     [0, 1],
//     [2, 3],
//     [4, 5],
//   ],
//   (acc, el) => acc.concat(el),
//   []
// );

// const result2 = reduceRight(
//   [1, 2, 3, 4, 5],
//   function callback(acc, el) {
//     return acc + el + this.number;
//   },
//   0,
//   {
//     number: 1,
//   }
// );

// console.log(result1);
// console.log(result2);

// #5 find

// const find = (list, predicate, context) => {
// if (context) predicate = predicate.bind(context);

//   for (let i = 0; i < list.length; i++) {
//     if (predicate(list[i])) return list[i];
//   }
//   return void 0;
// };

// let wantedElement1 = find([1, 2, 3], el => el === 3);
// let wantedElement2 = find(
//   [1, 2, 3],
//   function callback(el) {
//     return el === this.number;
//   },
//   { number: 3 }
// );
// console.log(wantedElement1);
// console.log(wantedElement2);

// #6 filter

// const filter = (list, predicate, context) => {
// if (context) predicate = predicate.bind(context);

//   const result = [];

//   for (let i = 0; i < list.length; i++) {
//     if (predicate(list[i])) result.push(list[i]);
//   }
//   return result;
// };

// let filteredArray1 = filter([1, 2, 4], el => el > 1);
// let filteredArray2 = filter(
//   [1, 2, 4],
//   function callback(el) {
//     return el === this.number;
//   },
//   { number: 1 }
// );
// console.log(filteredArray1);
// console.log(filteredArray2);

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

// const reject = (list, predicate, context) => {
// if (context) predicate = predicate.bind(context);

//   const result = [];

//   for (let i = 0; i < list.length; i++) {
//     if (!predicate(list[i])) result.push(list[i]);
//   }
//   return result;
// };

// const rejected1 = reject([1, 2, 3, 4], el => el % 2 === 0);
// const rejected2 = reject(
//   [1, 2, 3, 4],
//   function callback(el) {
//     return el % 2 === this.number;
//   },
//   { number: 0 }
// );
// console.log(rejected1);
// console.log(rejected2);

// #10 every

// const every = (list, predicate, context) => {
//   if (context) predicate = predicate.bind(context);

//   for (let i = 0; i < list.length; i++) {
//     if (!predicate(list[i])) return false;
//   }
//   return true;
// };

// const ev = every([2, 2, 6, 4], el => el % 2 === 0);
// console.log(ev);

// #11 some

// const some = (list, predicate, context) => {
//   if (context) predicate = predicate.bind(context);

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

// #14 shuffle

// const randomInt = (min, max) => {
//   Math.floor(Math.random() * (max - min + 1)) + min;
// };

// const shuffle = list => {
//   for (let i = list.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [list[i], list[j]] = [list[j], list[i]];
//   }
//   return list;
// };

// const shuffledList = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(shuffledList);

// #15 sample

// const sample = (list, n = 1) => {
//   const result = [];

//   for (let i = 0; i < n; i++) {
//     let j = Math.floor(Math.random() * (list.length - 1 + 1));
//     result.push(list[j]);
//     list.splice(j, 1);
//   }

//   return result;
// };

// const sampled = sample([1, 2, 3]);
// console.log(sampled);

// #16 toArray

// const toArray = list => Object.values(list);

// const vals = toArray({ 0: 1, 1: 2, 2: 3 });
// console.log(vals);

// #17 size

// const size = list => {
//   if (Array.isArray(list)) {
//     return list.length;
//   } else {
//     return Object.values(list).length;
//   }
// };

// const arrSize = size([1, 2, 3]);
// const objSize = size({ 0: 1, 1: 2, 2: 3 });

// console.log(arrSize, objSize);

// #18 partition

// const partition = (array, predicate) => {
//   let passed = [];
//   let failed = [];

//   for (let i = 0; i < array.length; i++) {
//     predicate(array[i]) ? passed.push(array[i]) : failed.push(array[i]);
//   }

//   return [passed, failed];
// };

// const partitions = partition([1, 2, 3, 4], el => el % 2 === 0);
// console.log(partitions);

// #19 max

// const max = (list, iteratee, context) => {
//   if (list.length === 0) return -Infinity;
//   if (context) iteratee = iteratee.bind(context);

//   if (iteratee) {
//     const criteria = [];

//     for (let i = 0; i < list.length; i++) {
//       const criterion = iteratee(list[i]);
//       if (typeof criterion === 'number') criteria.push(criterion);
//     }

//     const maxCriterion = Math.max(...criteria);

//     const maxElement = criteria.indexOf(maxCriterion);

//     return list[maxElement];
//   }

//   list = list.filter(el => typeof el === 'number');

//   return Math.max(...list);
// };

// var elements = [
//   { name: 'moe', age: 40 },
//   { name: 'larry', age: 50 },
//   { name: 'curly', age: 60 },
// ];

// const max1 = max(elements, function callback(el) {
//   return el.age;
// });

// const max2 = max(
//   elements,
//   function callback(el) {
//     return el.age + 1;
//   },
//   { number: 1 }
// );

// console.log(max1);
// console.log(max2);

// #20 min

// const min = (list, iteratee, context) => {
//   if (list.length === 0) return Infinity;
//   if (context) iteratee = iteratee.bind(context);

//   if (iteratee) {
//     const criteria = [];

//     for (let i = 0; i < list.length; i++) {
//       const criterion = iteratee(list[i]);
//       if (typeof criterion === 'number') criteria.push(criterion);
//     }

//     const minCriterion = Math.min(...criteria);

//     const minElement = criteria.indexOf(minCriterion);

//     return list[minElement];
//   }

//   list = list.filter(el => typeof el === 'number');

//   return Math.min(...list);
// };

// var elements = [
//   { name: 'moe', age: 40 },
//   { name: 'larry', age: 50 },
//   { name: 'curly', age: 60 },
// ];

// const min1 = min(elements, function callback(el) {
//   return el.age;
// });

// const min2 = min(
//   elements,
//   function callback(el) {
//     return el.age + 1;
//   },
//   { number: 1 }
// );

// const min3 = min([1, 2, 3]);

// console.log(min1);
// console.log(min2);
// console.log(min3);

// # 21 sortBy

// const sortBy = (list, iteratee, context) => {
//   if (context) iteratee = iteratee.bind(context);

//   if (typeof iteratee === 'string') {
//     list.sort((a, b) => {
//       const iterateeA = a[iteratee];
//       const iterateeB = b[iteratee];

//       if (typeof iterateeA === 'string' && typeof iterateeB === 'string') {
//         if (iterateeA > iterateeB) {
//           return 1;
//         }
//         if (iterateeA < iterateeB) {
//           return -1;
//         }

//         return 0;
//       } else {
//         return iterateeA - iterateeB;
//       }
//     });
//   } else {
//     list.sort((a, b) => {
//       const iterateeA = iteratee(a);
//       const iterateeB = iteratee(b);

//       if (typeof iterateeA === 'string' && typeof iterateeB === 'string') {
//         if (iterateeA > iterateeB) {
//           return 1;
//         }
//         if (iterateeA < iterateeB) {
//           return -1;
//         }

//         return 0;
//       } else {
//         return iterateeA - iterateeB;
//       }
//     });
//   }

//   return list;
// };

// const sorted1 = sortBy(
//   [1, 2, 3, 4, 5, 6],
//   function (num) {
//     return this.func(num);
//   },
//   { func: Math.sin }
// );

// const stooges = [
//   { name: 'moe', age: 40 },
//   { name: 'larry', age: 50 },
//   { name: 'curly', age: 60 },
// ];

// const sorted2 = sortBy(stooges, 'name');

// console.log(sorted1);
// console.log(sorted2);

// #22 groupBy

// const groupBy = (list, iteratee, context) => {
//   if (context) iteratee = iteratee.bind(context);
//   const groups = {};

//   if (typeof iteratee === 'string') {
//     for (let i = 0; i < list.length; i++) {
//       groups[list[i][iteratee]]
//         ? groups[list[i][iteratee]].push(list[i])
//         : (groups[list[i][iteratee]] = [list[i]]);
//     }
//   } else {
//     for (let i = 0; i < list.length; i++) {
//       groups[iteratee(list[i])]
//         ? groups[iteratee(list[i])].push(list[i])
//         : (groups[iteratee(list[i])] = [list[i]]);
//     }
//   }

//   return groups;
// };

// const group1 = groupBy(
//   [1.3, 2.1, 2.4],
//   function (num) {
//     return this.func(num);
//   },
//   { func: Math.floor }
// );
// const group2 = groupBy(['one', 'two', 'three'], 'length');

// console.log(group1);
// console.log(group2);

// #23 indexBy

// const indexBy = (list, iteratee, context) => {
//   if (context) iteratee = iteratee.bind(context);

//   const groups = {};

//   if (typeof iteratee === 'string') {
//     for (let i = 0; i < list.length; i++) {
//       groups[list[i][iteratee]] = list[i];
//     }
//   } else {
//     for (let i = 0; i < list.length; i++) {
//       groups[iteratee(list[i])] = list[i];
//     }
//   }

//   return groups;
// };

// const stooges = [
//   { name: 'moe', age: 40 },
//   { name: 'larry', age: 50 },
//   { name: 'curly', age: 60 },
// ];
// const index1 = indexBy(stooges, 'age');

// console.log(index1);

// #24 countBy

// const countBy = (list, iteratee, context) => {
//   if (context) iteratee = iteratee.bind(context);
//   const groups = {};

//   if (typeof iteratee === 'string') {
//     for (let i = 0; i < list.length; i++) {
//       groups[list[i][iteratee]]
//         ? groups[list[i][iteratee]]++
//         : (groups[list[i][iteratee]] = 1);
//     }
//   } else {
//     for (let i = 0; i < list.length; i++) {
//       groups[iteratee(list[i])]
//         ? groups[iteratee(list[i])]++
//         : (groups[iteratee(list[i])] = 1);
//     }
//   }

//   return groups;
// };

// const count1 = countBy([1, 2, 3, 4, 5], function (num) {
//   return num % 2 == 0 ? 'even' : 'odd';
// });

// console.log(count1);
