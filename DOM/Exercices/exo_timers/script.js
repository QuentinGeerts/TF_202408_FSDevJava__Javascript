/*
    Affichez la date et l’heure sur votre page web.
    Mardi 25 Avril
    13:16:32
*/

const date = document.getElementById('date');
const hours = document.getElementById('hours');

updateTime();

function updateTime () {

    const now = new Date();

    // Date
    const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const months = [
        'Janvier', 'Février', 'Mars', 'Avril',
        'Mai', 'Juin', 'Juillet', 'Aout',
        'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];

    date.textContent = now.toLocaleDateString('fr-FR', { weekday: 'long', day: '2-digit', month: 'long' });
    date.textContent = `${daysOfWeek[now.getDay()]} ${now.getDate()} ${months[now.getMonth()]}`;


    // Heure

    hours.textContent = `${padNumber(now.getHours())}:${padNumber(now.getMinutes())}:${padNumber(now.getSeconds())}`;

    setTimeout(updateTime, 1000);
}

function padNumber (number) {
    return number.toString().padStart(2, '0');
}
