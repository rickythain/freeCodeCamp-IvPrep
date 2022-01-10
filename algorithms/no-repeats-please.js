
function permAlone(str) {
  // split string to an array
  let list = str.split('');
  let allPermutations = tryHeap(list, list.length, []);
  let filtered = removeConsecutive(allPermutations);
  return filtered.length;
}

function tryHeap(a, size, output) {
  /*
  produce all permutations
  a: array
  size: length of array
  output: array to contain the permutations
  */
  if (size === 1){
    output.push(Object.values(a));
  }
  
  for(let i =0; i<size; i++) {
    tryHeap(a, size-1, output);
    // if size odd
    if(size %2 === 1) {
      // swap first element
      let temp = a[0];
      a[0] = a[size-1];
      a[size-1] = temp;
    }
    else {
      // swap current element
      let temp = a[i];
      a[i] = a[size-1];
      a[size-1] = temp;
    }
  }
  
  return output;
}

// remove arrays containing consecutive elements
function removeConsecutive(array) {

  let filtered = array.filter((element) => {
    let pass = true;
    element.forEach((e, i, arr) => {
      // if current element and the next element have the same value, return false
      if(e === arr[i+1]) pass = false;
    });
    return pass;
  })

  return filtered;
}


permAlone('aab');
