function luckyNumbers(n) {

    let arr = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10]
    let randomNumbers=[]
    for (let i = 0; i < n; i++){
        let index = Math.floor(Math.random() * arr.length) 
        if (!randomNumbers.includes(arr[index])) {
            randomNumbers.push(arr[index])
            arr.splice(index, 1)
            }
    }
    return randomNumbers
}


// function luckyNumbers(n) {

//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5]
//     let randomNumbers=[1, 5]
//     for (let i = 0; n <= randomNumbers.length ; i++){  //need to add n numbers into randomNummbers array
//         let index = Math.floor(Math.random() * arr.length) 
//         //loop through randomNumbers array and see if the numbers in there are included in our test array
//         for (let j = 0; j < randomNumbers.length; j++ ) {
//             if (!arr.includes(randomNumbers[j])) {
//                 randomNumbers.push(arr[index])
//                 // arr.splice(index, 1)
//             }
//         }
        

//     }
//     return randomNumbers
// }
// console.log("Random arr : ", luckyNumbers(6))