var object1 =  require('./test');
var deepClone ={};

 function cloneFunction(obj){
  var clone = {};
  for (key in obj){
                    clone[key] = obj[key];
            }

      return clone;
   }


deepClone =  cloneFunction( object1 )
object1.key5[2] = 'lalala'
console.log( deepClone  );
