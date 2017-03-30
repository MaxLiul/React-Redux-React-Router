 class MyString {
  constructor(str) {
    this.str = str.split('');
  }
  concat(string) {
    const splitStr = string.split('')
    for (let i = 0, len = splitStr.length; i < len; i++) {
      this.str.push(splitStr[i])
    }
}
}
console.log(new MyString('cat'))
 const object = [1, 2345];
const object2 = new MyString('12345');
// object.push(123);
  console.log(object2.concat('6789'));
 console.log(object2);
