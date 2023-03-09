import { renderHome } from "./home";
import { renderMenu } from "./menu";
import { renderContact } from "./contact";


const createNav = () => {
    
    const nav = document.createElement('nav');
    nav.classList.add('nav')


    //home button
    const homeButton = document.createElement('a');
    homeButton.classList.add('btn')
    homeButton.href = '#';
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', renderHome);


    //menu button
    const menuButton = document.createElement('a');
    menuButton.classList.add('btn')
    menuButton.href = '#';
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', renderMenu);


    //contact button
    const contactButton = document.createElement('a');
    contactButton.classList.add('btn')
    contactButton.href = '#';
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', renderContact);



    nav.appendChild(homeButton)
    nav.appendChild(menuButton)
    nav.appendChild(contactButton)


    return nav;
}

const createHeader = () => {
    const header = document.createElement('header');

    const container = document.createElement('div');
    container.classList.add('container');

    const heading = document.createElement('h1');
    heading.classList.add('heading-primary');
    heading.textContent = 'Cats pizzeria';




    container.appendChild(heading);
    container.appendChild(createNav());

    header.appendChild(container)

    return header;
}

const createMain = () => {
    const main = document.createElement('main')
    main.id = 'main'

    return main;
}


const createFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer')
    const paragraph = document.createElement('p');

    const time = new Date().getFullYear();

    paragraph.innerHTML = `Copyright © ${time}<a href="https://github.com/Talar25">Talar25</a>`;

    footer.appendChild(paragraph);

    return footer;
}


export const startSite = () => {
    const content = document.getElementById('content');
    content.appendChild(createHeader())
    content.appendChild(createMain())
    content.appendChild(createFooter())

    renderHome();
}
