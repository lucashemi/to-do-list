import { jsList } from "./list.js";

export function checkboxButton(id) {
    const checkboxElement = document.createElement('i');

    checkboxElement.classList.add('fa-regular');
    checkboxElement.classList.add('fa-square');
    
    checkboxElement.setAttribute('title', 'Mark as done');

    checkboxElement.addEventListener('click', (click) => {
        checkElement(click.target, id);
    });

    return checkboxElement;
}

function checkElement(element, id) {
    if (element.classList.contains('fa-square')) {
        element.classList.remove('fa-square');
        element.classList.add('fa-square-check');
        element.parentNode.style.textDecoration = 'line-through';
        element.parentNode.style.opacity = '0.6';
        id = jsList.findIndex(el => el.id == id)
        jsList[id].done = true;
        localStorage.setItem('jsList', JSON.stringify(jsList));
    } else {
        element.classList.add('fa-square');
        element.classList.remove('fa-square-check');
        element.parentNode.style.textDecoration = '';
        element.parentNode.style.opacity = '';
        id = jsList.findIndex(el => el.id == id)
        jsList[id].done = false;
        localStorage.setItem('jsList', JSON.stringify(jsList));
    }
}