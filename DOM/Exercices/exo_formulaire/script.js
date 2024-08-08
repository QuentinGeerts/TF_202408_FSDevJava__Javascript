/*
    Créez un formulaire simple : Nom, Prénom.
    À l’aide du JavaScript, proposez une complétion automatique du formulaire (Jean,
    Dupont) lorsque l’on appuie sur un bouton.

    Ajoutez un bouton qui remet à zéro tous les champs du formulaire

    Ajoutez-y un champ Code Postal.
    À l’aide du JavaScript, faites les vérifications nécessaires sur les champs.
    → Un code postal est un nombre de 4 chiffres (entre 1000 et 9999).
    Vérifiez si les champs sont bien remplis, et si le code postal est conforme.
    Lorsque le formulaire est valide, un message s’affiche sur la page.
*/

const form = document.forms["myform"];
const btnAC = document.getElementById('btnAC');

form.addEventListener('submit', handle);
btnAC.addEventListener('click', autocomplete);

/**
 *
 * @param {SubmitEvent} event
 */
function handle (event) {
    // Annuler l'envoi du formulaire
    event.preventDefault();

    // Vérifier la validité du formulaire
    const lastnameField = form['lastname'];
    const firstnameField = form['firstname'];
    const zipcodeField = form['zipcode'];

    let isValid = true;

    // .... 

    // Lastname
    if (requiredValidator(lastnameField)) {
        lastnameField.style.borderColor = "";
    }
    else {
        lastnameField.style.borderColor = "red";
        isValid = false;
    }

    // Firstname
    if (requiredValidator(firstnameField)) {
        firstnameField.style.borderColor = "";
    }
    else {
        firstnameField.style.borderColor = "red";
        isValid = false;
    }

    // Zipcode
    if (requiredValidator(zipcodeField) && digitValidator(zipcodeField)) {
        zipcodeField.style.borderColor = "";
    }
    else {
        zipcodeField.style.borderColor = "red";
        isValid = false;
    }

    if (isValid) alert("Form sent !");
    else alert("Erreur dans le formulaire");

}

function autocomplete () {
    form.lastname.value = "Doe";
    form.firstname.value = "John";
}

/**
 * Permet de déterminer si le champ possède une valeur
 * @param {HTMLInputElement} field
 * @return {boolean} 
 */
function requiredValidator (field) {
    if (!field.value.trim()) return false;
    return true;
}

/**
 *
 * @param {HTMLInputElement} field
 * @return {boolean}
 */
function digitValidator (field) {
    let value = parseInt(field.value);
    return !isNaN(value) && value >= 1000 && value <= 9999;
}