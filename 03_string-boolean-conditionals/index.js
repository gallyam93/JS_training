    // Задание 1

let password = "123456789";

let x = password.includes('_');
let c = password.includes('-');

if ((x || c) && password.length >= 4) {
console.log('Пароль надежный')}
else if (x || c) {
console.log('Пароль не надежный')
console.log('Для надежного пароля количество символов должно быть не менее 4-х')}
else {
console.log('Пароль не надежный')
console.log('Для надежного пароля добавьте символ \- или \_')};


    // Задание 2

let userName = 'dima';
let userSurname = 'iaMAnov';

let firstName = (userName.substring(0, 1).toUpperCase());
let lastName = (userName.substring(1).toLowerCase());
let userNameNew = (`${firstName}${lastName}`);

let firstSurname = (userSurname.substring(0, 1).toUpperCase());
let lastSurname = (userSurname.substring(1).toLowerCase());
let userSurnameNew = (`${firstSurname}${lastSurname}`);


console.log(`${userNameNew} ${userSurnameNew}`)
let i = '';
i = userName === userNameNew && userSurname === userSurnameNew ? console.log('Имя осталось без изменений') : console.log('Имя было преобразовано');


    // Задание 2


let number;
let counter;

for (counter = 0; counter < 6; counter++) {
number = Math.round(Math.random() * 100);
let u = number % 2;
console.log(number);
u === 0 ? console.log('Число чётное') : console.log('Число нечётное');
}

