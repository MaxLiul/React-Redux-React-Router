const incrementalValue = getIncrementalValue();

// console.log(incrementalValue());
// console.log(incrementalValue());
// console.log(incrementalValue());
// console.log(incrementalValue());

for (var i = 0, k = Math.random(); i < 10; i = incrementalValue(), k = Math.random()) {
  console.log(`1 ${k}`);

(function(param){
  setTimeout(function () {
    console.log(`2 ${param}`);
  }, 0);
})(k)
}


function getIncrementalValue() {
  var incrementalValue = 0;
  return function() {
    return ++incrementalValue;
  }
}
