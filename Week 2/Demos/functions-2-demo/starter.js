// const innerFn = () => {
//   return 'I am a callback!'
// }
// const anotherInner = () => 'Hello there'

// const outerFn = (callback, index, arr) => console.log(callback()) // console.log('I am a callback')

// outerFn(innerFn)
// someFunction(innerFn)

// outerFn(anotherInner)

// function declaration
// function outerFn(callback) {
//   console.log(callback())
// }

// passing in an anonymous arrow function
// outerFn(   () => 'Fancy pants string', 0, arr    )

// function someFunction ( string, number, boolean, arr, obj ) {
//   cbFunc()
// }

// const createAdder = x => (y) => x + y

// here's the same function written as a declaration
// function createAdder(x) {
//    return function(y) {
//        return x + y
//    }
// }

// const addFive = createAdder(5)
// function addFive (y) {
//   return 5 + y
// }

// const addTen = createAdder(10)
// function addTen (y) {
//   return 10 + y
// }

// addFive(12) // output: 17
// addFive(40) // output: 45
// addTen(3) // output: 13

////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const calculator = (num1, num2, cb) => {
  if (+num1 && +num2) {
    num1 = +num1;
    num2 = +num2;
    return cb(num1, num2);
  } else {
    console.log("you need to send in numbers");
  }
};

// console.log(calculator('hi', 2, add))
// console.log(calculator('2', 2, add))

const result = calculator(3, 7, multiply);
const otherResult = calculator(5, 70, divide);

console.log(result);

// console.log('b'+ 'a'+ +'n' + 'a')
// console.log(+'3')

///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
  {
    name: "leash",
    colors: ["red", "blue", "green"],
    category: 1,
    inventory: 30,
    basePrice: 13.99,
    displayPrice: 13.99,
  },
  {
    name: "chew toy",
    colors: ["brown"],
    category: 2,
    inventory: 120,
    basePrice: 6.0,
    displayPrice: 6.0,
  },
  {
    name: "rope",
    colors: ["blue & green", "red & yellow"],
    category: 2,
    inventory: 75,
    basePrice: 4.99,
    displayPrice: 4.99,
  },
];

const catProducts = [
  {
    name: "mouse toy",
    colors: ["pink", "grey", "black"],
    category: 2,
    inventory: 125,
    basePrice: 2.5,
    displayPrice: 2.5,
  },
  {
    name: "cat sweater",
    colors: ["black"],
    category: 1,
    inventory: 15,
    basePrice: 10.0,
    displayPrice: 10.0,
  },
  {
    name: "straching post",
    colors: ["tan"],
    category: 2,
    inventory: 40,
    basePrice: 22.99,
    displayPrice: 22.99,
  },
];

// CODE HERE

const applyPercentDiscount = (product, discount) => {
  product.displayPrice = product.basePrice * (1 - discount); // 1 - .25   or 1 - (25/100)
};

const applyFlatRateDiscount = (product, discount) => {
  product.displayPrice = product.basePrice - discount;
};

const applyDiscounts = (arr, callback, discount) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], discount);                              // function()
  }
};

applyDiscounts(dogProducts, applyPercentDiscount, .1)
console.log(dogProducts)

const applyDiscountsByCategory = (arr, category, callback, discount) => {
  for (let i = 0 ; i < arr.length; i++) {
    if(arr[i].category === category ) {
      callback(arr[i], discount)
    }
  }
}

// applyDiscountsByCategory(catProducts, 2, applyFlatRateDiscount, 3)
// console.log(catProducts)

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
