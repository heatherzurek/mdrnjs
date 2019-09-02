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


