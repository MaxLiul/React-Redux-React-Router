const object1 = require('./test');
const object2 = {};
const key
const clone = {}
for (key in object1) {
clone[key] = object1[key]

   // console.log(object1[keys])
  // console.log(object1.keys) Why does it create 'undefined'??
}
object1 = object2;
clone.key6 = 'Liul';
object2.key5 = 'Super1'
console.log(clone.key2)
