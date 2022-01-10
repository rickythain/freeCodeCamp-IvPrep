function selectionSort(array) {
  // Only change code below this line
  
  for(let i = 0; i < array.length; i++) {
    // get the unsorted part of the array
    let splicedArr = array.slice(i, array.length);
    let min = Math.min(...splicedArr);
    // get the index of the min value 
    let minIndex = splicedArr.indexOf(min);
    // swap the first element in the unsorted arr with the min value
    [splicedArr[0], splicedArr[minIndex]] = [splicedArr[minIndex], splicedArr[0]];
    // get sorted part of the array
    let complete = array.slice(0, i);
    // combine the arrays
    array = complete.concat(splicedArr);
  }
  
  return array;
  // Only change code above this line
}

console.log(selectionSort([9, 4, 2, 5, 7])); 
