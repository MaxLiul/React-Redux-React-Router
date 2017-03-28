function cloneDeep(obj) {
 // Handle string, int, boolean, null or undefined
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  let copy;

 // Handle Array
  if (obj instanceof Array) {
    copy = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = cloneDeep(obj[i]);
    }
    return copy;
  }

 // Handle Object
  if (obj instanceof Object) {
    copy = new obj.constructor();
    for (const attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        copy[attr] = cloneDeep(obj[attr]);
      }
    }
    return copy;
  }
}
module.exports = cloneDeep;
