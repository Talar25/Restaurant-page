import './css/normalize.css';
import './css/general.css';
import './css/style.css';
import { startSite } from './modules/start';
import { slider } from './modules/slider';
const nav = document.querySelector('.nav')
const buttons = document.querySelectorAll('.btn')

startSite();
slider();

// buttons.forEach(btn => {
//     if(btn.classList.contains('home')){
//         // btn.addEventListener('click', slider)
//         startSite();    
//         slider()
//     }})


// function component() {
//     const element = document.createElement('div');
 
//     // Lodash, now imported by this script
//     element.innerHTML = 'this is my restaurant page!'
//    element.classList.add('hello');
 
//     return element;
//   }
 
//   document.body.appendChild(component());