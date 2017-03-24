const object1 = {
  key1:'colour',
  key2:'weight',
  key3:[ [], 2, 7, {
    key4:'smell'
  } ],
  key5:['height', {
    key7:[null, [2, 3, 4] ]
  }, 777],
  key6:function () {
    return 12;
  }
};
object1.key1 = 'green';
object1.weight = 0;
object1.key3[3].key4 = 'beautiful';


// console.log( object1 );

module.exports = object1;
