/*

Exercices récapitulatif - Algorithmique en Javascript
Réaliser un "Plus grand, plus petit, c'est gagné" complet en console.

Le programme génère un nombre aléatoire et vous devez le deviner en maximum 10 tentatives.

Le programme s'arrête si vous trouvez le nombre ou si vous échouez 10 fois.

Vous pouvez ajouter un système de niveau (Facile, Moyen, Difficile) pour augmenter le nombre à deviner ou réduire le nombre de tentatives.



Vous devez travailler avec des fonctions pour séparer toute la logique de l'application.

*/
const tries = [];

function play () {

    let playAgain;

    do {
        tries.length = 0;
        
        let nbTry = 0;

        // Menu
        let choice = showMenu();

        switch (choice) {
            case 1:
                nbTry = 10;
                break;
            case 2:
                nbTry = 10;
                break;
            case 3:
                nbTry = 20;
                break;
        }

        const guessNumber = generateRandom(choice);

        console.log(guessNumber);


        tryToGuess(guessNumber, nbTry);

        playAgain = prompt("Voulez-vous rejouer ? true / false") === "true" ? true : false;

    } while (playAgain);

}

function showMenu () {
    let difficulty = prompt("Choisissez une difficulté : 1. Facile, 2. Moyen, 3. Difficile :");

    while (difficulty !== "1" && difficulty !== "2" && difficulty !== "3") {
        difficulty = prompt("Erreur. Reessayez :");
    }

    return +difficulty;
}

function generateRandom (choice) {
    return Math.floor(Math.random() * (10 ** choice)) + 1;
}

function tryToGuess (guessNumber, nbTry) {

    let userInput = 0;
    let cpt = 0;

    while (userInput != guessNumber && cpt < nbTry) {

        console.log(tries.join(' - '));

        userInput = prompt(`Entrez un nombre (${++cpt}/${nbTry}) :`);
        tries.push(userInput);

        if (userInput < guessNumber) {
            console.log("Plus grand");
        }
        else if (userInput > guessNumber) {
            console.log("Plus petit");
        }

    }

    if (userInput == guessNumber) {
        console.log(`Bravo, vous avez trouvé ${guessNumber} en ${cpt} tentative(s)`);
    }
    else {
        console.log(`Raté, le nombre a deviné était : ${guessNumber}`);
    }

}

play();