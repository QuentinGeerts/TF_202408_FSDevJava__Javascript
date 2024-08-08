
console.log('document.forms:', document.forms);

console.log('document.forms[0]:', document.forms[0]);
console.log('document.forms["myForm"]:', document.forms["myForm"]);
console.log('document.forms.myForm:', document.forms.myForm);

console.log(document.getElementById('myForm'));

const myForm = document.forms['myForm'];
console.log(myForm.firstname);

const myForm2 = document.getElementById('myForm');
console.log(myForm2.firstname);
console.log(myForm2.elements);
console.log(myForm2.elements.firstname);

myForm2.addEventListener('submit', handleForm);

function handleForm (e) {

    e.preventDefault();

    let formIsValid = true;

    const form = e.target;

    if (!form.firstname.value.trim() || form.firstname.value.length < 2) {
        formIsValid = false;
        form.firstname.style.border = "1px solid red";

        if (!form.firstname.value.trim()) {
            form.firstname.nextElementSibling.textContent = "Vous devez entrer une valeur";
        }
    }

    if (formIsValid) {
        const person = {
            firstname: form.firstname.value,
            javascript: form.javascript.checked,
            html: form.html.checked,
            css: form.css.checked,
            sex: form.sex.value,
            birthdate: form.birthdate.value
        };
        console.log('person :>> ', person);

        form.reset();
        form.firstname.focus();
    }


    
}