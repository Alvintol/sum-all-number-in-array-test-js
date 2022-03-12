
const sumItems = array => {
  let total = 0;

  array.forEach(num => Array.isArray(num) ? total += sumItems(num) : total += num);
  return total;
}

module.exports = sumItems;

console.log(sumItems([1, 2, 3, 4, 5]));

console.log('FINAL ANSWER:', sumItems([[5, 4, [[3], 2]], 1, []]));

console.log(sumItems([[[[[[[[[[[[[1]]]]]]]]]]]]]));