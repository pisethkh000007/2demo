function filterUniqueValues(numbers) {
    return numbers.filter((value, index, array) => array.indexOf(value) === index);
  }
  let numbers = [1, 2, 3, 4, 2, 3, 5, 1, 6];
  let uniqueNumbers = filterUniqueValues(numbers);
  console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6]