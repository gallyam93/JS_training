let arr =[];
let count = 5;
let n = 0;

for (let i = 1; i <= count; i++) {
  arr.push(i);
}

for (let i in arr) {
  let j = Math.floor(Math.random() * count)
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
console.log(arr);

if (arr.length > n) {
    console.log(arr[n]);
}
else {
  console.log('error');
}
