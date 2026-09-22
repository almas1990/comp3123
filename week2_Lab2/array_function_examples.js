// COMP 3123 - Lab 2
// ES6 Practice Exercises


// ========================
// Exercise 1
// ========================

const greeter = (myArray, counter) => {
    const greetText = "Hello";

    for (const name of myArray.slice(0, counter)) {
        console.log(`${greetText} ${name}`);
    }
};

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);


// ========================
// Exercise 2
// ========================

const capitalize = ([first, ...rest]) => {
    return first.toUpperCase() + rest.join('');
};

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));


// ========================
// Exercise 3
// ========================

const colors = ['red', 'green', 'blue'];

const capitalizedColors = colors.map(color => capitalize(color));

console.log(capitalizedColors);


// ========================
// Exercise 4
// ========================

const values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20);


// ========================
// Exercise 5
// ========================

const array = [1, 2, 3, 4];

const calculateSum = array.reduce(
    (total, number) => total + number,
    0
);

const calculateProduct = array.reduce(
    (total, number) => total * number,
    1
);

console.log(calculateSum);
console.log(calculateProduct);


// ========================
// Exercise 6
// ========================

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
}

const mySedan = new Sedan("Honda Civic", 2024, 25000);

console.log(mySedan);