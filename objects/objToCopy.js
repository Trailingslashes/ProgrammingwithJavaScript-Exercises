let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(object, keys) {
  if (keys) {
    let newObj = {};
    keys.forEach(key => {
      newObj[key] = object[key];
    });
    return newObj;
  } else {
    return Object.assign({}, object);
  }
}

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }


// function copyObj(sourceObject, keys) {
//   let destinationObject = {};

//   if (keys) {
//     keys.forEach(function(key) {
//       destinationObject[key] = sourceObject[key];
//     });

//     return destinationObject;
//   } else {
//     return Object.assign(destinationObject, sourceObject);
//   }
// }