const meals = [
    {
        name: 'Margherita',
        description: "Garlic oil, Grana Padano cheese Homemade garlic-infused, olive oil, Grana Padano cheese",
    },
    {
        name: 'Pepperoni',
        description: "Pepperoni sausage, garlic oil, and Grana Padano cheese, Pepperoni sausage, home-made garlic-infused olive oil, Grana Padano cheese",
    },
    {
        name: 'Hawaii',
        description: "Cotto ham, pineapple, garlic oil, and Grana Padano cheese, Cotto ham, pineapple, home-made garlic-infused olive oil, Grana Padano cheese",
    },
    {
        name: 'Capriciosa',
        description: "Cotto ham, marinated red pepper, stewed mushrooms, pesto, garlic oil, Grana Padano cheese Cotto Ham, marinated red peppers, stewed champignons, pesto, home-made garlic-infused olive oil, Grana Padano cheese",
    },
    {
        name: 'Nduja',
        description: "Spicy ‘Nduja sausage, red onion, green olives, black olives, garlic oil, Grana Padano cheese Spicy Italian salami ‘Nduja, red onion, green olives, black olives, home-made garlic-infused olive oil, Grana Padano cheese",
    },
    {
        name: 'Calzone',
        description: "Stuffing: mozzarella cheese, fresh champignons, Italian cotto ham. All topped with tomato sauce and sprinkled with oregano. Staffed with mozzarella cheese, fresh champignons, cotto ham. Tomato sauce and oregano",
    }
]

const createMeal = ( name, description) => {
    const meal = document.createElement('div');
    meal.classList.add('meal');

    const img = document.createElement('img');
    img.src = '../src/img/pizza-1.jpg' ;
    img.alt = 'pizza';

    const span = document.createElement('span');
    span.classList.add('meal-name');
    span.textContent = name;

    const p = document.createElement('p');
    p.classList.add('meal-description"');
    p.textContent = description;

    meal.appendChild(img)
    meal.appendChild(span)
    meal.appendChild(p)

    return meal;
    
}


const createMenu = function () {
    //creation
    const section = document.createElement('section');
    section.classList.add('hero-section')
    
    const container = document.createElement('div');
    container.classList.add('container');

    const heading = document.createElement('h3');
    heading.classList.add('heading-tertiary');
    heading.textContent = 'Here is our beloved menu';

    const menu = document.createElement('div');
    menu.classList.add('menu');

    //appending

    for(let i = 0; i < meals.length; i++){
        const createdMeal = createMeal(meals[i].name, meals[i].description);
        menu.appendChild(createdMeal)
    }

    container.appendChild(heading)
    container.appendChild(menu)
    section.appendChild(container)

    return section;
}