let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
const newArray = myArray.map(x => x % 2 === 0);

console.log(newArray);


// let newArray = [];
// for (let i = 0; i < myArray.length; i += 1) {
//   let value = myArray[i];
//   if (value % 2 === 0) {
//     newArray.push('even');
//   } else {
//     newArray.push('odd');
//   }
// }