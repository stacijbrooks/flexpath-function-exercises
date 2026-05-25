import { fileURLToPath } from "url";

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  // Change this to run different exercises
  exercise_19();
}

// ---------------------------------------------------
// Exercise 1
// ---------------------------------------------------

function exercise_01() {
  /*
    Write a function declaration named calculateArea
    that returns the area of a circle.
  */

  function calculateArea(radius) {
    return Math.PI * radius * radius;
  }

  console.log(calculateArea(5));
}

// ---------------------------------------------------
// Exercise 2
// ---------------------------------------------------

function exercise_02() {
  /*
    Convert calculateArea into a function expression
  */

  let calculateArea = function (radius) {
    return Math.PI * radius * radius;
  };

  console.log(calculateArea(5));
}

// ---------------------------------------------------
// Exercise 3
// ---------------------------------------------------

function exercise_03() {
  /*
    Rewrite calculateArea as an arrow function
  */

  const calculateArea = (radius) => {
    return Math.PI * radius * radius;
  };

  console.log(calculateArea(5));
}

// ---------------------------------------------------
// Exercise 4
// ---------------------------------------------------

function exercise_04() {
  /*
    Validate an email
  */

  function isValidEmail(email) {
    let atSymbol = email.indexOf("@");
    let dotSymbol = email.lastIndexOf(".");

    return (
      atSymbol > 0 &&
      dotSymbol > atSymbol + 1 &&
      dotSymbol < email.length - 1
    );
  }

  console.log(isValidEmail("test@email.com"));
  console.log(isValidEmail("bademail"));
}

// ---------------------------------------------------
// Exercise 5
// ---------------------------------------------------

function exercise_05() {
  /*
    Default parameters
  */

  function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
  }

  console.log(greet("Staci"));
  console.log(greet("Staci", "Welcome"));
}

// ---------------------------------------------------
// Exercise 6
// ---------------------------------------------------

function exercise_06() {
  /*
    Scope example
  */

  let message = "Global";

  function showMessage() {
    let message = "Local";
    console.log(message);
  }

  showMessage();
  console.log(message);

  /*
    OUTPUT:
    Local
    Global

    WHY:
    The variable inside the function is local scope.
    The variable outside the function is global scope.
  */
}

// ---------------------------------------------------
// Exercise 7
// ---------------------------------------------------

function exercise_07() {
  /*
    Local scope
  */

  function incrementCounter() {
    let counter = 0;

    counter++;

    console.log(counter);
  }

  incrementCounter();
  incrementCounter();

  /*
    OUTPUT:
    1
    1

    WHY:
    counter resets every time the function runs
    because it only exists inside the function.
  */
}

// ---------------------------------------------------
// Exercise 8
// ---------------------------------------------------

function exercise_08() {
  /*
    Returning functions
  */

  function makeMultiplier(multiplier) {
    return function (number) {
      return number * multiplier;
    };
  }

  const double = makeMultiplier(2);

  console.log(double(5));
}

// ---------------------------------------------------
// Exercise 9
// ---------------------------------------------------

function exercise_09() {
  /*
    Recursive factorial
  */

  function factorial(n) {
    if (n < 0) {
      console.log("Bad number input");
      return;
    }

    if (n === 0 || n === 1) {
      return 1;
    }

    return n * factorial(n - 1);
  }

  console.log(factorial(5));
}

// ---------------------------------------------------
// Exercise 10
// ---------------------------------------------------

function exercise_10() {
  /*
    forEach
  */

  const fruits = ["apple", "banana", "cherry"];

  fruits.forEach(function (fruit) {
    console.log(fruit);
  });
}

// ---------------------------------------------------
// Exercise 11
// ---------------------------------------------------

function exercise_11() {
  /*
    reduce()
  */

  const numbers = [1, 2, 3, 4, 5];

  const sum = numbers.reduce(function (total, currentNumber) {
    return total + currentNumber;
  }, 0);

  console.log(sum);
}

// ---------------------------------------------------
// Exercise 12
// ---------------------------------------------------

function exercise_12() {
  /*
    filter()
  */

  const numbers = [10, 15, 20, 25, 30];

  const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
  });

  console.log(evenNumbers);
}

// ---------------------------------------------------
// Exercise 13
// ---------------------------------------------------

function exercise_13() {
  /*
    Primitives vs objects
  */

  let num = 5;

  function changePrimitive(value) {
    value = 10;
  }

  changePrimitive(num);

  console.log(num);

  let person = {
    name: "John",
  };

  function changeObject(obj) {
    obj.name = "Bob";
  }

  changeObject(person);

  console.log(person);

  /*
    Primitive values are copied.

    Objects are passed by reference,
    so changes affect the original object.
  */
}

// ---------------------------------------------------
// Exercise 14
// ---------------------------------------------------

function exercise_14() {
  /*
    Objects passed by reference
  */

  function addAge(person) {
    person.age = 30;
  }

  let user = {
    name: "Alice",
  };

  addAge(user);

  console.log(user);
}

// ---------------------------------------------------
// Exercise 15
// ---------------------------------------------------

function exercise_15() {
  /*
    find()
  */

  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  const foundUser = users.find(function (user) {
    return user.name === "Bob";
  });

  console.log(foundUser);
}

// ---------------------------------------------------
// Exercise 16
// ---------------------------------------------------

function exercise_16() {
  /*
    Object.entries()
  */

  const person = {
    name: "John Doe",
    age: 30,
    occupation: "Engineer",
  };

  Object.entries(person).forEach(function ([key, value]) {
    console.log(key, value);
  });
}

// ---------------------------------------------------
// Exercise 17
// ---------------------------------------------------

function exercise_17() {
  /*
    Capitalize strings
  */

  function capitalizeStrings(strings) {
    return strings.map(function (word) {
      return word.charAt(0).toUpperCase() +
        word.slice(1).toLowerCase();
    });
  }

  console.log(capitalizeStrings(["hELLo", "wORLD"]));
}

// ---------------------------------------------------
// Exercise 18
// ---------------------------------------------------

function exercise_18() {
  /*
    Default exponent
  */

  function power(base, exponent = 2) {
    return Math.pow(base, exponent);
  }

  console.log(power(5));
  console.log(power(2, 3));
}

// ---------------------------------------------------
// Exercise 19
// ---------------------------------------------------

function exercise_19() {
  /*
    IIFE
  */

  (function () {
    console.log("This function runs immediately!");
  })();
}