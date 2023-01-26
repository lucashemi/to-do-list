import { jsList } from "./list.js";

export function editButton(id) {
    const buttonElement = document.createElement('i');
    buttonElement.classList.add('edit', 'fa-solid', 'fa-pen-to-square');
    buttonElement.setAttribute('title', 'Edit');

    buttonElement.addEventListener('click', (clicked) => {
        editElement(clicked.target.parentNode, id);
    });

    return buttonElement;
}

function editElement(element, id) {
    const form = document.createElement('form');
    const input = document.createElement('input');

    input.style.fontSize = '0.9em';
    input.focus();
    input.value = element.childNodes[0].textContent;
    
    form.appendChild(input);
    hide(element);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        unhide(element, input, form, id);
    }, true);

    form.addEventListener('focusout', (e) => {
        e.preventDefault();
        unhide(element, input, form, id);
    }, true);

    element.appendChild(form);
}

function hide(element) {
    element.childNodes[0].textContent = '';
    element.childNodes[1].style.display = 'none';
    element.childNodes[2].style.display = 'none';
    element.childNodes[3].style.display = 'none';
}

function unhide(element, input, form, id) {
    element.childNodes[0].textContent = input.value;
    element.childNodes[1].style.display = '';
    element.childNodes[2].style.display = '';
    element.childNodes[3].style.display = '';

    input.remove();
    form.remove();

    id = jsList.findIndex(el => el.id == id);
    jsList[id].name = input.value;
    localStorage.setItem('jsList', JSON.stringify(jsList));
}