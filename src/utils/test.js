const clone = require('./clone');
// Проверить функцию в случае, если передается значение 'undefined'
const objUndefined = undefined;
const cloneUndefined = clone(objUndefined);

console.log(objUndefined === cloneUndefined);
// console.log(typeof cloneUndefined)
// Check 'null'
const objNull = null;
const cloneNull = clone(objNull);

console.log(objNull === cloneNull);

// Check isWhole or isPositive isNegative
const objWhole = 5;
const cloneWhole = clone(objWhole);

console.log(objWhole === cloneWhole);

// clone  'true' and 'false'
const objStatement = false;
const cloneStatement = clone(objStatement);

console.log(cloneStatement === objStatement);
// clone an empty massive
const objEmptyMassive = [];
const cloneEmptyMassive = clone(objEmptyMassive);

if (objEmptyMassive instanceof Array === cloneEmptyMassive instanceof Array) {
  if (objEmptyMassive.length === cloneEmptyMassive.length) {
    return console.log('trueEmptyMassive');
  }
}

// console.log(objEmptyMassive === cloneEmptyMassive)
// clone an massive wich contain 1 element 'indefined'
const objUndefinedMassive = [ undefined ];
const cloneUndefinedMassive = clone(objUndefinedMassive);

if (objUndefinedMassive instanceof Array === cloneUndefinedMassive instanceof Array) {
  if (objUndefinedMassive.length === cloneUndefinedMassive.length) {
    console.log('trueUndefinedMassive');
  }
}
// clone massive with numbers
const objMassive = [1, 2, 7, 11, 3];
const cloneMassive = clone(objMassive);

if (objMassive instanceof Array === cloneMassive instanceof Array) {
  if (objMassive.length === cloneMassive.length) {
    for (let i = 0, k = 0, len = objMassive.length; i < len; i++) {
      if (objMassive[i] === cloneMassive[i]) {
      k++
      }
      if (k === objMassive.length) {
        console.log('TrueMassive')
      }
    }
  }
}
// clone massive wich contain massive
const objMassiveInMassive = [1, 4, 7, [], [ 1 ] ];
const cloneMassiveInMassive = clone(objMassiveInMassive);

for (let i = 0, k = 0, len = objMassiveInMassive.length; i < len; i++) {
  if (objMassiveInMassive[i] instanceof Array === cloneMassiveInMassive[i] instanceof Array)  {
    k++;
    if (k === objMassiveInMassive.length) {
      console.log('TrueMassiveInMassive');
    }
  }
}

// console.log(cloneMassiveInMassive)
// clone an empty object
const objEmpty = {};
const cloneEmpty = clone(objEmpty);
const array = [];

if (objEmpty instanceof Object === cloneEmpty instanceof Object) {
  for (const i in cloneEmpty) {
    array.push(i);
  }
  if (array.length === 0) {
    console.log('TrueEmpty')
  }
}
// clone user's object (which created by function)

function objectConstructor() {

}
const objFunction = new objectConstructor();
const cloneFunction = clone(objFunction);

if (objFunction instanceof objectConstructor === cloneFunction instanceof objectConstructor) {
  return console.log('trueFunction');
}

 // clone complex object

 const objComplex = {
   key1:'colour',
   key2:'weight',
   key3:[ [], 7, {
     key4:'smell'
   } ],
   key5:['height', {
     key7:[null, [2, 3, 4] ]
   }, 777],
   key6:function numberCreator() {
     return 12;
   }
 };

const cloneComplex = clone(objComplex);
let k = 0;
const array1 = [];

if (typeof objComplex === typeof cloneComplex) {
   for (const atr in objComplex) {
     array1.push(atr);
     if (typeof objComplex[atr] === typeof cloneComplex[atr]) {
       k++;
     }
   }
  if (k === array1.length) {
    console.log('TrueComplex');
  }
}
