const createContact = function () {

    //creation
    const section = document.createElement('section');
    section.classList.add('contact-section')

    const background = document.createElement('div');
    background.classList.add('contact-img')

    const container = document.createElement('div');
    container.classList.add('container');

    const heading = document.createElement('h3');
    heading.classList.add('heading-tertiary')
    heading.textContent = 'You are always welcome!';

    const p1 = document.createElement('p')
    p1.textContent = 'Marszalkowska st 1, Warsaw PL<'
    const p2 = document.createElement('p');
    p2.textContent = '+48 555 555 555';


    //appending
    container.appendChild(heading);
    container.appendChild(p1);
    container.appendChild(p2);
    background.appendChild(container);
    section.appendChild(background);

    return section;
}

export const renderContact = () => {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
  }