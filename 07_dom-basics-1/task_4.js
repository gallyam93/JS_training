let allStudents = [
  { name: 'Валя', age: 11 },
  { name: 'Таня', age: 24 },
  { name: 'Рома', age: 21 },
  { name: 'Надя', age: 34 },
  { name: 'Антон', age: 7 },
];
let button = document.createElement('button');
let div = document.createElement('div');
document.body.append(button);
button.textContent = 'Показать список';
button.classList.add('button');
document.body.append(div);
function createStudentsList(users) {
  let ul = document.createElement('ul');

  if (div.textContent === '') {
    for (let x in users) {
      let li = document.createElement('li');
      let h2 = document.createElement('h2');
      let paragraph = document.createElement('p');
      div.append(ul);
      ul.append(li);
      li.append(h2);
      h2.textContent = `Name: ${users[x].name}`;
      li.append(paragraph);
      paragraph.textContent = `Age: ${users[x].age} years`;
    }
  } else { div.textContent = ''; }
}

button.addEventListener('click', () => {
  createStudentsList(allStudents);
});
