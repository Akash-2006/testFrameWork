const sum = function (a, b) {
  return a + b;
};

const add = function (a, ...b) {
  return b.reduce(sum, a);
};

const difference = function (a, b) {
  return a - b;
};
const sub = function (a, ...b) {
  return b.reduce(difference, a);
};

const getValue = function (ele, arr) {
  ele.unshift(arr);

  return ele;
};

const reverse = function (arr) {

  return arr.reduce(getValue, []);
};

const isCorrect = function ([FunctionName, parameters, expected]) {
  const result = FunctionName(...parameters);

  if (result === expected) {
    return '';
  }

  return [FunctionName, parameters, expected];
};

const test = function (testcases) {
  const failed = [];

  failed.push(testcases.filter(isCorrect));
  return failed;
};


const testCases = [
  [add, [5, 6], 12],
  [sub, [5, 6], -1],
  [sub, [5, 6], -1],
  [reverse, []]

];
console.table(...test(testCases));