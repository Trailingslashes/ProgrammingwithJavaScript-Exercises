let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let newObj = Object.keys(obj)
newObj = newObj.map((arr) => arr.toUpperCase());

console.log(Object.entries(obj))
console.log(newObj)

// let upperKeys = [];
// let objKeys = Object.keys(obj);
// objKeys.forEach(function(key) {
//   upperKeys.push(key.toUpperCase());
// });
// console.log(upperKeys); // => [ 'B', 'A', 'C' ]