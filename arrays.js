// #1 first

// const first = (arr, n = 1) => {
//   const result = [];

//   if (n === 1) return arr[0];

//   for (let i = 0; i < n; i++) result.push(arr[i]);

//   return result;
// };

// const first1 = first([1, 2, 3]);
// const first2 = first([1, 2, 3], 2);

// const ss = function (a, b, c) {
//   const firstArg = first(arguments);
//   return firstArg;
// };

// const firstArg = ss(5, 6, 7);

// console.log(first1, first2, firstArg);

// #2 initial

// const initial = (arr, n = 1) => {
//   const result = [];

//   for (let i = 0; i < arr.length - n; i++) result.push(arr[i]);

//   return result.length === 1 ? result[0] : result;
// };

// const init1 = initial([1, 2, 3]);
// const init2 = initial([1, 2, 3], 2);

// const ss = function (a, b, c) {
//   return initial(arguments);
// };

// const initArgs = ss(1, 2, 3);

// console.log(init1, init2, initArgs);

// #3 last

// const last = (arr, n = 1) => {
//   if (n === 1) return arr[arr.length - 1];

//   const result = [];

//   for (let i = 0; i < n; i++) result.push(arr[arr.length - 1 - i]);

//   return result.reverse();
// };

// const last1 = last([1, 2, 3]);
// const last2 = last([1, 2, 3], 2);

// const ss = function (a, b, c) {
//   return last(arguments);
// };

// const lastArg = ss(1, 2, 3);

// console.log(last1, last2, lastArg);

// #4 rest

// const rest = (array, index = 1) => {
//   const result = [];

//   for (let i = index; i < array.length; i++) result.push(array[i]);

//   return result;
// };

// const rest1 = rest([1, 2, 3]);
// const rest2 = rest([1, 2, 3], 2);

// const ss = function (a, b, c) {
//   return rest(arguments);
// };

// const restArgs = ss(1, 2, 3);

// console.log(rest1, rest2, restArgs);

// #5 compact

// const compact = array => array.filter(el => el);

// const compacted = compact([0, 1, 2, '', 5, 6, null, void 0, true, false]);

// console.log(compacted);

// #6 flatten

// const flatten = (arr, shallow = false) => {
//   const result = [];

