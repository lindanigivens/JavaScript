let range = function (start, end) {
    startEnd = [];
    for (let counter = start; counter <= end; counter++) {
        startEnd.push(start++)
    }
    console.log(startEnd);
}
range(1, 12);


// let savedStart, savedEnd;

// let range = function (start, end) {
//     savedStart = start;
//     savedEnd = end;
//     startEnd = [];
//     for (let counterRange = start; counterRange <= end; counterRange++) {
//         startEnd.push(start++)
//     }
//     console.log(startEnd);
// }

// // let sum = function (arr) {
// //     for (let summerSum = savedStart; summerSum <= savedEnd;) {
// //         console.log(summerSum);
// //     }
// // }

// console.log(range(2, 12))
