const apples: number = 5;
const speed: string = 'Fast';
const hasName: boolean = true;
const nothing: null = null;
const notSure: undefined = undefined;

// Built in objects
const current: Date = new Date();

// Array
const colors: string[] = ['blue', 'green', 'red'];
const numbersList: number[] = [1, 2, 3, 4, 5];
const bools: boolean[] = [false, false, true];

// Classes
class Car {}

const car: Car = new Car();

// Object literal - holy disgusting
const point: { x: number; y: number } = {
    x: 10,
    y: 30
};

// Function - holy grail of disgusting
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// When to use annotation
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coords: { x: number; y: number } = JSON.parse(json);
console.log(coords);

// 2) When we declare a variable on one line and init it later
let words = ['red', 'yellow', 'orange'];
let foundWord: boolean;

for (let i = 0; i < words.length; i += 1) {
    if (words[i] === 'orange') {
        foundWord = true;
    }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
