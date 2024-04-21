let arr = [5, 11, 23, 32, 2, 54, 9, 4, 5];

for (let i = 0; i < arr.length; i++){
  for (let j = 0; j < arr.length-1; j++) {
    if (arr[j] > arr[j+1]) {
      let temp = arr[j]
      arr[j] = arr[j+1]
      arr[j+1] = temp
    }
  }
}

console.log(arr);
