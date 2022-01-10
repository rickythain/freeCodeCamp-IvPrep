function quickSort(array) {
  // Only change code below this line
  let pivot = array.shift();
  let arrLow = [];
  let arrHigh = [];

  // separate array into two arrays 
  array.forEach((element) => {
    if(element < pivot) {
      arrLow.push(element); 
    } else {
      arrHigh.push(element);    
    }
  });

  // call this function if subarray has more than 1 item
  if(arrLow.length > 1) {
    arrLow = quickSort(arrLow);
  }
  if(arrHigh.length > 1) {
    arrHigh = quickSort(arrHigh);
  }

  // add pivot item into subarray1
  arrLow.push(pivot);
  
  // return a complete array
  return arrLow.concat(arrHigh);
  // Only change code above this line
}

quickSort([5, 9, 8, 2, 1, 6, 7, 0, 3, 4])