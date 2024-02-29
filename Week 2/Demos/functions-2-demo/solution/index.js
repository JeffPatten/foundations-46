////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add = (num1, num2) => num1 + num2

const subtract = (num1, num2) => num1 - num2

const multiply = (num1, num2) => num1 * num2

const divide = (num1, num2) => num1 / num2

const calculator = (num1, num2, callback) => {
    if (+num1 && +num2) {
      num1 = +num1
      num2 = +num2
      return callback(num1, num2)
    } else {
      console.log('you need to send in numbers')
    }
  }

const result = calculator(1,2,add)
const otherResult = calculator(3,4,multiply)

console.log(result)
console.log(otherResult)

///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE

const applyPercentDiscount = (product, discount) => {
    product.displayPrice = product.basePrice * (1 - discount)
}

const applyFlatRateDiscount = (product, discount) => {
    product.displayPrice = product.basePrice - discount
}

const applyDiscounts = (arr, callback, discount) => {
    arr.forEach(product => {
        callback(product, discount)
    })
}

const applyDiscountsByCategory = (arr, category, callback, discount) => {
    arr.forEach(product => {
        if (product.category === category) {
            callback(product, discount)
        }
    })
} 

const applyDiscounstByInventory = (arr, callback, amount, discount) => {
    arr.forEach(product => {
        if (product.inventory < amount) {
            callback(product, discount)
        }
    })
}

applyDiscounts(dogProducts, applyPercentDiscount, .1)
console.log(dogProducts)

applyDiscounts(catProducts, applyFlatRateDiscount, 2)
console.log(catProducts)

applyDiscountsByCategory(catProducts, 2, applyPercentDiscount, .15)
console.log(catProducts)

applyDiscountsByCategory(dogProducts, 1, applyPercentDiscount, .3)
console.log(dogProducts)

applyDiscounstByInventory(dogProducts, applyFlatRateDiscount, 40, 5)
console.log(dogProducts)

applyDiscounstByInventory(catProducts, applyPercentDiscount, 40, .5)
console.log(catProducts)

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE

function makeSandwich(bread) {

    return function(ingredients) {
      let order = `You ordered a ${bread} bread sandwich with `
  
      for (let i = 0; i < ingredients.length; i++) {
  
        if (i === ingredients.length - 1 && i !== 0) {
          order += `and ${ingredients[i]}.`
        } else if (ingredients.length === 1) {
          order += `${ingredients[i]}.`
        } else {
          order += `${ingredients[i]}, `
        }
      }
  
      return order
  
    }
}

const makeWheatSandwich = makeSandwich('wheat')
const makeRyeSandwich = makeSandwich('rye')


makeWheatSandwich(['pickles', 'cheese', 'ham', 'lettuce'])
makeWheatSandwich(['turkey'])