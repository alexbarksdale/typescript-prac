const carMakes: string[] = ['ford', 'bmw', 'kia'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla']];

// Help with inference when extracting values
const car = carMakes[0];
const myCar = carMakes.pop();

// Prevent incompatible values
// carMakes.push(100);

// Help with 'map'
carMakes.map((car: string): string => {
    return car.toUpperCase();
});

// Flexible types
const impDates: (Date | string)[] = [new Date(), '2030-10-10'];
impDates.push('2020-03-12');
impDates.push(new Date());
