// Sous-programme

// Fonction => retourne qq'chose
// Procédure => ne retourne rien

// function nomFonction () {
//     // return ...;
// }


function square (number) {
    return number ** 2;
}

const result = square(4);

function displayArray(array, separator = ",") {

    let format = "[";

    for (let i = 0; i < array.length; i++) {
        format += array[i];
        
        if (i < array.length - 1) format += separator;
    }

    format += "]";

    console.log(format);
} 

displayArray([1, 2, 3, 4, 5, 6]);
displayArray([1, 2, 3, 4, 5, 6], " - ");


// Passage par référence vs valeur

function passageParValeur(number) {
    number = 42;
}


let myNumber = 1;

console.log(myNumber); // 1

passageParValeur(myNumber);

console.log(myNumber); // 1

function passageParReference(array) {
    array[0] = 42;
}


const array = [1, 2, 3, 4];

console.log('array :>> ', array); // 1 2 3 4

passageParReference(array);

console.log('array :>> ', array); // 42 2 3 4


// > Callback

function customFilter(array, compareFn) {
    const a = [];
    for (const value of array) {
        if (compareFn(value)) a.push(value);
    }
    return a;
}

function isLess35yo (element) {
    return element.age <= 35;
}

function isFemale(element) {
    return element.sex === "F";
}

const persons = [
    { lastname: 'Geerts', firstname: 'Quentin', age: 28, sex: 'M' },
    { lastname: 'Legrain', firstname: 'Samuel', age: 34, sex: 'M' },
    { lastname: 'Geerts', firstname: 'Mélanie', age: 36, sex: 'F' },
    { lastname: 'Ly', firstname: 'Khun', age: 40, sex: 'M' },
    { lastname: 'Herssens', firstname: 'Caroline', age: 40, sex: 'F' },
];



const onlyLess35yo = customFilter(persons, isLess35yo);
console.log('onlyLess35yo :>> ', onlyLess35yo);

const onlyFemale = customFilter(persons, isFemale);
console.log('onlyFemale :>> ', onlyFemale);

// Fonctions anonymes
const onlyGeerts = customFilter(persons, function (p) {
    return p.lastname === "Geerts"; 
})
console.log('onlyGeerts :>> ', onlyGeerts);


// Fonctions fléchées / lambdas
const onlyMale = customFilter(persons, (p) => p.sex === "M");
console.log('onlyMale :>> ', onlyMale);


console.log(persons.filter(p => p.sex === "M"));

// Fonctions anonymes 
// Fonction qui n'a pas de nom

const sum = function (a, b) { return a + b; }

console.log(sum(5, 3));

console.clear();

const person = {
    lastname: 'Geerts',
    firstname: 'Quentin',

    sePresenter: function () {
        return `Je m'appelle ${this.lastname} ${this.firstname}`;
    },

    sePresenter2: () => `Je m'appelle ${this.lastname} ${this.firstname}`
}

console.log(person.sePresenter());
console.log(person.sePresenter2());

// Fonctions fléchées
// Raccourcis d'écriture des fonctions anonymes

/**
 * Fonction qui calcule une addition entre deux nombres fournis en paramètres
 *
 * @param {number} a nombre 1
 * @param {number} b nombre 2
 * @return {number} résultat de l'addition
 */
const addition = (a, b) => a + b; // retourne par défaut

/**
 *
 *
 * @param {number} a
 * @param {number} b
 * @return {number} 
 */
const soustraction = (a, b) => {
    let result = a - b;
    return result;
};

/**
 *
 *
 * @param {any[]} array
 */
const formatArray = array => {

    let str = "[";

    for (let i = 0; i < array.length; i++) {
        str += array[i];

        if (i < array.length - 1) str += ", "
    }

    str += "]";

    console.log(str);

}



const obj = {

    fnAnonyme: function () { console.log("fnAnonyme: ", this); }, // this (context) => obj
    fnFlechee: () => { console.log("fnFlechee", this); }, // this (context) => Window

}

obj.fnAnonyme();
obj.fnFlechee();