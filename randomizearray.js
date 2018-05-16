function randomize(array) {
  let randomDictionary = {};
  let results = [];

  while (Object.keys(randomDictionary).length < array.length) {
    index = getRandomIndex(array.length);
    if (!randomDictionary[index]) {
      randomDictionary[index] = true;
      results.push(array[index]);
    }
  }

  return results;
}

function getRandomIndex(num) {
  return Math.ceil(Math.random() * num) - 1;
}
