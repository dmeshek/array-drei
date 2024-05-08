// Array 1_2 (map)
const drinks = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta']

const upperDrinks: string[] = drinks.map(drinks => drinks.toUpperCase());
// Ergebnis: ["COCA-COLA".......]
console.log(upperDrinks);
// 'i like drink' ausgeben
drinks.map(drink => console.log(`I like ${drink}`));

// Array 1_4 (map)
let fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];

let celsiusTemperaturen = fahrenheit.map(fahrenheit => {
    return (fahrenheit - 32) / 1.8;
});

console.log(celsiusTemperaturen);


// Array 1_5 (map)
let checkNumber: number[] = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];

let modifiedNumbers = checkNumber.map(checkNumber => {
    if (checkNumber % 3 === 0) {
        return checkNumber + 100;
    } else {
        return checkNumber;
    }
});

console.log(modifiedNumbers);

// Array 1_6 (map oder forEach)
