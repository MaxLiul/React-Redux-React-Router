var object1 =  require('./test');
var cloneObject ={};

var cloneDeep = function(obj) {
 // Handle string, int, boolean, null or undefined
 if (null == obj || "object" != typeof obj) {
   return obj;
 }

/* var copy;
 // Handle Date
 if (obj instanceof Date) {
   copy = new Date();
   copy.setTime(obj.getTime());
   return copy;
 } */

 // Handle Array
 if (obj instanceof Array) {
   copy = [];
   for (var i = 0, len = obj.length; i < len; i++) {
     copy[i] = cloneDeep(obj[i]);
   }
   return copy;
 }

 // Handle Object
 if (obj instanceof Object) {
   copy = {};
   for (var attr in obj) {
     if (obj.hasOwnProperty(attr)) {
       copy[attr] = cloneDeep(obj[attr]);
     }
   }
   return copy;
 }

 /* console.error("Unable to copy object! Its type isn't supported.", obj);
}

 function clone(obj) {
   var target = {};
   for (var i in obj) {
     if (obj.hasOwnProperty(i)) {
       target[i] = obj[i];
     }
   }
   return target;
 } */
   }
cloneObject = cloneDeep(object1);
 object1.key1 = '[1,2,3]'


 // console.log( cloneObject.key3[2] );
 console.log( object1.key1 ) // .key5[1].key7 = [1,2,3] );
