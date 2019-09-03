//5 Array methods

//FILTER METHOD
//iterates an array and preforms a check on each item inside a callback function
//if that check passes, its going to keep that item inside the filtered array
//if it doesnt, it will remove it
const scores = [10, 30, 15, 25, 50, 40, 5];

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

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50},
];

const saleProducts = products.map(product => {
    if(product.price > 30){
        return {name: product.name, price: product.price / 2};
    } else {
        return product;
    }
});

console.log(saleProducts);