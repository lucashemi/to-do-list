const form = document.getElementById('form');
const list = document.getElementById('list');
const jsList = JSON.parse(localStorage.getItem('jsList')) || []

jsList.forEach(element => {
    createElement(element);
    const tag = document.querySelector("[data-id='"+element.id+"']");
    if(jsList[jsList.findIndex(el => el.id == tag.dataset.id)].done == true) {
        checkElement(tag.childNodes[1], tag.dataset.id);
    }
});

form.addEventListener('submit', (submit) => {
    submit.preventDefault();

    const name = submit.target.elements['add'];

    if (name.value.length == 0) {
        return;
    }

    const item = {
        "name" : name.value,
        "done" : false
    };

    item.id = jsList[jsList.length - 1] ? (jsList[jsList.length - 1]).id + 1 : 0;
    createElement(item);
    jsList.push(item);

    localStorage.setItem('jsList', JSON.stringify(jsList))

    form[0].value = '';

});

function createElement(item) {
    const newItem = document.createElement('li');
    newItem.classList.add('item');

    newItem.dataset.id = item.id;

    newItem.textContent += item.name;

    newItem.appendChild(checkboxButton(item.id));

    newItem.appendChild(editButton(item.id));
    
    newItem.appendChild(deleteButton(item.id));

    list.appendChild(newItem);
}
