// Tableaux

// Création d'un tableau

const tab = []; // A la volée (❤️)
const tab2 = new Array(); // Avec le constructor

tab[1] = 4;
tab[100] = 4;

console.log(tab);
console.log(tab.length);
console.log(tab[101]);

const tab3 = [];
tab3["lundi"] = "Java";
tab3["mardi"] = "Java";
tab3["mercredi"] = "Java";
tab3["jeudi"] = "Javascript";
tab3["vendredi"] = "Javascript";

console.log(tab3.length); // 0

tab3[0] = "Python";

console.log(tab3.length); // 1

console.log(Object.keys(tab3).length);

// méthodes

const array = [];

array.push(42, 23, 25, 93);

console.log('array :>> ', array);

array.push(["a", "b"])

console.log('array :>> ', array);


const removedValue = array.pop();

console.log('array :>> ', array);
console.log('removedValue :>> ', removedValue);


// > Array.splice(indexStart, nbElementSupp [ , ...ElementAAjouter ])

console.log(array.splice(0, 1)); // 42

console.log('array :>> ', array);

array.splice(array.length, 0, 42, 55);

console.log('array :>> ', array);


const sum = array.reduce( 
    (accumulateur, value) => accumulateur + value
)

console.log(array, sum);

const ar = ["Quentin", 42, true, "bonjour", 1, "quentin", 50, 5, 20, 130, 11];

ar.sort();

console.log(ar);

ar.sort( (a, b) => a - b );
console.log(ar);

ar.sort( (a, b) => b - a );
console.log(ar);