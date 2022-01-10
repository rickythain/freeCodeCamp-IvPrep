function mergeSort(array) {
  // Only change code below this lin
  let halfLen = array.length / 2;

  let firstHalf = array.splice(0, halfLen);
  let secondHalf = array;
  
  if(firstHalf.length > 1) firstHalf = mergeSort(firstHalf)
  if(secondHalf.length > 1) secondHalf = mergeSort(secondHalf)

  return merge(firstHalf, secondHalf);
  // Only change code above this line
}

function merge(arr1, arr2) {
  let arr = arr1.concat(arr2);
  let sortedArr = []
  while(arr.length > 0) {
    let minVal = Math.min(...arr);
    sortedArr.push(minVal);
    arr.splice(arr.indexOf(minVal), 1);
  }

  return sortedArr;
}
