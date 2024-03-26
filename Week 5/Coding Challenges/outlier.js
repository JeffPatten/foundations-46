// receive an array, either all odd numbers with one even, or all even with one odd
// [11, 2, 4, 0, 100, 4, 2602, 36] => return the outlier. 11
// loop
// num % 2 = 0
// We need to find which numbers are odd and which are even, then we need to determine if evens or odds have more numbers

// function outlier(arr) {
//     let even = [2, 4, 0, 100, 4, 2602, 36]
//     let odd = [11]

//     // loop
//     arr.forEach((number) => {
//         // numInArr % 2 = 0 => even
//         if (number % 2 === 0) {
//             even.push(number)
//         } else {
//             odd.push(number)
//         }
//     })

//     if (even.length === 1) {
//         return even[0]
//     } else {
//         return odd[0]
//     }

// }

// function findOutlier(integers) {
//     let evens = []
//     let odds = []
//     integers.forEach(e => e % 2 === 0 ? evens.push(e) : odds.push(e))
//     return odds.length === 1 ? odds[0] : evens[0]
//   }

function findOutlier(arr) {
    for (let i = 0; i < arr.length-1; i++){
        if ((arr[i] + arr[i + 1]) % 2 !== 0) {          //check if 2 items added are odd. if they are run another condition
            if (i === 0) {
                console.log("outlier = ", arr[i]);
                return
            }
            console.log("outlier = ", arr[i+1]);
            return
        }
    }
} 

findOutlier([2,6,3,4,8,12])
findOutlier([1,3,5,2,7,9])
findOutlier([2,1,3,5,7,9])