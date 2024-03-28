function smallestDiff (arr1, arr2) {
    let result = Math.abs(arr1[0]-arr2[0])
    for (let i = 0; i < arr1.length; i++){
         for (let j = 0; j < arr2.length; j++){ // compare 10 to 30, then 23, then 54, etc
             let diff=Math.abs(arr1[i] - arr2[j])
             if ( diff< result) {
                 result=diff
             }
         }
     }
    console.log(result); 
}

smallestDiff([10, 20, 14, 16, 18], [30, 23, 54, 33, 96])

// For example, given the arrays:

// [10, 20, 14, 16, 18]
// [30, 23, 54, 33, 96]
// The result would be 3, since 23 - 20 = 3 is the smallest difference of any pair of numbers in those lists.