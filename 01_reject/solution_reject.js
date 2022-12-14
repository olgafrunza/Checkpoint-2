/* eslint-disable no-unused-vars */

function reject (arr, func) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if(!func(arr[i]))
        newArr.push(arr[i])
    }
    return newArr
}


// Solution Fullstack

// const reject = (array, fn) => {
//   return array.filter(function(val) {
//     return !fn(val);
//   });
// };

// // Shorthand One-Liner Arrow Function Syntax (this is the same solution as above but it is refactored):

// const reject = (array, fn) => array.filter(val => !fn(val));

// // const reject = (array, func) => {
// //   const finalArray = [];
// //   for(let i = 0; i < array.length; i++){
// //       if(!(func(array[i]))){
// //           finalArray.push(array[i]);
// //       }
// //   }
// //   return finalArray;
// // }