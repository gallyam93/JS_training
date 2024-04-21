
function test(obj, name = 'name') {
  console.log(obj[name]);
}

let me = {
  name: `Dmitriy`,
  surname: `Yamanov`,
  age: 30,
  married: `yes`
};

test(me, `name`);
test(me, "married");
test(me);
