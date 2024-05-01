const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {

    if (input.value.trim() !== '') {

        const listItem = document.createElement('li');
        listItem.textContent = input.value.trim();

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', function () {
            list.removeChild(listItem);
            input.focus();
        });

        listItem.appendChild(deleteButton);
        list.appendChild(listItem);

        input.value = '';
    } else {
        alert('Please enter a chapter name.');
        input.focus();
    }
    input.focus();
});
