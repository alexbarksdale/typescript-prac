// Bad
class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfString {
    constructor(public collection: string[]) {}

    get(index: number): string {
        return this.collection[index];
    }
}

//Good
class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
        return this.collection[index];
    }
}

new ArrayOfAnything<string>(['a', 'b', 'c']);

/*========================================*/
/*Example of generics with functions*/
/*========================================*/

// Bad
function printStrings(arr: string[]): void {
    for (let i = 0; i < arr.length; i += 1) {
        console.log(arr[i]);
    }
}

function printNumbers(arr: number[]): void {
    for (let i = 0; i < arr.length; i += 1) {
        console.log(arr[i]);
    }
}

// Good
function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i += 1) {
        console.log(arr[i]);
    }
}

printAnything<string>(['a', 'b', 'c']);

/*========================================*/
/*Generic Contraints*/
/*========================================*/

class Car {
    print() {
        console.log('Car');
    }
}

class House {
    print() {
        console.log('house');
    }
}

interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i += 1) {
        arr[i].print();
    }
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
