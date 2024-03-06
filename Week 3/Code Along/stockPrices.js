function best (pricesArr) {   //prices will be an array of stock prices throughout the day
    let maxDiff = 0
    let lowPrice

    for (let i = 0; i < pricesArr.length; i++) {
        if (lowPrice === undefined || pricesArr[i] < lowPrice) {   //this will find the lowest number from left to right
            lowPrice = pricesArr[i]
        }

        let diff = pricesArr[i] - lowPrice

        if (diff > maxDiff) {
            maxDiff = diff
        }

    }

    // return the maximum profit

    return maxDiff
}



// console.log(best([1, 2, 3, 4, 5]))
console.log(best([2, 3, 10, 6, 4, 8, 1]))
// console.log(best([5, 4 , 3, 2, 1]))
console.log(best([24, 25 , 3, 2, 10]))



























// const best = prices => 
// {
//     let min = prices[0]
//     let profit = 0
//     for (let i = 0; i < prices.length; i++){
//         if ((prices[i]-min)>profit) {
//             profit = prices[i] - min
//         } else {
//             min=prices[i]
//         }
//     }
//     return profit 
// }