
// *** Problem 1 ***

// Consider the following:
// I have a bag of marbles, and each marble has the
// chance of either being red, green, blue, or yellow.

// My friend asks if I have any yellow marbles in my bag.
// I don't answer her, and instead write a JS function
// that checks to see if a given array of "marbles" has any
// yellow ones in it (my marbles array is just going
// to be an array of strings of the colors of the marbles).

// To solve this, I figure I'll just look at each marble,
// and if any of them are yellow, then, voila! My function
// returns true. But if I check all of the marbles and
// none of them are yellow, I return false.

// I come up with the following function:

function hasYellow(marbleArr) {
    for (let i = 0; i < marbleArr.length; i++) {
        if (marbleArr[i] === 'yellow') {
            return true
        } else {
            return false
        }
    }
}

// and I test it out twice with two different "bags of marbles"

let result1 = hasYellow(['yellow', 'red', 'blue', 'yellow', 'green'])
let result2 = hasYellow(['red', 'red', 'red', 'red', 'red'])

console.log(result1)
console.log(result2)

// and the function seems to work correctly!

// Does my function actually do what it was supposed to do? Why or why not?
// Answer these question in comments below. Please feel free to run your
// own tests with the function.



// *** Problem 2 ***

//  Students should be able to work through intricate or complicated
//  instructions.

// 2.1
//  As practice in following difficult instructions, do the following:

//  Write a function called 'changeNums'
//  that takes in three arguments: 'array',
//  'operator', and 'amount'.

//  The 'array' argument will be an array of
//  numbers.

//  The operator argument will be a string
//  that can be one of four things: 'add',
//  'subtract', 'multiply', or 'divide'.

//  The number argument will be a number
//  that you want to operate against each
//  number in the array argument.

//  Inside the function, you will create
//  a new array that is modified (mapped) from
//  the original array passed in as an argument.
//  Use the array.map method to execute this
//  transformation.

//  In the map method's callback, do the mathmatical
//  operation to the array element (a number)
//  with the number that was the third argument passed into
//  the outer function.

//  Return the mapped array from the entire function



// 2.2
//  Invoke the 'changeNums' function passing
//  in a valid value for each paramter. Save the
//  result to a variable.

//  You'll have to log to the console to see
//  the returned array.


