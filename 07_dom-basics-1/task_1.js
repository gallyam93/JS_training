function createStudentCard (name, age) {
  let div = document.createElement('div');
  let h2 = document.createElement('h2');
  let paragraph = document.createElement('p');
  document.body.append(div);
  div.append(h2);
  div.append(paragraph);
  h2.textContent = `Имя: ${name}`;
  paragraph.textContent = `Возраст: ${age} лет`;
}
document.addEventListener('DOMContentLoaded', createStudentCard('Игорь', 17));
