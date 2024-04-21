let arr =[];
let count = 5;

for (let i = 1; i <= count; i++) {
  arr.push(i);
}
console.log(arr);

for (let i in arr) {
  let j = Math.floor(Math.random() * count)
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
