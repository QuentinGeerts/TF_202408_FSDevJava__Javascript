// Structures itératives

// while
// do ... while
// for

// forof
// forin

// Array.foreach


// 3 éléments importants pour une boucle :
// - Initialisation
// - Condition
// - Incrémentation / modification

// > while

// Initialisation

// while (condition) {

     // bloc d'instruction

     // Incrémentation
// }

// > do ... while

/*

initialisation

do {

    // bloc d'instructions

    incrementation

} while (condition);

*/

// > For

/*

for (let i = 0; i < 10; i++) {
    // bloc d'instructions    
}

*/

const tab = ["a", "b", "c", "d", "e"];

const personne = { nom: 'Geerts', prenom: 'Quentin' };

// > forin
/*

for (const key in object) {
    
}

*/

for (const index in tab) {
    console.log(index, tab[index]);
}

for (const toto in personne) {
    console.log(toto, personne[toto]);
}

// > forof

/*

for (const iterator of object) {
    
}

*/

for (const value of tab) {
    console.log(value);
}


// Ne fonctionne pas car personne n'est pas itérable
// for (const caracteristique of personne) {
//     console.log(caracteristique);
// }

for (const letter of "Coucou tout le monde !") {
    console.log(letter);
}


tab.forEach(element => console.log(element));