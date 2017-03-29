
const clone = require('./clone');
const objMassiveInMassive = [1, 4, 7, 'Max', [7, 2, 3] ];
const cloneMassiveInMassive = clone(objMassiveInMassive);

for (let i = 0, len = objMassiveInMassive.length; i < len; i++) {
  if (objMassiveInMassive[i] ===  cloneMassiveInMassive[i])  {
    // console.log(true);
  }
}
console.log(typeof '2')
