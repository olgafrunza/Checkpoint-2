/* eslint-disable no-unused-vars */

// function thrice(func) {
//     return function eight(num) {

//     }
// }



const thrice = func => {
  let count = 0;
  return function() {
    count++;
    if (count <= 3) {
      return func();
    }
  };
};

// Solution Fullstack

// const thrice = func => {
//   let counter = 0;
//   return () => {
//     if (counter < 3) {
//       counter++;
//       return func();
//     }
//   };
// };