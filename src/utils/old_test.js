const clone = require('./clone');
function numberCreator1() {
  this.colour = 'green';
  this.number = [1, 2, {} ];
}
// numberCreator1.prototype.constructor === numberCreator1;
const obj4 = {};
const obj2 = new numberCreator1();
//console.log(obj2.constructor)
const object1 = {
  key1:'colour',
  key2:'weight',
  key3:[ [],
    new numberCreator1(),
    7, {
      key4:'smell'
    } ],
  key5:['height', {
    key7:[null, [2, 3, 4] ]
  }, 777],
  key6:function numberCreator() {
    return 12;
  }
};
object1.key1 = 'green';
object1.weight = 0;
object1.key3[3].key4 = 'beautiful';
const obj3 = clone(obj2);

console.log(obj3 === obj2)
