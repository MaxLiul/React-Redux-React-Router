function myTimeout(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

var prom1 = myTimeout(Math.random() * 1000).then(() => {
  console.log('1');
});
var prom2 = myTimeout(Math.random() * 1000).then(() => {
  console.log('2');
});
var prom3 = myTimeout(Math.random() * 1000).then(() => {
  console.log('3');
});
var prom4 = myTimeout(Math.random() * 1000).then(() => {
  console.log('4');
});
var prom5 = myTimeout(Math.random() * 1000).then(() => {
  console.log('5');
});

Promise.all([prom1, prom2, prom3, prom4, prom5]).then(function() {
    console.log('End');
});
