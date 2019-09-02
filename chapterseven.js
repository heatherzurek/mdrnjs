//FORMS AND FORM EVENTS
// when listening for submit event we dont listen for a submit event.target.addEventListener
//we can get the value of the form by doing a const or doing dot notation with the name of the ID
const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();
    //console.log(form.username.value);
    //console.log(username.value);
    //validation
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/;

    if(usernamePattern.test(username)){
        //feedback good info
        feedback.textContent = 'That username is valid.';
    } else {
        //feedback help info
        feedback.textContent = 'Username must contain letters only and be between 6 and 12 characters long.';
    }
});

//RegEx
//Matching patterns
const username = 'heather';
const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);
// if(result){
//     console.log('the regex test passed');
// } else {
//     console.log('regex test failed');
// }

let result = username.search(pattern);
console.log(result);
//returns the position of the match

