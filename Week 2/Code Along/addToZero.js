let arr2 = [0, 1, 2, 3];

//Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

// loop through the array
// compare each number to every other number in array
// go through the other numbers and compare to the indexed number used in the loop
// if 2 numbers added equals zero return true
// otherwise return false

// let isTrue = false

// for (let i = 0; i < arr2.length; i++) {
//     let searchFor
//     searchFor = 0 - arr2[i];       // arr[i] = 2,  searchFor = -2

//     if (arr2.includes(searchFor) && searchFor !== 0) {    this has a logical bug where we may have two 0s that would add to zero
//         isTrue = true
//         break;
//     }
// }

// console.log(isTrue)

let arr = [0, 2, 5, -2, 6, -7];

function addToZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(i + 1).includes(0 - arr[i])) { //copy the array from the place after the number I am comparing, and check if that copy of the array includes the opposite of the number I am comparing. ie if I am looking at position 1 in the array, its value is 2, get the rest of the array after it [5, -2, 6, -7] and see if that array includes 0 - (0 - 2). It does include -2. Return true. If none of the number have another value that would cause it to equal 0, then return false.
      //
      return true;
    }
  }
  return false;
}
console.log(addToZero(arr));
console.log(addToZero(arr2));
