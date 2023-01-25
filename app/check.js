import { jsList } from "./list.js";

export function checkboxButton(id) {
    const checkboxElement = document.createElement('i');
    checkboxElement.classList.add('fa-regular', 'fa-square');
    checkboxElement.setAttribute('title', 'Mark as done');

    checkboxElement.addEventListener('click', (click) => {
        toggleCheck(click.target, id);
    });

    return checkboxElement;
}

export function toggleCheck(element, id) {
    if (element.classList.contains('fa-square')) {
        element.classList.replace('fa-square', 'fa-square-check');
        element.parentNode.classList.toggle('checked');
        id = jsList.findIndex(el => el.id == id)
        jsList[id].done = true;
        localStorage.setItem('jsList', JSON.stringify(jsList));
    } else {
        element.classList.replace('fa-square-check', 'fa-square');
        element.parentNode.classList.toggle('checked');
        id = jsList.findIndex(el => el.id == id)
        jsList[id].done = false;
        localStorage.setItem('jsList', JSON.stringify(jsList));
    }
}