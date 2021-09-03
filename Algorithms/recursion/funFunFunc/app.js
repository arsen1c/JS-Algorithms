function countDownFrom(n) {
  if (n === 0) return;
  console.log(n);
  countDownFrom(n-1);
}

countDownFrom(10);



const categories = [
  {id: 'animals', 'parent': null},
  {id: 'mammals', 'parent': 'animals'},
  {id: 'cats', 'parent': 'mammals'},
  {id: 'dogs', 'parent': 'mammals'},
  {id: 'chihuahua', 'parent': 'dogs'},
  {id: 'labrador', 'parent': 'dogs'},
  {id: 'persian', 'parent': 'cats'},
  {id: 'siamese', 'parent': 'cats'},
]

const makeTreee = (categories, parent) => {
  let node = {};
  categories
    .filter(c => c.parent === parent)
    .forEach(c => node[c.id] = makeTreee(categories, c.id))

  return node
}

console.log(JSON.stringify(makeTreee(categories, null), null, 2))