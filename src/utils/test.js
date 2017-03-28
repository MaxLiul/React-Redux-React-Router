const clone = require('./clone');
// Проверить функцию в случае, если передается значение 'undefined'
const objUndefined = undefined;
const cloneUndefined = clone(objUndefined);
console.log(objUndefined === cloneUndefined);
// Check 'null'
const objNull = null;
const cloneNull = clone(objNull);
console.log(objNull === cloneNull);

// Check isWhole or isPositive isNegative
const objWhole = 5;
const cloneWhole = clone(objWhole);
console.log(objWhole === cloneWhole);

// clone  'true' and 'false'
const objStatement = true;
const cloneStatement = clone(objStatement);
console.log(cloneStatement === objStatement);
// clone an empty massive
const objEmptyMassive = [];
const cloneEmptyMassive = clone(objEmptyMassive);
if (objEmptyMassive.lenth === cloneEmptyMassive.length) {
  return true;
}
// console.log(objEmptyMassive === cloneEmptyMassive)
// clone an massive wich contain 1 element 'indefined'
const objMassive = [ undefined ];
const cloneMassive = clone(objMassive);
console.log(cloneMassive[0] === objMassive[0]);
// clone massive wich contain massive
const objMassiveInMassive = [1, 4, 7, 'Max', [7, 2, 3] ];
const cloneMassiveInMassive = clone(objMassiveInMassive);
for (let i = 0, len = objMassiveInMassive.length; i < len; i++) {
  if (typeof objMassiveInMassive[i] === typeof cloneMassiveInMassive[i])  {
    console.log(true);
  }
}

// console.log(cloneMassiveInMassive)
// clone an empty object
const objEmpty = {};
const cloneEmpty = clone(objEmpty);
console.log(cloneEmpty === objEmpty);
// clone user's object (which created by function)

// clone complex object

// class and prototype 9++ create methods
