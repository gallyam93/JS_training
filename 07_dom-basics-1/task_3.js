let allStudents = [
  { name: 'Валя', age: 11 },
  { name: 'Таня', age: 24 },
  { name: 'Рома', age: 21 },
  { name: 'Надя', age: 34 },
  { name: 'Антон', age: 7 },
];

function createStudentsList(users) {
  let div = document.createElement('div');
  let ul = document.createElement('ul');
  document.body.append(div);
  div.append(ul);

  for (let x in users) {
    let li = document.createElement('li');
    let h2 = document.createElement('h2');
    let paragraph = document.createElement('p');
    ul.append(li);
    li.append(h2);
    h2.textContent = `Name: ${users[x].name}`;
    li.append(paragraph);
    paragraph.textContent = `Age: ${users[x].age} years`;
  }
}

document.addEventListener('DOMContentLoaded', createStudentsList(allStudents));
