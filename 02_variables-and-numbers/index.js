// Задача 1
let x1 = 8;
let y1 = 1;
let x2 = 5;
let y2 = 1;

let cathetus1 = Math.abs(x1 - x2);
let cathetus2 = Math.abs(y1 - y2);

console.log(cathetus1 * cathetus2);

// Задача 2

let a = 13.890123;
let b = 2.891564;
let n = 3;

let numberA = Math.floor(a);
let numberB = Math.floor(b);
let normalizedA = Math.round((a - numberA) * Math.pow(10, n));
let normalizedB = Math.round((b - numberB) * Math.pow(10, n));


console.log(normalizedA);
console.log(normalizedB);
console.log('Первое число меньше второго', normalizedA < normalizedB);
console.log('Первое число больше второго', normalizedA > normalizedB);
console.log('Первое число меньше либо равно второму', normalizedA <= normalizedB);
console.log('Первое число больше либо равно второму', normalizedA >= normalizedB);
console.log('Числа равны', normalizedA === normalizedB);
console.log('Числа не равны', normalizedA !== normalizedB);

// Задача 3

let u = -3;
let o = -10;

let minN = Math.min(u, o);
let maxN = Math.max(u, o);
let range = maxN - minN;
let endN = Math.round(Math.random() * range) + minN;
console.log('Диапозон чисел от', minN, 'до', maxN);
console.log('Ваше случайное число', endN);
