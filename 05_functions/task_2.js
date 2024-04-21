let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru'];
let blackList = ['jsfunc@mail.ru','goodday@day.ru'];
let clearList = [];

function filter ()  {
  for (let x of whiteList) {
    if (!blackList.includes(x)) {
      clearList.push(x)
    }
  }
  return clearList;
}

console.log(filter());
