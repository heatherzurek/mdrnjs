//DOM - Document object model 
//created by the browserr
//creates a 'document' object

//querying the dom

// const para = document.querySelector('body > h1');

// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// paras.forEach(para => {
//     console.log(para);
// });
// console.log(paras[2]);

// console.log(errors);

//get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);
//get elements by their class name
//returns HTMLcollection, you cannot use a forEach on an HTMLcollection
// const error = document.getElementsByClassName('error');
// console.log(error);
//get elements by their tag name
//returns HTMLcollection
// const paragraphs = document.getElementsByTagName('p');
// console.log(paragraphs[1]);

// const para = document.querySelector('p');

//console.log(para.innerText);
// para.innerText += ' ninjas are awesome';

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

// const content = document.querySelector('.content');

// content.innerHTML += '<h2>This is a new h2</h2>';

// console.log(content.innerHTML);

// const people = ['petunia', 'tundra', 'oren'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });


// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetnina.co.uk');
// link.innerText = 'The net ninja';

// const msg = document.querySelector('p');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success');
// msg.setAttribute('style', 'color: green');

// const title = document.querySelector('h1');
// console.log(title.style);

// const content = document.querySelector('h1');
// console.log(content.classList);
// content.classList.add('success');

const paras = document.querySelectorAll('p');

paras.forEach(p => {
    console.log(p.textContent);
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    if(p.textContent.includes('success')){
        p.classList.add('success');
    }
});

const title = document.querySelector('.title');

title.classList.toggle('test');
title.classList.toggle('test');

