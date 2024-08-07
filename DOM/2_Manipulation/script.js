
// 1. Récupération des éléments HTML

// > Sur base de l'ID : getElementById(id: string): HTMLElement | null
const btn = document.getElementById('btn01');
console.log('btn :>> ', btn);

// > Sur base d'une classe : getElementsByClassName(class: string) : HTMLCollectionOf<Element>

const titles = document.getElementsByClassName('title');
console.log('titles :>> ', titles);

// for (const title of titles) {
//     console.log('title :>> ', title);
// }

// > Sur base d'une balise : getElementsByTagName(balise: string) : HTMLCollectionOf<Element>
const paragraphs = document.getElementsByTagName('p');
console.log('paragraphs :>> ', paragraphs);

// > Sur base d'un sélecteur CSS
// - querySelector(css: string)
// - querySelectorAll(css: string) : NodeListOf<Element>

const pAfterTitle = document.querySelectorAll('.title + p');
console.log('pAfterTitle :>> ', pAfterTitle);

// for (const p of pAfterTitle) {
//     console.log('p :>> ', p);
// }

// 2. Création d'élément HTML + modification

const newBtn = document.createElement('button');
console.log('newBtn :>> ', newBtn);

// Modifier le contenu du bouton (texte)
newBtn.innerText = "Ho ho !";
newBtn.textContent = "<p>Mon nouveau bouton<p>";
// newBtn.innerHTML = "Haha !"; // Attention à l'injection HTML

// 3. Insérer les éléments créés sur la page HTML

// Insérer en tant que dernier enfant
const wrapper = document.getElementById('wrapper');
wrapper.append(newBtn, document.createElement('p'));
const newP = wrapper.appendChild(document.createElement('p'));
newP.textContent = "Nouveau paragraphe";

wrapper.insertAdjacentHTML('afterbegin', "<p id='monId' class='yellow'>Text</p>");
const newP2 = wrapper.insertAdjacentElement('afterbegin', document.createElement('p'));
newP2.textContent = "InsertAdjacentElement";


// Récupération du Element parent

const parentNewP2 = newP2.parentElement;
console.log('parentNewP2 :>> ', parentNewP2);

// 4. Modifier (avancé) les propriétés d'un élément HTML

const img = document.createElement('img');
wrapper.append(img);

// img.src = "/assets/img/photo.png";
img.id = "pic01";
// Attention, className écrase les anciennes classes
// img.className = "img";
// img.className = "img-border";

img.classList.add('img', 'img-border');
img.classList.remove('img');

img.classList.toggle('img-border');
img.classList.toggle('img-border');

console.log('img :>> ', img);

const userInput = document.getElementById('userInput');

console.log('userInput.value :>> ', userInput.value);

// 5. Supprimer un élément HTML

// - node.remove();
// - parentNode.removeChild(node);

newP.remove();
wrapper.removeChild(newP2);

// 6. Assigner un événement à un élément
console.log('btn :>> ', btn);

// Attention, la propriété onclick ne peut prendre qu'un seul callback !!

// btn.onclick = showConsole;
// btn.onclick = showHello;

// Passer par un écouteur d'événement (peut prendre plusieurs callback)

btn.addEventListener('click', showConsole);
btn.addEventListener('click', showHello);

btn.addEventListener('click', (e) => {
    console.log(e)
})

// console.log(showConsole);

function showConsole () {
    console.log("T'as cliqué sur le bouton");
}

function showHello () {
    console.log("Hello !");
}