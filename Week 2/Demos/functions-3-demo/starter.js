//Can you pass a different array in as an argument to higher order array methods callback

// let avengers = ['Captain America', 'Iron Man', 'Thor', "Black Widow", "Hawkeye"]

// without arrow function
// avengers.forEach(function(a, index, arr){
//     console.log(`${a} is an Avenger `)
// })

// avengers[i]

// with arrow function
// numArray.forEach((elem, i) => console.log(`${elem} is at index ${i}`))

////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

const lotr = [
  "biLbO BaGGINs",
  "leGOlAs",
  "Frodo bAGGINS",
  "sAMwiSe GamGEe",
  "gAndALF tHe GREY",
];

const copyArrToCamelCase = (arr) => {
  // 'bilboBaggins'
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i]; //'biLbO BaGGINs'
    const splitStr = str.split(" "); // ['biLbO', 'BaGGINs']
    let camelCaseStr = "";

    for (let x = 0; x < splitStr.length; x++) {
      // looping over ['biLbO', 'BaGGINs']
      let word = splitStr[x]; // 'biLbO'         'BaGGINs'

      word = word.toLowerCase(); // 'bilbo'         'baggins'

      if (x !== 0) {
        // if we are on 'baggins'
        word = word.charAt(0).toUpperCase() + word.slice(1); // take 'b' and make it 'B'  +  'aggins'     =>       word = 'Baggins'
      }

      camelCaseStr += word; // camelCaseStr = '' + 'bilbo'        'bilbo' + 'Baggins'          =>    'bilboBaggins'
    }

    newArr.push(camelCaseStr);
  }

  return newArr;
};

const copyArrToSnakeCase = (arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    str = str.toLowerCase();
    const splitStr = str.split(" ");
    const snakeCaseStr = splitStr.join("_");
    newArr.push(snakeCaseStr);
  }

  return newArr;
};

// CODE HERE

const copyAndChange = (arr, cb) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let newValue = cb(arr[i]);
    result.push(newValue);
  }

  return result;
};

const copyStrToSnakeCase = (str) => {

  str = str.toLowerCase();
  const splitStr = str.split(" ");
  const snakeCaseStr = splitStr.join("_");

  return snakeCaseStr
};

// console.log(copyAndChange(lotr, copyStrToSnakeCase))
let snake_case_characters = lotr.map((character) => character.toLowerCase().split(" ").join("_"))
// console.log(snake_case_characters)

////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////

//// MAP ////

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ["red", "blue", "yellow", "green", "orange"];

// const mappedColors = colors.map(() => 'pink')
// console.log(mappedColors);

/*
    Edit the formalGreeting function and use the built in .map method
    to map over the names parameter and return a new array with "Hello, "
    appended to the beginning of each name

    Make sure to use arrow functions combined with the map method
*/

const formalNames = ["Bernard", "Elizabeth", "Conrad", "Mary Margaret"];
const informalNames = ["Bernie", "Liz"]

const formalGreeting = (names) => {
  // CODE HERE
  let hello = names.map((name) => `Hello, ${name}`)
//   return hello
// return names.map((name) => `Hello, ${name}`)
};

let shortNames = informalNames.map((name) => `Hello, ${name}`)
// console.log(shortNames)

// console.log(formalGreeting(formalNames))    // let names = formalNames //["Bernard", "Elizabeth", "Conrad", "Mary Margaret"];

// Call formalGreeting passing in the formalNames array
let maryPoppins = "Superkalafrajalistics"
let reverse = maryPoppins.split('').reverse().join('')
// console.log(reverse)
//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = [
  "Binghampton",
  "Albany",
  "New York",
  "Ithaca",
  "Auburn",
  "Rochester",
  "Buffalo",
];

const placesThatStartWithA = places.filter(city => city[0] === 'A')
// console.log(placesThatStartWithA)

/*
    Create a function called identifier that uses the filter higher order
    array method to filter over the provided jobs array of objects

    The function should return the object of the person with a job as a programmer

    Make sure to use the arrow function in conjunction with the filter method

    Your returned value should be a single object, not an array with one object inside of it                            returnedValue = {}    not [{ }]

    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [
  { receptionist: "James" },
  { programmer: "Steve" },
  { designer: "Alicia" },
];

// Do not edit the code above.

// CODE HERE
const identifier = (objJobs) => {
     let programmer = objJobs.filter((job) => job.programmer )  // => [ { programmer: 'Steve' } ]
     return programmer[0]                                       // => { programmer: 'Steve}
}

// console.log(identifier(jobs))


// call the function passing in the jobs array

//// REDUCE ////

const numArray = [0, 1, 2, 3, 4]

const myNum = numArray.filter(num => num > 2).map(num => num * 3).reduce((acc, curr) => acc - curr)
// console.log(myNum)

/*
    Edit the productOfArray function and use
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method
*/

const numsToReduce = [43, 7, 24, 79, 290];

const productOfArray = (numbers) => {
  // Code here
  return numbers.reduce((a, c) => a * c, 10);
};


// CODE HERE
 console.log(productOfArray(numsToReduce))
// call productOfArray passing in numsToReduce

/*
    Pass a callback and an initial value to reduce
    that will subtract all the expenses in the array
    from the initial budget

    This will allow us to see how much we have left
    in the budget after these expenses
*/

const budget = 2000;

const expenses = [
  {
    title: "rent",
    amount: 1000,
  },
  {
    title: "car payment",
    amount: 250,
  },
  {
    title: "food",
    amount: 300,
  },
];

// const remaining // = expenses.reduce(//callback, //initial value)
