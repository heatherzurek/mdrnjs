//OBJECTS
//objects have properties, and things it can do(methods)

//object literal notation
//key value pair: name: 'heather',
let user = {
    name: 'Heather Zurek',
    age: 29,
    email: 'Heather.Zurek@gmail.com',
    location: 'Portland, Oregon',
    blogs: [
        { title: 'Why mac and cheese rules', likes: 30 },
        { title: 'Dogs are cool', likes: 103 }
    ],
    login(){
        console.log('The user logged in');
    },
    logout(){
        console.log('The user logged out');
    },
    logBlogs(){
        //this. is a context object
        console.log('This user has written the follow blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};
user.logBlogs();

user.login();
user.logout();
//string method
// const petName = 'desmond';
// console.log(petName.toUpperCase());


// console.log(user.location);

// user.age = 29;
// console.log(user.age);

// user['name'] = 'Desmond Zurek';

// const key = 'location';

// console.log(user['name']);
// console.log(user[key]);

// console.log(typeof user);

//MATH OBJECT

console.log(Math.PI)
console.log(Math.E)

const area = 7.5;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// geneterate random numbers

const random = Math.random();


console.log(random);
console.log(Math.round(random* 100));

//Primitive Types numbers, strings, booleans, null, undefined, symbols
//stored on the stack


//Reference types all types of objects, object literals, arrays, functions, dates, all other objects
//stored on the heap


let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne} scoreTwo: ${scoreTwo}`);

scoreOne = 100;

console.log(`scoreOne: ${scoreOne} scoreTwo: ${scoreTwo}`);
//when you make a copy of primitive values, when you change one, the other doesnt change

//reference values change

const userOne = { name: 'heather', age: 29 };
const userTwo = userOne;

console.log(userOne, userTwo)

userOne.age = 40;

console.log(userOne, userTwo)
