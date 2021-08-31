const arrOfNumber_1 = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
const arrOfNumber_2 = [8, 1, 4, 8, 10, 8, 1, 5, 7, 8, 7]


function arrMostDuplicated(array) {
  let numbers = {};
  array.forEach((i) => { numbers[i] = (numbers[i] || 0) + 1; });
  const result = Object.keys(numbers).reduce((acc, curr) => {
    if (!acc[Object.keys(acc)[0]]) {
      acc[curr] = numbers[curr]
    }
    return acc = acc[Object.keys(acc)[0]] > numbers[curr]
      ? acc
      : { [curr]: numbers[curr] }
  }, {})
  console.log(result)
}
arrMostDuplicated(arrOfNumber_1)
arrMostDuplicated(arrOfNumber_2)



