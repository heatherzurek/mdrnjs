//FORMS AND FORM EVENTS
// when listening for submit event we dont listen for a submit event.target.addEventListener
//we can get the value of the form by doing a const or doing dot notation with the name of the ID
const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;


form.addEventListener('submit', e => {
    e.preventDefault();
    //console.log(form.username.value);
    //console.log(username.value);
    //validation
    const username = form.username.value;
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

// let result = pattern.test(username);
// if(result){
//     console.log('the regex test passed');
// } else {
//     console.log('regex test failed');
// }
// let result = username.search(pattern);
// console.log(result);
//returns the position of the match

//keyup event 
//live feedback
form.username.addEventListener('keyup', e => {
    console.log(e);
    // console.log(e.target.value, form.username.value);
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
        console.log('passed');
    } else {
        form.username.setAttribute('class', 'error');

        console.log('failed');
    }
});