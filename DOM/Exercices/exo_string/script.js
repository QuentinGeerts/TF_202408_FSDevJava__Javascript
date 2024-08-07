/*

    • Chaîne : « ma formation javascript »
    • Avec la chaîne ci-dessus :
    – Retourner la position de « ma »
    – Indiquer l’indice de la lettre « p »
    – Retrouver la lettre située à l’indice 21
    – Remplacer « javascript » par « Java »
    – Découper la chaîne avec le délimiteur «  » (espace)
    – Inverser la chaîne de caractères (+ difficile) :
    « ma formation javascript » → « tpircsavaj noitamrof am »

*/

const chaine = "ma formation javascript";

// - Position de "ma"
console.log("position de ma ", chaine.indexOf("ma"));

// - Position de "p"
console.log("position de p ", chaine.search(/p/g));

// - Lettre située à l'indice 21
console.log("caractère à l'indice 21 ", chaine.at(21));
console.log("caractère à l'indice 21 ", chaine.charAt(21));

// - Remplacer js par java
console.log("remplacer javascript par Java: ", chaine.replace("javascript", "Java"));

// - Découper la chaine " "
console.log("Découper la chaine ' ': ", chaine.split(' '));

// - Inverser la chaîne de caractères

// 1. Transformer la chaine en tableau
// 2. Retourner le tableau
// 3. Transformer le tableau en chaine

let stringToArray = chaine.split('');
console.log(stringToArray);

let arrayReversed = stringToArray.reverse();
console.log(arrayReversed);

let arrayToString = arrayReversed.join('');
console.log(arrayToString);

console.log(chaine.split('').reverse().join(''));
