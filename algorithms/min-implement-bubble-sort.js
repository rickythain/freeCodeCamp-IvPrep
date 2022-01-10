function bubbleSort(array) {
  // Only change code below this line
  let newArr = [];

  // get minimum integer in array
  while(array.length > 1) {
    let min = Math.min(...array);
    newArr.push(min);
    array.splice(array.indexOf(min), 1);

    if(array.length === 1) {
      newArr.push(array[0]);
    }
  }
    
  return newArr;
  // Only change code above this line
}
