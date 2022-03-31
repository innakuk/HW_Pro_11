'use strict';

const year = prompt('Укажите Ваш год рождения.');
const city = prompt('В каком городе Вы живете?');
const sportKind = prompt('Какой Ваш любимый вид спорта?');
const currentYear = 2022;
let age = currentYear - +year;
let resultCity;
let resultSportKind;

let resultYear = year === null || year.trim() === '' ? 'Жаль, что Вы не захотели ввести свой год рождения' : `Ваш возраст: ${age}`;

if (city === 'Киев') {
    resultCity = 'Ты живешь в столице Украины';
}
    else if (city === 'Рим') {
    resultCity = 'Ты живешь в столице Италии';
}
    else if (city === 'Краков') {
    resultCity = 'Ты живешь в столице Польши';
}
    else if (city === null || city.trim() === '') {
    resultCity = 'Жаль, что Вы не захотели ввести свой город';
}
    else {
        resultCity = `Ты живешь в городе ${city}`;
}

switch (sportKind) {
    case 'футбол':
        resultSportKind = 'Круто! Хочешь стать Криштиану Роналду)';
        break;
    case 'бокс':
        resultSportKind = 'Круто! Хочешь стать Александром Усиком)';
        break;
    case 'теннис':
        resultSportKind = 'Круто! Хочешь стать Элиной Свитолиной)';
        break;
    case null:
    case '':
        resultSportKind = 'Жаль, что Вы не захотели ввести свой любимый вид спорта';
        break;
    default:
        resultSportKind = `Ваш любимый вид спорта: ${sportKind}`;
}

let message = `${resultYear}
${resultCity}
${resultSportKind}`

alert(message);