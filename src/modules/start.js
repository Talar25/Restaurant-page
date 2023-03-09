import { renderHome } from "./home";
import { renderMenu } from "./menu";
import { renderContact } from "./contact";

const createHeader = () => {
    const header = document.createElement('header');

    const container = document.createElement('div');
    container.classList.add('container');

    const heading = document.createElement('h1');
    heading.classList.add('heading-primary');
    heading.textContent = 'Cats pizzeria';

    const nav = document.createElement('nav');
    nav.classList.add('nav')

    const buttons = ['Home', 'Menu', 'Contact']

    for(let i = 0; i < buttons.length; i++) {
        const button = document.createElement('a');
        button.classList.add('btn')
        button.href = '#';
        button.textContent = buttons[i];

        nav.appendChild(button);
    }

    container.appendChild(heading);
    container.appendChild(nav);

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