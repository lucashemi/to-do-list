import { jsList } from "./list.js";

export function deleteButton(id) {
    const deleteButtonElement = document.createElement('i');
    deleteButtonElement.classList.add('delete', 'fa-solid', 'fa-trash');
    deleteButtonElement.setAttribute('title', 'Delete');

    deleteButtonElement.addEventListener('click', (clicked) => {
        deleteElement(clicked.target.parentNode, id);
    });

    return deleteButtonElement;
}


function deleteElement(element, id) {
    element.remove();
    jsList.splice(jsList.findIndex(el => el.id === id), 1);
    localStorage.setItem('jsList', JSON.stringify(jsList));
}