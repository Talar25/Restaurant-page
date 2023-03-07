import './normalize.css';
import './general.css';
import './style.css';



function component() {
    const element = document.createElement('div');
 
    // Lodash, now imported by this script
    element.innerHTML = 'this is my restaurant page!'
   element.classList.add('hello');
 
    return element;
  }
 
  document.body.appendChild(component());