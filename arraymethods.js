//5 Array methods

//FILTER METHOD
//iterates an array and preforms a check on each item inside a callback function
//if that check passes, its going to keep that item inside the filtered array
//if it doesnt, it will remove it
// const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = scores.filter((score) => {
//     return score > 20;
// });

// console.log(filteredScores);

const users = [
    {name: 'heather', premium: true},
    {name: 'desmond', premium: false},
    {name: 'bryan', premium: false},
    {name: 'tucker', premium: true}
];

const premiumUsers = users.filter(user => {
    return user.premium;
});

console.log(premiumUsers);


const parks = [
    {name: 'Glacier', visted: false},
    {name: 'Rocky Mountain', visted: true},
    {name: 'Great Sand Dunes', visted: true},
    {name: 'Yellowstone', visted: false},
    {name: 'Zion', visted: true},
    {name: 'Arches', visted: true},
    {name: 'Rainier', visted: false},
];

const vistedParks = parks.filter((park) => {
    return park.visted;
});

console.log(vistedParks);


//MAP METHOD
// takes an array and maps it into a new array
// iterates an array and returns an updated value and pushes it into a new array
//cycles through an array
//creates new array based on that array
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map(price => {
    return price / 2;
});

console.log(salePrices);

// const products = [
//     {name: 'gold star', price: 20},
//     {name: 'mushroom', price: 40},
//     {name: 'green shells', price: 30},
//     {name: 'banana skin', price: 10},
//     {name: 'red shells', price: 50},
// ];

// const saleProducts = products.map(product => {
//     if(product.price > 30){
//         return {name: product.name, price: product.price / 2};
//     } else {
//         return product;
//     }
// });

// console.log(saleProducts);

//REDUCE METHOD
//can return any single value based on the values in the array that we iterate over
//iterates an array
//preforms callback
//returns value
// const scores = [10, 20, 60, 40, 70, 90, 30];

// const overFifty = scores.reduce((acc, curr) => {
//     if(curr > 50){
//         acc++;
//     }
//     return acc;
// }, 0);

// console.log(overFifty);


const scores = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 5},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 4},
    {player: 'crystal', score: 60}
]

const marioTotal = scores.reduce((acc, curr) => {
    if(curr.player === 'mario'){
        acc += curr.score;
    }
    return acc;
}, 0);

console.log(marioTotal);

//FIND METHOD
//iterate the array and fire a cb for each item
//as soon as it passes a certain condition it will return that value
//and wont carry on

const scoreArr = [10, 5, 0, 40, 50, 20, 60, 40, 70, 90, 30];

const firstHighScore = scoreArr.find((score) => {
    return score > 50;
});

console.log(firstHighScore);

const natParks = ['zion', 'arches', 'rocky mountain', 'olympic'];

const firstPark = natParks.find((park) => {
    return park === 'olympic';
});

console.log(firstPark);



//SORT METHOD

const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
//doesnt create new array
//alters directly
// names.sort();
names.reverse();
console.log(names);



const moreScores = [10, 50, 20, 4, 32, 70, 34];

moreScores.sort();
console.log(moreScores);

const playerScores = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'heather', score: 70},
    {player: 'mary', score: 60},
    {player: 'john', score: 5},
    {player: 'yoshi', score: 30},
    {player: 'brad', score: 4},
    {player: 'crystal', score: 60}
];

// playerScores.sort((a,b) => {
//     if(a.score > b.score){
//         return -1;
//     } else if (b.score > a.score){
//         return 1;
//     } else {
//         return 0;
//     }
// });

// console.log(playerScores);

playerScores.sort((a,b) => {
    return b.score - a.score;
});

console.log(playerScores)


//CHAINING ARRAY METHODS

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50},
];

// const filtered = products.filter(product => product.price > 20);

// const promos = filtered.map(product => {
//     return `the ${product.name} is ${product.price / 2} dollars`
// });

const promos = products
    .filter(product => product.price > 20)
    .map(product =>  `the ${product.name} is ${product.price / 2} dollars`);

console.log(promos);

