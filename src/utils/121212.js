const clone = require('./clone');

const objUndefinedMassive = [ undefined ];
const cloneUndefinedMassive = clone(objUndefinedMassive);

if (objUndefinedMassive instanceof Array === cloneUndefinedMassive instanceof Array) {
  if (objUndefinedMassive.length === cloneUndefinedMassive.length) {
    console.log('trueUndefinedMassive');
  }
}