//   if (shallow) {
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         for (let j = 0; j < arr[i].length; j++) {
//           result.push(arr[i][j]);
//         }
//       } else {
//         result.push(arr[i]);
//       }
//     }
//   } else {
//     const recursiveFor = array => {
//       for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//           recursiveFor(array[i]);
//         } else {
//           result.push(array[i]);
//         }
//       }
//     };

//     recursiveFor(arr);
//   }

//   return result;
// };

// const x = flatten([1, [2], [3, [[4]]]]);
// const y = flatten([1, [2], [3, [[4]]]], true);

// const ss = function (a, b, c) {
//   return flatten(arguments);
// };

// const flattenArgs = ss(1, [2], [3, [[4]]]);

// console.log('X', x);
// console.log('Y', y);
// console.log('FA', flattenArgs);

// #7 without

// const without = (arr, ...values) => {
//   if (!Array.isArray(arr)) arr = Object.values(arr);

//   return arr.filter(el => {
//     for (let i = 0; i < values.length; i++) {
//       if (el === values[i]) return false;
//     }
//     return true;
//   });
// };

// const f = without([1, 2, 3], 3);
// const ss = function (a, b, c) {
//   return without(arguments, 1, 2);
// };
// const fArgs = ss(1, 2, 3, 4, 5);
// console.log(f);
// console.log(fArgs);

// #8 union

// const union = (...arrays) => {
//   let setGroup = [];
//   for (let i = 0; i < arrays.length; i++) setGroup.push(...arrays[i]);
//   const uniqueValues = new Set(setGroup);
//   return [...uniqueValues].sort(
//     (a, b) => setGroup.indexOf(a) - setGroup.indexOf(b)
//   );
// };

// const temp1 = union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
// const ss = function (a, b, c) {
//   return union(...arguments);
// };
// const temp2 = ss([1, 2, 3], [101, 2, 1, 10], [2, 1]);
// console.log(temp1);
// console.log(temp2);

// #9 intersection

// const intersection = (...arrays) => {
//   const count = {};
//   const result = [];

//   arrays.forEach(arr => {
//     arr.forEach(el => {
//       count[el] ? count[el]++ : (count[el] = 1);
//       if (count[el] >= arrays.length) result.push(el);
//     });
//   });

//   return result;
// };

// const inter1 = intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
// console.log(inter1);

// #10 difference

// const difference = (arr, ...others) => {
//   if (!Array.isArray(arr)) arr = Object.values(arr);

//   return arr.filter(el => {
//     for (let i = 0; i < others.length; i++) {
//       for (let j = 0; j < others[i].length; j++) {
//         if (el === others[i][j]) return false;
//       }
//     }
//     return true;
//   });
// };

// const diff = difference([1, 2, 3, 4, 5], [5, 2, 10]);
// console.log(diff);

// #11 uniq

// const uniq = (array, isSorted = false, iteratee) => {
//   if (iteratee) {
//     for (let i = 0; i < array.length; i++) {
//       array[i] = iteratee(array[i]);
//     }
//   }

//   return [...new Set(array)];
// };

// const uniq1 = uniq([1, 2, 1, 4, 1, 3], false, el => el * 2);
// console.log(uniq1);

// #12 zip

// const zip = (...arrays) => {
//   const result = [];

//   for (let i = 0; i < arrays.length; i++) {
//     for (let j = 0; j < arrays[i].length; j++) {
//       result[j] ? result[j].push(arrays[i][j]) : (result[j] = [arrays[i][j]]);
//     }
//   }

//   return result;
// };

// const temp1 = zip(
//   ['moe', 'larry', 'curly'],
//   [30, 40, 50],
//   [true, false, false]
// );
// const tempF = function (a, b, c) {
//   return zip(...arguments);
// };
// const temp2 = tempF(
//   ['moe', 'larry', 'curly'],
//   [30, 40, 50],
//   [true, false, false]
// );
// console.log(temp1);
// console.log(temp2);

// #13 unzip

// const unzip = array => {
//   let result = [];

//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       result[j] ? result[j].push(array[i][j]) : (result[j] = [array[i][j]]);
//     }
//   }

//   return result;
// };

// const temp1 = unzip([
//   ['moe', 30, true],
//   ['larry', 40, false],
//   ['curly', 50, false],
// ]);

// console.log(temp1);

// #14 object

// const object = (...args) => {
//   const obj = {};

//   if (args.length === 2) {
//     const keys = args[0];
//     const values = args[1];

//     for (let i = 0; i < keys.length; i++) obj[keys[i]] = values[i];
//   } else if (args.length === 1) {
//     const pairs = args[0];

//     for (let i = 0; i < pairs.length; i++) obj[pairs[i][0]] = pairs[i][1];
//   }

//   return obj;
// };

// let obj1 = object(['moe', 'larry', 'curly'], [30, 40, 50]);
// let obj2 = object([
//   ['moe', 30],
//   ['larry', 40],
//   ['curly', 50],
// ]);

// console.log(obj1);
// console.log(obj2);

// #15 indexOf

// const indexOf = (array, value, fromIndex = 0) => {
//   for (let i = fromIndex; i < array.length; i++) {
//     if (array[i] === value) return i;
//   }

//   return -1;
// };

// #16 lastIndexOf

// const lastIndexOf = (array, value, fromIndex = 0) => {
//   for (let i = array.length - 1; i >= fromIndex; i--) {
//     if (array[i] === value) return i;
//   }

//   return -1;
// };

// const idx1 = lastIndexOf([1, 2, 3, 1, 2, 3], 2);
// console.log(idx1);

// #17 sortedIndex

// const sortedIndex = (list, value, iteratee, context) => {
//   if (context) iteratee = iteratee.bind(context);

//   if (iteratee) {
//     if (typeof iteratee === 'string') {
//       for (let i = 0; i < list.length; i++) {
//         if (
//           list[i][iteratee] < value[iteratee] &&
//           list[i + 1][iteratee] > value[iteratee]
//         ) {
//           return i + 1;
//         }
//         if (list[i][iteratee] === value[iteratee]) return i;
//       }
//     } else {
//       for (let i = 0; i < list.length; i++) {
//         if (
//           iteratee(list[i]) < iteratee(value) &&
//           iteratee(list[i + 1]) > iteratee(value)
//         ) {
//           return i + 1;
//         }
//         if (iteratee(list[i]) === iteratee(value)) return i;
//       }
//     }
//   } else {
//     for (let i = 0; i < list.length; i++) {
//       if (list[i] < value && list[i + 1] > value) return i + 1;
//       if (list[i] === value) return i;
//     }
//   }
// };

// const sortedIdx1 = sortedIndex([10, 20, 30, 40, 50], 35);

// const stooges = [
//   { name: 'moe', age: 40 },
//   { name: 'curly', age: 60 },
// ];

// const sortedIdx2 = sortedIndex(stooges, { name: 'larry', age: 50 }, 'age');

// const sortedIdx3 = sortedIndex(
//   stooges,
//   { name: 'larry', age: 50 },
//   function callback(el) {
//     return el.age * this.number;
//   },
//   { number: 2 }
// );

// console.log(sortedIdx1);
// console.log(sortedIdx2);
// console.log(sortedIdx3);

// #18 findIndex

// const findIndex = (array, predicate, context) => {
//   if (context) predicate = predicate.bind(context);

//   for (let i = 0; i < array.length; i++) {
//     if (predicate(array[i])) return i;
//   }

//   return -i;
// };

// const idx1 = findIndex(
//   [1, 2, 3, 4, 5],
//   function callback(el) {
//     return el === this.number;
//   },
//   {
//     number: 2,
//   }
// );

// console.log(idx1);
