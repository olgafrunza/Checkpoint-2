/* eslint-disable no-unused-vars */



function runNumTimes(str, num) {
    let out = ""
    for (let i = 0; i < num; i++) {
        out += str()
    }
    return out
}


//Solution Fullstack

// const runNumTimes = (func, num) => {
//   for(let i = 0; i < num; i++) {
//     func();
//   }
// }