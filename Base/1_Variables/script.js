// > Commentaires :

// Sur une seule ligne

/*
    Commentaire
    Sur 
    Plusieurs 
    Lignes
*/

// CTRL + :

// > Variables

// Déclaration de variables

// var (<!> à ne plus utiliser → Avant 2015)
// let (A partir de 2015)
// const (A partir de 2015)

let firstname;

console.log(typeof firstname); // undefined

firstname = "Quentin";

console.log(typeof firstname); // string 

firstname = 42;

console.log(typeof firstname); // int ? => number

firstname = 42.2;

console.log(typeof firstname); // double ? => number

firstname = true;

console.log(typeof firstname); // boolean

let lastname = "Geerts";

// > Constantes

const PI = 3.141592;
// PI = 3.14; // Ne fonctionne pas

// > Let vs Var vs Const

// VAR

var test1 = 42;
var test1 = 5; // Redéclaration possible dans le même bloc

if (true) {
    console.log(test1); // 5
    var test1 = 45;
    console.log(test1); // 45
}

console.log(test1); // 45

// LET (Pareil pour const)

let test2 = 42;
// let test2 = 5; // Redéclaration impossible dans le même bloc

if (true) {
    // console.log(test2); // 42
    let test2 = 5;
    console.log(test2); // 5
}

console.log(test2); // 42

