const person = {
    firstName: 'Jeff',
    lastName: 'Patten',
    age: 32
}

// console.log(person.lastName);
// console.log(person['lastName'])

let meal = { 
    appetizer: 'Cheddar Bites', 
    entree: 'Steak and loaded mashpotatoes', 
    dessert: 'Cheesecake', 
    drink: 'Water' 
}

// let {dessert} = meal; // let dessert = meal.dessert
// console.log(dessert);

let {appetizer, entree} = meal // let appetizer = meal.appetizer, let entree = meal.entree
// console.log(appetizer, entree);

let { drink: agua } = meal // let agua = meal.drink
// console.log(drink)
// console.log(eau)

// for (key in meal) {
//     console.log(`${key} has the value of ${meal[key]}`);
// }

meal.sides = 'veggies, fries'
// console.log(meal)

delete meal.sides
// console.log(meal)

// Classes

class Dog {
    constructor(petName, breed, age) {
      this.name = petName
      this.breed = breed
      this.age = age
    }

    greeting() {
        console.log(`Hi, my name is ${this.name} and I am a ${this.age} year old ${this.breed}`)
    }
  }

  let lassie = new Dog('Lassie', 'Collie', 3);
//   console.log(lassie.name)
//   lassie.greeting()
  
  let beethoven = new Dog('Beethoven', 'Saint Bernard', 4)
//   console.log(beethoven.name)
//   beethoven.greeting()

//   for (key in lassie) {
    //     console.log(lassie[key])
    //   }
    
    class Puppy extends Dog {
        constructor(petName, breed, age, trainingLevel){
            super(petName, breed, age)
            
            this.trainingLevel = trainingLevel
        }
        
        levelUp(num) {
            this.trainingLevel += num
            console.log(this.trainingLevel)
        }
    }
    
    let squirt = new Puppy('Squirt', 'Labradoodle', 0.5, 20)
    // console.log(squirt)
    // console.log(squirt.greeting())
    // console.log(squirt.levelUp(40))

    // console.log(beethoven.levelUp(10))   This won't work because levelUp() is not a method on the Dog class, and beethoven is an instance of the Dog class.