function getAge (birthday) {
  let currentDate = new Date()
  let currentYear = currentDate.getFullYear()
  return Math.abs(currentYear - birthday);
}

console.log(`Ваш возраст`, getAge(1994))
