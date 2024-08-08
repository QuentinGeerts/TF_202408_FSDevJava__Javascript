/*
    Créez un programme qui permet d’ajouter un élément à une liste lorsque l’on clique sur un bouton.
*/

const todos = document.getElementById('todos');
const btnTaskAdd = document.getElementById('btnTaskAdd')

btnTaskAdd.onclick = addTask;
// btnTaskAdd.addEventListener('click', addTask);

function addTask () {
    // 1. Créer l'élément LI
    const li = document.createElement('li');

    // 2. Modifier l'élément LI
    li.textContent = "item";

    // 3. Ajouter l'élément LI à la liste
    todos.append(li);

    // todos.appendChild(document.createElement('li')).textContent = "item";
}