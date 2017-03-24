'use strict'
const object1 = require('./test');
const cloneObject = {};

const cloneDeep = function(obj) {
 // Handle string, int, boolean, null or undefined
if (null === obj || "object" !== typeof obj) {
   return obj;
 }

 const copy

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
     if (obj.hasOwnProperty(attr)) { // здесь мы исключаем свойства обьекта, которые он наследовал от прототипа, так как эти свойства при клонировании об\ект и так приобретет

       copy[attr] = cloneDeep(obj[attr]);
     }
   }
   return copy;
 }
   }
cloneObject = cloneDeep(object1);
 object1.key5[1].key7[1] = '[1,2,3]'


 // console.log( cloneObject.key3[2] );
 console.log( typeof cloneObject.key5[1].key7[1] );
