var object1 =  require('./test');

 function cloneFunction(object1){
  var clone = {};
  for (key in object1){
     if (typeof object1[key] != "object"){
                clone[key] = cloneFunction(object1[key]);
            }
             else{
                clone[key] = object1[key];
            }
      }
      return clone;
   }
console.log( clone );
