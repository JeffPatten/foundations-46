// For the following problems, please type out the answer
// to each problem instruction. Answers are expected to
// be valid JS code, unless stated otherwise.

// *** Problem 1 ***
//  Students should be able to create a class, instantiate it,
//  and be able to utilize the instance's methods and properties

// 1.1
//  Create a class called Animal. Animals should have
//  the properties: weightInLbs (a number), isVertebrate
//  (a boolean), and primaryColor (a string). Make sure
//  to give the class a constructor. The constructor
//  should have three parameters to set the three properties
//  mentioned.
//  Also, Animal should have the following methods:
//   - incWeight:
//       which has one parameter: a weight.
//       The method will change the object's weightInPounds property
//       to be the current weightInPounds plus the weight passed in.
//   - printColor:
//       this method has no parameters and both logs and returns
//       the animal's primaryColor.

class Animal {
    constructor(name, age){
        this.nickName = name
        this.years = age
    }
    
    printName() {
        console.log(`My name is ${this.nickName}`)
        return `My name is ${this.nickName}`
    }
}

// 1.2
//  Make two instances of the Animal class, with any values you
//   please, that are the correct data type (as mentioned above).
//   Save the instances to variables.

let garfield = new Animal('Garfield', 4)
garfield.printName()

// 1.3
//  For both of the object instances made in problem 1.2, call
//  both the incWeight method (passing in a number) and the
//  printColor method. Save the printColor invocations to variables.



// 1.4
//  Save the weights of the objects made in 1.2 to variables.
//  Log these values to the console. Also, log both of the
//  objects (the entire things) to the console.



// *** Problem 2 ***
//  Students should be able to create an extended (or child) class

// 2.1
//  Create a class called Dog that extends the Animal class.
//  In addition to what all Animals have, Dogs should have
//  the properties: breed (a string), heightAtWithersInInches
//  (a number), name (a string), and isGoodPupper (a boolean).
//  Make sure to give the class a constructor. The constructor
//  should have five parameters to help set both two of the three
//  properties from the parent class from problem 1.1, and three
//  of the four properties specific to Dogs. All dogs are vertebrates,
//  so instead of passing a constructor parameter to the super function
//  for the isVertebrate property of the parent class, the Dog class's
//  super function will simply pass the boolean, true, for isVertebrate.
//  In addition, the isGoodPupper property does not need to
//  have a parameter in the constructor: all dogs are good puppers,
//  so the constructor will always set this property to true.
//  Also, Dog should have the following methods:
//   - bark:
//       which has no parameters and simply logs "bow-wow".
//   - setName:
//       which has one parameter: a name.
//       The method will change the object's name property
//       to be the name passed in.

class Dog extends Animal {
    constructor(name, age, isGood) {
        super(name, age)
        this.isAGoodPupper = isGood

    }

    bark() {
        console.log("bow-wow")
    }

}

// 2.2
//  Make two instances of the Dog class, with any values you
//   please, that are the correct data type (as mentioned above).
//   Save the instances to variables.

let odie = new Dog('Odie', 2, true)
odie.printName()
odie.bark()

// 2.3
//  For both of the object instances made in problem 2.2, call
//   both the incWeight method (passing in a number) and the
//   bark method.



// 2.4
//  Log both of the Dog objects (the entire things) to the console.


