const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });
    //scroll to the top
    scrollTo(0, 0);
    //show result on page

    result.classList.remove('d-none');
    
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output ++;
        }
    }, 10);

});

//the window object is the global object
//everything we do in js is stored in this object
// console.log('hello');
// window.console.log('hello');

// console.log(document.querySelector('form'));
//method on the window object
// setTimeout(() => {
//     alert('hello, ninjas');
// }, 3000);