let objects = [
  { name: 'Василий', surname: 'Васильев' },
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Пётр', surname: 'Петров' }
]


function filter(arr, prop, value){
    let findUser = ['Никого не нашли'];
    for (let find in arr) {
      if (arr[find][prop].includes(value)) {
        findUser = arr[find]
      }
    }
    return findUser;


  // Здесь решение задачи
  // arr - массив объектов
  // prop - свойство по которому производится фильтрация
  // value - значение свойства по которому производится фильтрация
}

let result = filter(objects, 'name', 'Иван');
console.log(result);
