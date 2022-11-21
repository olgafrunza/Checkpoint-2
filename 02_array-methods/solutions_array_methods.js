/* eslint-disable no-unused-vars */

function useMapToUpperCase(str) {
    return str.split(" ").map(word => word.toUpperCase())
}




function useFilter(arr, simbol) { 
    simbol = "@"
    return arr.filter((words) => {
        if (words.includes(simbol))
            return words
    })
}




function sumWithReduce(arr, num) {
    return arr.reduce((accum, idx) => {
        return accum + idx
    }, num || 0)
}




function filterEvensDoubleAndSum(arr) {
    return arr
        .filter(idx => idx % 2 === 0)
        .map(idx => idx * 2)
        .reduce((accum, idx) => {
            return accum + idx
        })
}



// Solutions Fullstack

// const useMapToUpperCase = str => {
//   return str.split(' ').map(word => {
//     return word.toUpperCase();
//   });
// };

// // Shorthand One-Liner Arrow Function Syntax (this is the same solution as above but it is refactored):

// // const useMapToUpperCase = str => str.split(' ').map(word => word.toUpperCase());

// const useFilter = arr => {
//   return arr.filter(word => {
//     return word.includes('@');
//   });
// };

// // Shorthand One-Liner Arrow Function Syntax (this is the same solution as above but it is refactored):

// // const useFilter = arr => arr.filter(word => word.includes('@'));

// const sumWithReduce = (arr, start = 0) => {
//   return arr.reduce((accum, num) => {
//     return accum + num;
//   }, start);
// };

// // Shorthand One-Liner Arrow Function Syntax (this is the same solution as above but it is refactored):

// // const sumWithReduce = (arr, start = 0) =>
// //   arr.reduce((accum, num) => accum + num, start);



// const filterEvensDoubleAndSum = arr => {
//   return arr
//     .filter(num => num % 2 === 0)
//     .map(num => num * 2)
//     .reduce((accum, num) => accum + num);
// };

// // Shorthand One-Liner Arrow Function Syntax (this is the same solution as above but it is refactored):

// // const filterEvensDoubleAndSum = arr =>
// //   arr
// //     .filter(num => num % 2 === 0)
// //     .map(num => num * 2)
// //     .reduce((accum, num) => accum + num);