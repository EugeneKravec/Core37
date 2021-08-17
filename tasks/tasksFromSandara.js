
// Удалить из массива ученых, что родились в 15, 16 или 17 столетии
const arr = [
    { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
    { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
    { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
    { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
    { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 },
    { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 6 },
    { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 7 },
    { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },
    { name: "Ada", surname: "Lovelace", born: 1879, dead: 1852, id: 9 },
    { name: "Sarah E.", surname: "Goode", born: 1879, dead: 1905, id: 10 },
    { name: "Lise", surname: "Meitner", born: 1879, dead: 1968, id: 11 },
    { name: "Hanna", surname: "Hammarström", born: 1870, dead: 1909, id: 12 },
];

const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Dragon breath", price: 780 },
        { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
        return this.potions;
    },
    addPotion(newPotion) {

        for (let i = 0; i < this.potions.length; i++) {
            if (newPotion.name === this.potions[i].name) {
                return `Error! Potion ${newPotion.name} is already in your inventory!`;
            }
        }
        return this.potions.push(newPotion);
    },
    removePotion(potionName) {

        for (let i = 0; i < this.potions.length; i++) {
            if (potionName === this.potions[i].name) {
                return this.potions.splice(i, 1);

            }

        }
        return `Potion ${potionName} is not in inventory!`;

    },
    updatePotionName(oldName, newName) {

        for (let i = 0; i < this.potions.length; i++) {
            if (oldName === this.potions[i].name) {
                return this.potions[i].name = newName

            }
        }
        return `Potion ${oldName} is not in inventory!`;

    },
    // Change code above this line
};

console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
console.log(atTheOldToad.addPotion({ name: "Stone skin2", price: 240 }));
console.log(atTheOldToad.removePotion("Dragon breath"));
console.log(atTheOldToad.potions);
console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));