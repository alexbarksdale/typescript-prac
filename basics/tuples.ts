const drink = {
    color: 'red',
    carbonated: true,
    sugar: 40
};

// This is a tuple not an array
// const pepsi: [string, boolean, number] = ['brown', true, 40];

// V2
// Type alias
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 30];

