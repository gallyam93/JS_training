function createStudentCard(user) {
  let div = document.createElement('div');
  let h2 = document.createElement('h2');
  let paragraph = document.createElement('p');
  document.body.append(div);
  div.append(h2);
  div.append(paragraph);
  h2.textContent = user.name;
  paragraph.textContent = `Возраст: ${user.age} лет`;
}

let studentObj = {
  name: 'Игорь',
  age: 17,
};

document.addEventListener('DOMContentLoaded', createStudentCard(studentObj));
