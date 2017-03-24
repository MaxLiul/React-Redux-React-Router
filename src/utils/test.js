var object1 = {
  key1:'colour',
  key2:'weight',
  key3:[[],2,7, {
    key4:'smell'
  }],
  key5:['height',{},777],
  key6:{}
};
object1.key1 = 'green';
object1.weight = 0;
object1.key3[3].key4 = 'beautiful';


// console.log( object1 );

 module.exports = object1;
