import cat1 from '../img/cat-1'
import cat2 from '../img/cat-2'
import cat3 from '../img/cat-3'
import cat4 from '../img/cat-4'
import cat5 from '../img/cat-5'
import cat6 from '../img/cat-6'


const createHero = function () {

    //creation
    const section = document.createElement('section');
    section.classList.add('hero-section')

    const container = document.createElement('div');
    container.classList.add('container');

    const heroBox = document.createElement('div');
    heroBox.classList.add('hero-box');

    const heroText = document.createElement('div');
    heroText.classList.add('hero-text');

    const heading = document.createElement('h2');
    heading.classList.add('heading-secondary');
    

    heading.innerHTML = 'Welcome to the best pizzeria <span>with cats!</span>'

    const div = document.createElement('div');


    const button = document.createElement('a');
    button.classList.add('hero-btn');
    button.href = '#'
    button.textContent = 'Look what we have..';

    //appending
    heroText.appendChild(heading);

    heroBox.appendChild(heroText)
    heroBox.appendChild(div)

    container.appendChild(heroBox)
    container.appendChild(button)

    section.appendChild(container)

    return section;
}

const createGallery = function (where) {

    for(let i = 1; i < 7; i++) {
        const item = document.createElement('figure');
        item.classList.add('gallery-item');
        const img = document.createElement('img');
        img.src = `cat${i}`
        img.alt = 'cat'

        item.appendChild(img)

        where.appendChild(item)
    }

}


const createAbout = function () {
    //creation
    const section = document.createElement('section');
    section.classList.add('about-section')

    const container = document.createElement('div');
    container.classList.add('container');

    const aboutBox = document.createElement('div')
    aboutBox.classList.add('about-box')

    const heading = document.createElement('h3');
    heading.classList.add('heading-tertiary');
    heading.textContent = 'Have a look at our employes';

    const aboutParagraph1 = document.createElement('p');
    aboutParagraph1.textContent = "aren't they cute?"
    const aboutParagraph2 = document.createElement('p');
    aboutParagraph2.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex reprehenderit doloremque sint, a pariatur, iure distinctio molestiae qui, cum modi aliquam saepe omnis voluptatum quae consequatur laboriosam possimus libero!'

    const gallery = document.createElement('div')
    gallery.classList.add('gallery')

    //appending
    createGallery(gallery);

    aboutBox.appendChild(heading)
    aboutBox.appendChild(aboutParagraph1)
    aboutBox.appendChild(aboutParagraph2)

    container.appendChild(aboutBox)
    container.appendChild(gallery)

    section.appendChild(container);

    return section;
}



export const renderHome = () => {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHero());
    main.appendChild(createAbout());
  }