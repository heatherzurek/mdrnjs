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

// const paras = document.querySelectorAll('p');

// paras.forEach(p => {
//     console.log(p.textContent);
//     if(p.textContent.includes('error')){
//         p.classList.add('error');
//     }
//     if(p.textContent.includes('success')){
//         p.classList.add('success');
//     }
// });

// const title = document.querySelector('.title');

// title.classList.toggle('test');
// title.classList.toggle('test');

//node tree is visual representation of dom
//elements on same level are siblings
//parent such as div, with p would be their children

// const article = document.querySelector('article');

// console.log(article.children);
// Array.from(article.children).forEach((child) => {
//     child.classList.add('article-element');
// });

// const title = document.querySelector('h2');
// //node relations
// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);
// //chaining to traverse the DOM
// console.log(title.nextElementSibling.parentElement.children);

//query the dom
//event listener
//callback

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('you clicked me');
// });

// const ul = document.querySelector('ul');
// ul.remove();
// const ul = document.querySelector('ul');
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     // ul.innerHTML += '<li>something new</li>';
//     const li = document.createElement('li');
//     li.textContent = 'something new to do';
//     // ul.prepend(li);
//     ul.append(li);
// });

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', e => {
//         // console.log('item clicked');
//         // console.log(e);
//         // console.log(e.target);
//         console.log('event in li');
//         e.stopPropagation();
//         // e.target.style.textDecoration = 'line-through';
//         e.target.remove();
//     });
// });

// ul.addEventListener('click', e => {
//     // console.log('event in ul');
//     if(e.target.tagName === 'LI'){
//         e.target.remove();
//     }
// });


// const pets = ['desmond', 'tucker', 'jacob'];

// pets.forEach(pet => {
//     console.log(pet);
// });

// const plants = ['fern', 'lupine', 'dogwood', 'rose bush'];
// plants.forEach(plant => {
//     console.log(plant);
// });

// const dogs = ['corgi', 'german shepard', 'bull terrier', 'lab'];

// dogs.forEach(dog => {
//     console.log(dog);
// });

// const flowers = ['rose', 'peony', 'daisy', 'dahlia', 'sunflower', 'petunia'];

// flowers.forEach(flower => {
//     console.log(flower);
// });

// const toDoList = ['walk the dog', 'pay the bills', 'do the laundry', 'wash the car'];

// toDoList.forEach(toDo => {
//     console.log(toDo);
// });

// const clothing = ['shirt', 'pants', 'socks', 'jacket', 'hat', 'pajamas'];

// clothing.forEach(clothes => {
//     console.log(clothes);
// })

// const nationalParks = ['Mount Rainer', 'Crater Lake', 'Olymic', 'Rocky Mountain', 'Zion', 'Arches'];
// nationalParks.forEach(park => {
//     console.log(park);
// });

// const bigCats = ['tiger', 'cheetah', 'leopard', 'jaguar', 'cougar'];

// bigCats.forEach(bigCat => {
//     console.log(bigCat);
// });
//Event bubbling and event delegration

// const copy = document.querySelector('.copy-me');

// copy.addEventListener('copy', () => {
//     console.log('OI! my content is copyright');
// });

// const box = document.querySelector('.box');

// box.addEventListener('mousemove', e => {
//     // console.log('x: ', e.offsetX);
//     // console.log('y: ', e.offsetY);
//     box.textContent = `x position - ${e.offsetX} y position - ${e.offsetY}`;
// });


// document.addEventListener('wheel', e => {
//     console.log(e.pageX, e.pageY);
// });

