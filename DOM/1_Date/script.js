// Date

// Construction d'une date

// > Vide
const date1 = new Date(); // Date du jour à l'instant T
console.log('date1 :>> ', date1);

// > Timestamp
// Nombre de millisecondes écoulé depuis le 1er janvier 1970 à 00:00:00.000
console.log(Date.now());

const date2 = new Date(1723021735051);
console.log('date2 :>> ', date2);

// > Objet date
const date6 = new Date(date1);
console.log('date6 :>> ', date6);

// > Format chaine de caractères
const date3 = new Date("2024-09-30 15:30:42"); // Américain: YYYY-MM-DD HH:MM:SS.MMMM
console.log('date3 :>> ', date3);

const date4 = new Date("30-09-2024"); // Européenne : Non fonctionnelle
console.log('date4 :>> ', date4);

const date5 = new Date("09-30-2024"); // Anglaise : Fonctionnelle
console.log('date5 :>> ', date5);

// > Paramètre de date
// new Date( year , monthIndex [ , day [ , hour [ , minute [ , second ] ] ] ] );

const date7 = new Date(1996, 3);
console.log('date7 :>> ', date7);

const date8 = new Date(1996, 3, 3);
console.log('date8 :>> ', date8);

const date9 = new Date(1996, 3, 3, 9, 32, 58, 123);
console.log('date9 :>> ', date9);

// Accesseurs (Getters) & mutateurs (Setters)

// Accesseurs

const year = date1.getFullYear();
console.log('year :>> ', year);

const month = date1.getMonth();
console.log('month :>> ', month); // Index !

const dayOfMonth = date1.getDate();
console.log('dayOfMonth :>> ', dayOfMonth);

const dayOfWeek = date1.getDay();
console.log('dayOfWeek :>> ', dayOfWeek);

const hours = date1.getHours();
console.log('hours :>> ', hours);

const minutes = date1.getMinutes();
console.log('minutes :>> ', minutes);

const seconds = date1.getSeconds();
console.log('seconds :>> ', seconds);

const milliseconds = date1.getMilliseconds();
console.log('milliseconds :>> ', milliseconds);


const timestamp = date1.getTime();
console.log('timestamp :>> ', timestamp);

date1.setFullYear(2029);

console.log('date1 :>> ', date1);


const formatDate = date1.toLocaleDateString('ja-JP', { day: "2-digit", month: "long", year: "numeric" });
console.log('formatDate :>> ', formatDate);


const formatDate2 = date1.toLocaleDateString(
    navigator.language, 
    { day: "2-digit", month: "long", year: "numeric", weekday: 'long' }
);
console.log('formatDate2 :>> ', formatDate2);