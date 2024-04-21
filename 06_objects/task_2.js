// Не обязательная часть задания
let allUsers=[
  {
    name: 'Валя',
    age: 11
  },
  {
    name: 'Таня',
    age: 24
  },
  {
    name: 'Рома',
    age: 21
  },
  {
    name: 'Надя',
    age: 34
  },
  {
    name: 'Антон',
    age: 7
  }
]


function getOlderUserArray(usersArray){
  let olderUser = usersArray[0];
  for (let user in usersArray) {
    if (olderUser.age < usersArray[user].age) {
      olderUser = usersArray[user];
    }
  }
  return olderUser;
  // Решение 2 через сортровку массива
  // for (let user in usersArray) {
  //   for (let user2 in usersArray) {
  //     if (usersArray[user].age < usersArray[user2].age) {
  //       let temp = usersArray[user];
  //       usersArray[user] = usersArray[user2];
  //       usersArray[user2] = temp;
  //     }
  //   }
  // }
  // return usersArray[usersArray.length-1];
}

let result2 = getOlderUserArray(allUsers)
console.log('Старший пользователь:',result2);
