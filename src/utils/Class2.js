function Bascket() {
  this.goods = [];
}
object1 = new Bascket();
object2 = new Bascket(); // = new object1.constructor()
object1.constructor === object2.constructor === Bascket;
function add001(good){
  this.goods.push(good);
}
function count001(){
  return this.goods.length;
}

Bascket.prototype.count = count001;
Bascket.prototype.add = add001;
Bascket.prototype.name = 'Jack';

/*function push(arrayElement, whereAdd){
whereAdd[whereAdd.lenghth-1] = arrayElement;
}*/
class Baks extends Basket {
constructor(){
this.goods = [];
}
  add(good) {
this.goods.push(good);
  }
  count001() {
  return this.goods.length;
  }
}
