function insertionSort(array) {
  // Only change code below this line

  for(let i = 0; i < array.length; i++) {
    let currentIdx = i;
    for(let j = i-1; j > -1; j--) {
      // swap values if current value is less than the previous value
      if(array[currentIdx] < array[j]) {
        [array[currentIdx], array[j]] = [array[j], array[currentIdx]]
        // updates the position of the current value
        currentIdx = j;

      }
    }
  }

  console.log(array);
  return array;
  // Only change code above this line
}

insertionSort([9, 2, 4, 1, 8, 7]);