function editButton(id) {
    const buttonElement = document.createElement('i');
    buttonElement.classList.add('edit');

    buttonElement.classList.add('fa-solid');
    buttonElement.classList.add('fa-pen-to-square');
    buttonElement.setAttribute('title', 'Edit');

    buttonElement.addEventListener('click', (clicked) => {
        editElement(clicked.target.parentNode, id);
    });

    return buttonElement;
}

function editElement(element, id) {
    const forms = document.createElement('form');
    const put = document.createElement('input');

    put.style.fontSize = '0.9em';
    put.focus();
    put.value = element.childNodes[0].textContent;
    
    forms.appendChild(put);

    hide(element);

    forms.addEventListener('submit', (e) => {
        e.preventDefault();
        unhide(element, put, forms, id);
    }, true);

    forms.addEventListener('focusout', (e) => {
        e.preventDefault();
        unhide(element, put, forms, id);
    }, true);

    element.appendChild(forms);
}

function hide(element) {
    element.childNodes[0].textContent = '';
    element.childNodes[1].style.display = 'none';
    element.childNodes[2].style.display = 'none';
    element.childNodes[3].style.display = 'none';
}

function unhide(element, put, forms, id) {
    element.childNodes[0].textContent = put.value;
    element.childNodes[1].style.display = '';
    element.childNodes[2].style.display = '';
    element.childNodes[3].style.display = '';

    put.remove();
    forms.remove();

    id = jsList.findIndex(el => el.id == id);
    jsList[id].name = put.value;
    localStorage.setItem('jsList', JSON.stringify(jsList));
}