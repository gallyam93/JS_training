let n = -3;
let m = -10;
let count = 10;
let arr = [];

let range = Math.abs (n - m);
let minNumb = Math.min(n, m);

for (let i = 0; i < count; i++)
{
  arr.push(Math.round(Math.random() * range) + minNumb);
}

console.log(arr);
