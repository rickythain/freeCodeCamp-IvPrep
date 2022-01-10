function bubbleSort(array) {
  // Only change code below this line
  let notSorted = true;

  // loop array till no swapping happens
  while(notSorted){
    notSorted = false;
    array.forEach((element, index, arr) => {
      if(arr[index + 1]) {
        
        // swap current element with the next if it is larger
        if(element > arr[index + 1]) { 
          [arr[index], arr[index+1]] = [arr[index+1], arr[index]];
          notSorted = true;
        }
      }
    }) 
  }
  
  return array;
  // Only change code above this line
}
