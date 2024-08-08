/* 
    1. Ajouter un bouton "Supprimer" à droite de la tâche pour supprimer les tâches terminées.  
    
    2. Ajouter un input de type checkbox devant le texte de la li (à l'intérieur),
        qui permettra de cocher les tâches terminées. (Rappel: InsertAdjacentElement)
        C'aura pour effet de mettre le texte en gris clair et barré (utilisation de classe). (Rappel: classList) 
    
    3. Ajouter à côté du bouton "Ajouter", un autre bouton permettant de vider toute la liste.
*/

const todos = document.getElementById('todos');
const btnTaskAdd = document.getElementById('btnTaskAdd');
const userInput = document.getElementById('userInput');
const btnReset = document.getElementById('btnReset');

btnTaskAdd.onclick = addTask;
// btnTaskAdd.addEventListener('click', addTask);

userInput.addEventListener('keydown', (e) => {
    if (e.key === "Enter") addTask();
});

btnReset.addEventListener('click', removeAll);

function addTask () {
    // Vérification du contenu de la tâche

    let safeValue = userInput.value.trim();
    userInput.value = "";

    if (!safeValue || isAlreadyInList(safeValue)) return;

    // 1. Créer l'élément LI
    const li = document.createElement('li');

    // 2. Modifier l'élément LI
    li.textContent = safeValue;

    // 3. Ajouter l'élément LI à la liste
    todos.append(li);

    // todos.appendChild(document.createElement('li')).textContent = "item";

    // Création du bouton de suppression

    const btnRemove = document.createElement('button');
    btnRemove.textContent = "Remove";
    li.append(btnRemove);
    btnRemove.addEventListener('click', removeTask);


    // Création de la checkbox

    const cbDone = document.createElement('input');
    cbDone.type = "checkbox";
    // li.insertAdjacentElement('afterbegin', cbDone);
    li.prepend(cbDone);

    cbDone.addEventListener('input', toggleIsDone);
}

function isAlreadyInList (value) {
    for (const element of todos.children) {
        if (element.textContent === value) return true;
    }
    return false;
}

function removeAll () {
    // for (let i = todos.children.length - 1; i >= 0; i--) {
    //     todos.children[i].remove();

    // }

    todos.textContent = "";
}

function removeTask (event) {
    event.target.parentElement.remove();
}

function toggleIsDone(event) {
    if (event.target.checked) {
        event.target.parentElement.classList.add('isDone')
    }
    else {
        event.target.parentElement.classList.remove('isDone')
    }
}