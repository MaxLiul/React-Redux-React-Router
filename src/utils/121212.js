const clone = require('./clone');

function objectConstructor() {

}
const objFunction = new objectConstructor();
const cloneFunction = clone(objFunction);

 console.log(cloneFunction instanceof objectConstructor);
